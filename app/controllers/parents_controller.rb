class ParentsController < ApplicationController
  # before_action :set_parent, only: [:show, :edit, :update, :destroy]
  def index
      parents = Parent.all
      render json: parents
  end
  def show
      parent = Parent.find_by(id: params[:id])
      if parent
          render json: parent
      else
          render json: {error: "No such parent"}, status: :not_found
      end
  end
# CREATE 
<<<<<<< HEAD
<<<<<<< HEAD
  def create
    parent = Parent.create(parent_params)
<<<<<<< HEAD

    render json: parent,  status: :created
  end

=======
    render json: parent, status: :ok

  end  


     
     # PATCH/PUT /parents/1
  # PATCH/PUT /parents/1.json
>>>>>>> origin/angela
  def update
    parent =Parent.find_by(id: params[:id])
    
    if parent
      parent.update(parent_params)
      render json: parent        
    else
      render json: {error: "Parent not found"}, status: :not_found
    end
  end
  # DELELET
def destroy
=======
=======
>>>>>>> 18549b55ece76080a2da0b9c4a50d9af61ccc1a8
def create
  parent = Parent.create(parent_params)

  render json: parent,  status: :created
end

def update
  parent =Parent.find_by(id: params[:id])
  
  if parent
    parent.update(parent_params)
    render json: parent        
  else
    render json: {error: "Parent not found"}, status: :not_found
  end
end
# DELELET
def destroy
parent =Parent.find_by(id: params[:id])

if parent 
  parent.destroy
  head :no_content 
else
 render json: {error: "Parent not found"}, status: :not_found
end

end
<<<<<<< HEAD
<<<<<<< HEAD
    private
    def parent_params
<<<<<<< HEAD
      params.permit(:role,:address,:phone_no, :full_name, :email, :password)

=======
      params.require(:parent).permit(:name, :email, :password_digest, :phone, :address)
    end

    def not_found_response
        render json: {error:"Parent not found"}, status: :not_found
>>>>>>> origin/angela
    end
end
=======
=======
>>>>>>> 18549b55ece76080a2da0b9c4a50d9af61ccc1a8
  private
  def parent_params
    params.permit(:role,:address,:phone_no, :full_name, :email, :password, :username)

  end
end
