class ClassroomsController < ApplicationController
    def index
        classrooms = Classroom.all
        render json: classrooms
    end

    def show
        classroom = Classroom.find_by(id: params[:id])
        if classroom
            render json: classroom, status: :ok
        else
            not_found_response
        end
    end

    private

    def not_found_response
        render json: {error:"Classroom not found"}, status: :not_found
    end
end
