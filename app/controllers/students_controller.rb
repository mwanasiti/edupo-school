class StudentsController < ApplicationController
<<<<<<< HEAD
  # before_action :set_student, only: [:show, :edit, :update, :destroy]
  skip_before_action :authorize, only: [:index, :create]
  def index
      students = Student.all
      render json: students
  end
  def show
    student = Student.find_by(id: params[:id])
    if student
        render json: student
    else
       render json: {error: “Student not found”}, status: :not_found
=======
    # before_action :set_student, only: [:show, :edit, :update, :destroy]

    def index
        students = Student.all
        render json: students
    end

    def show
    
        student = Student.find_by(id: params[:id])
        if student
            render json: student
        else
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
>>>>>>> f8b27dc2863bf53946db92c401dba0a25581b218
    end

<<<<<<< HEAD
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
      render json: {error: “Student not found”}, status: :not_found
    end
  end
# DELETE
def destroy
  student =Student.find_by(id: params[:id])
  if student
    student.destroy
    head :no_content
  else
  render json: {error: “Student not found”}, status: :not_found
  end
end

private
  def student_params
    params.permit(:role, :gender, :image, :parent_id, :phone_no, :admission_no, :subject_id,:full_name,:email,:password, :classroom_id)
  end

end




=======
# DELETE
def destroy
  student =Student.find_by(id: params[:id])

  if student 
    student.destroy
    head :no_content 
  else
   render json: {error: "Student not found"}, status: :not_found
  end

end
private
def student_params
  params.permit(:role, :gender, :image, :parent_id, :phone_no, :admission_no, :subject_id,:full_name,:email,:password, :classroom_id)

end
  
end
>>>>>>> f8b27dc2863bf53946db92c401dba0a25581b218
