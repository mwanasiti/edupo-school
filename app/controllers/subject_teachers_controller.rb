class SubjectTeachersController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :render_record_not_found
    rescue_from ActiveRecord::RecordInvalid, with: :render_unproccessable_entity

    def teacher_subjects
        @teacher = Teacher.find_by(id: session[:teacher_id])
        if @teacher
            subjects = SubjectTeacher.where(teacher_id: @teacher.id)
            render json: subjects
        else
        render json: {errors: ["Please Log in as Teacher to view your subjects"]}, status: 401  
        end
    end

    def new_teacher_subject
        subject = Subject.create(name: params[:name])
        subject_teacher = SubjectTeacher.create(subject_id: subject.id, teacher_id: session[:teacher_id])
        render json: subject_teacher, status: 201
    end

    private

    def subject_teacher_params
        params.permit(:name, :subject_id, :teacher_id)
    end

    def render_record_not_found
        render json: {errors: "Student Assignment not found"}, status: 404
    end

    def render_unproccessable_entity(invalid)
        render  json: {errors: invalid.record.errors.full_messages}, status: 422
    end
    
end
