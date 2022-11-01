class TeachersController < ApplicationController
  # before_action :set_teacher, only: [:show, :edit, :update, :destroy]
<<<<<<< HEAD

=======
>>>>>>> origin/angela
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

            render json: {error: "Teacher not found"}, status: :not_found
        end
    end

=======
           # render json: {error: “Teacher not found”}, status: :not_found
           render json: {error: "Teacher not found"}, status: :not_found
        end
    end
>>>>>>> origin/angela
  #  CREATE
    def create
      teacher = Teacher.create(teacher_params)
      session[:is_teacher] = 1
      if professor.save
        UserMailer.welcome_email(professor).deliver_now
      end
      render json: teacher,  status: :created

    end
# UPDATE
    def update
      teacher =Teacher.find_by(id: params[:id])
<<<<<<< HEAD

=======
>>>>>>> origin/angela
      
      if teacher
        teacher.update(teacher_params)
        render json: teacher        
      else
        render json: {error: "Teacher not found"}, status: :not_found
<<<<<<< HEAD

=======
>>>>>>> origin/angela
      end
    end
# DELELET
def destroy
  teacher =Teacher.find_by(id: params[:id])

  if teacher 
    teacher.destroy
    head :no_content 
  else
   render json: {error: "Teacher not found"}, status: :not_found
  end

end
   
<<<<<<< HEAD
=======

>>>>>>> origin/angela
private
    def teacher_params
      params.permit(:role, :gender, :image,:phone_no, :address, :full_name, :email, :password)
    end
<<<<<<< HEAD

end
<<<<<<< HEAD

=======
>>>>>>> deno
=======
end
>>>>>>> origin/angela
