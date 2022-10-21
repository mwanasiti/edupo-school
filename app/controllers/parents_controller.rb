class ParentsController < ApplicationController
    before_action :set_parent, only: [:show, :edit, :update, :destroy]

    # GET/parents
    # GET/parents.json
    
    def index
        parents = Parent.all
        render json: parents
    end

    # GET /parents/1
    # GET/parents/1.json
    def show
    end
    # GET /parents/new
  def new
    @parent = Parent.new
  end

        
      # GET /parents/1/edit
  def edit
  end

  # POST /parents
  # POST /parents.json
  def create
    @parent = Parent.new(parent_params)

    respond_to do |format|
      if @parent.save
        format.html { redirect_to @parent, notice: 'Parent was successfully created.' }
        format.json { render :show, status: :created, location: @parent }
      else
        format.html { render :new }
        format.json { render json: @parent.errors, status: :unprocessable_entity }
      end
    end
  end  


     
     # PATCH/PUT /parents/1
  # PATCH/PUT /parents/1.json
  def update
    respond_to do |format|
      if @parent.update_without_password(parent_params)
        format.html { redirect_to @parent, notice: 'Parent was successfully updated.' }
        format.json { render :show, status: :ok, location: @parent }
      else
        format.html { render :edit }
        format.json { render json: @parent.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /parents/1
  # DELETE /parents/1.json
  def destroy
    @parent.destroy
    respond_to do |format|
      format.html { redirect_to parents_url, notice: 'Parent was successfully destroyed.' }
      format.json { head :no_content }
    end
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

    def set_parent
      @parent = Parent.find(params[:id])
    end


          # UPDATE THE REQUIRE IN LINE 88

    def parent_params
      params.require(:parent).permit(:name, :email, :password, :phone, :address)
    end

    def not_found_response
        render json: {error:"Parent not found"}, status: :not_found
    end
end
