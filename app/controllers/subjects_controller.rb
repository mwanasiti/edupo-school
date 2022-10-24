class SubjectsController < ApplicationController

    # before_action :set_subject, only: [:show, :edit, :update, :destroy]
    def index
      subjects =Subject.all
      render json: subjects
    end

    def show 
      subject = Subject.find_by(id: params[:id])
      render json: subject
    end

#  #  CREATE
#  def create
#   subject = Subject.create(subject_params)
#   render json: subject,  status: :created
# end
# # UPDATE
# def update
#   subject =Subject.find_by(id: params[:id])
  
#   if subject
#     subject.update(subject_params
#     )
#     render json: subject        
#   else
#     render json: {error: "Subject not found"}, status: :not_found
#   end
# end
# # DELELET
# def destroy
# subject =Subject.find_by(id: params[:id])

# if subject 
# subject.destroy
# head :no_content 
# else
# render json: {error: "Subject not found"}, status: :not_found
# end

# end

# private
# def subject_params
#   params.permit(:name)
# end
end
