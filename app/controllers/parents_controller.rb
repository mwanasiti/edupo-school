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
