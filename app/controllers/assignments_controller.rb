class AssignmentsController < ApplicationController
    def index
        assignments = Assignment.all
        render json: assignments
    end

    def show
    
        assignment = Assignment.find_by(id: params[:id])
        if assignment
            render json: assignment, status: :ok  m
        else
            not_found_response
        end
    end

    private

    def not_found_response
        render json: {error:"Assignment not found"}, status: :not_found
    end
end
