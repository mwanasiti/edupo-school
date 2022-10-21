class StudentsController < ApplicationController
    def index
        students = Student.all
        render json: students
    end

    def show
    
        student = Student.find_by(id: params[:id])
        if student
            render json: student, status: :ok
        else
            not_found_response
        end
    end

    private

    def not_found_response
        render json: {error:"Student not found"}, status: :not_found
    end
end
