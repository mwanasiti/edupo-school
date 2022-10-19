class AssessmentsController < ApplicationController
    def index
        assessments = Assessment.all
        render json: assessments
    end

    def show
    
        assessment = Assessment.find_by(id: params[:id])
        if assessment
            render json: assessment, status: :ok
        else
            not_found_response
        end
    end

    private

    def not_found_response
        render json: {error:"Assessment not found"}, status: :not_found
    end
end
