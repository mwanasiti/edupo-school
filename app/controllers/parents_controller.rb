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
  def create
    parent = Parent.create(parent_params)
<<<<<<< HEAD
    render json: parent, status: :ok

  end  


     
     # PATCH/PUT /parents/1
  # PATCH/PUT /parents/1.json
=======
    render json: parent,  status: :created
  end
  # UPDATE
>>>>>>> f8b27dc2863bf53946db92c401dba0a25581b218
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
    private
    def parent_params
<<<<<<< HEAD
      params.require(:parent).permit(:name, :email, :password_digest, :phone, :address)
    end

    def not_found_response
        render json: {error:"Parent not found"}, status: :not_found
=======
      params.permit(:role,:address,:phone_no, :full_name, :email, :password)
>>>>>>> f8b27dc2863bf53946db92c401dba0a25581b218
    end
end
