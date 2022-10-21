class SubjectsController < ApplicationController
    def index
        subjects = Subject.all
        render json: subjects
    end

    def show
    
        subject = Subject.find_by(id: params[:id])
        if subject
            render json: subject, status: :ok
        else
            not_found_response
        end
    end

    private

    def not_found_response
        render json: {error:"Subject not found"}, status: :not_found
    end
end
