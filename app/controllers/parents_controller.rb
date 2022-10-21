class ParentsController < ApplicationController
    before_action :set_parent, only: [:show, :edit, :update, :destroy]
    
    def index
        parents = Parent.all
        render json: parents
    end

    def show
        parent = Parent.find_by(id: params[:id])
        if parent
            render json: parent, status: :ok
        else
            not_found_response
        end
    end

    private

    def not_found_response
        render json: {error:"Parent not found"}, status: :not_found
    end
end
