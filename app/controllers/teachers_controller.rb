class TeachersController < ApplicationController
  # before_action :set_teacher, only: [:show, :edit, :update, :destroy]
<<<<<<< HEAD
=======

>>>>>>> f8b27dc2863bf53946db92c401dba0a25581b218
    def index
        teachers = Teacher.all
        render json: teachers
    end
# SHOW
    def show
        teacher = Teacher.find_by(id: params[:id])
        if teacher
            render json: teacher
        else
<<<<<<< HEAD
            render json: {error: “Teacher not found”}, status: :not_found
        end
    end
=======
            render json: {error: "Teacher not found"}, status: :not_found
        end
    end

>>>>>>> f8b27dc2863bf53946db92c401dba0a25581b218
  #  CREATE
    def create
      teacher = Teacher.create(teacher_params)
      render json: teacher,  status: :created
    end
# UPDATE
    def update
      teacher =Teacher.find_by(id: params[:id])
<<<<<<< HEAD
      if teacher
        teacher.update(teacher_params)
        render json: teacher
      else
        render json: {error: “Teacher not found”}, status: :not_found
=======
      
      if teacher
        teacher.update(teacher_params)
        render json: teacher        
      else
        render json: {error: "Teacher not found"}, status: :not_found
>>>>>>> f8b27dc2863bf53946db92c401dba0a25581b218
      end
    end
# DELELET
def destroy
  teacher =Teacher.find_by(id: params[:id])
<<<<<<< HEAD
  if teacher
    teacher.destroy
    head :no_content
  else
   render json: {error: “Teacher not found”}, status: :not_found
  end
end
=======

  if teacher 
    teacher.destroy
    head :no_content 
  else
   render json: {error: "Teacher not found"}, status: :not_found
  end

end
   

>>>>>>> f8b27dc2863bf53946db92c401dba0a25581b218
private
    def teacher_params
      params.permit(:role, :gender, :image,:phone_no, :address, :full_name, :email, :password)
    end
<<<<<<< HEAD
end
=======

end
>>>>>>> f8b27dc2863bf53946db92c401dba0a25581b218
