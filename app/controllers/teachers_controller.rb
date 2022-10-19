class TeachersController < ApplicationController
    def index
        teachers = Teacher.all
        render json: teachers
    end

    def show
    
        teacher = Teacher.find_by(id: params[:id])
        if teacher
            render json: teacher, status: :ok
        else
            not_found_response
        end
    end

    private

    def not_found_response
        render json: {error:"Teacher not found"}, status: :not_found
    end
end
