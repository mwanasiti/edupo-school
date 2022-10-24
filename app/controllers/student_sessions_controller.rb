class StudentSessionsController < ApplicationController
    #skip_before_action :authorize, only: [:index, :create]
    #before_action :authorize
    def create
        #student = Student.find_by(username: params[:username])
        student = Student.find_by(username: params[:username])

        if student&.authenticate(params[:password])
            session[:student_id] = student.id
            render json: student, status: :created
        else
            render json: { errors: 'Invalid Password or Username'}, status: :unauthorized
        end
      
    end


    def destroy
        if session[:student_id]
            session.delete :student_id
            head 204
        else
            render json: {errors: ["Not Authorized"]}, status: 401
        end
    end
end
