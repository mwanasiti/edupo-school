class StudentsController < ApplicationController
  #skip_before_action :authorized_user, :admin_user
 def index
  students = Student.all
  render json: students
 end 

 def show
  student = Student.find_by(id: params[:id])
  if student
      render json: student
  else
     #render json: {error: "Student not found"}, status: :not_found
     render json: {error: "Student not found"}, status: :not_found
  end
end

  # CREATE
def create
  student = Student.create(student_params)
  render json: student, status: :created
end
  #UPDATE
    def update
      student =Student.find_by(id: params[:id])

      if student
        student.update(student_params)
        render json: student
      else
        render json: {error: "Student not found"}, status: :not_found
      end
    end
# DELETE
def destroy
  student =Student.find_by(id: params[:id])
  if student
    student.destroy
    head :no_content
  else
   render json: {error: "student not found"}, status: :not_found
  end
end
private
def student_params
  params.permit(:role, :gender, :image, :parent_id, :phone_no, :admission_no, :subject_id,:full_name,:email,:password, :classroom_id)
end
end