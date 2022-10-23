class AssessmentsController < ApplicationController
    before_action :set_grade, only: [:show, :edit, :update, :destroy]

    # GET /assesment
    # GET /assessmentt.json
    def index
      @assessments = Grade.all
    end
  
    # GET /assessments/1
    # GET /assessments/1.json
    def show
    end
  
    # GET /assessments/new
    def new
      @assessment = Assessments.new
    end
  
    # GET /assessments/1/edit
    def edit
    end
  
    # POST /assessments
    # POST /assessments.json
    def create
      @assessment = Assessments.new(assessment_params)
  
      respond_to do |format|
        if @assessment.save
          format.html { redirect_to @assessment, notice: 'Assessment was successfully created.' }
          format.json { render :show, status: :created, location: @assessment }
        else
          format.html { render :new }
          format.json { render json: @assessment.errors, status: :unprocessable_entity }
        end
      end
    end
  
    # PATCH/PUT /assessments/1
    # PATCH/PUT /assessments/1.json
    def update
      respond_to do |format|
        if @assessment.update(grade_params)
          format.html { redirect_to @assessment, notice: 'Assessment was successfully updated.' }
          format.json { render :show, status: :ok, location: @assessment }
        else
          format.html { render :edit }
          format.json { render json: @assessment.errors, status: :unprocessable_entity }
        end
      end
    end
  
    # DELETE /assessments/1
    # DELETE /assessments/1.json
    def destroy
      @assessment.destroy
      respond_to do |format|
        format.html { redirect_to assessments_url, notice: 'Assessment was successfully destroyed.' }
        format.json { head :no_content }
      end
    end


    def index
        assessments = Assessment.all
        render json: assessments
    end

    def show
    
        assessment = Assessment.find_by(id: params[:id])
        if assessment
            render json: assessment, status: :ok
        else
            not_found_response
        end
    end

    private

    def not_found_response
        render json: {error:"Assessment not found"}, status: :not_found
    end

       # Use callbacks to share common setup or constraints between actions.
       def set_grade
        @grade = Grade.find(params[:id])
      end
  
      # Never trust parameters from the scary internet, only allow the white list through.
      def grade_params
        params.require(:grade).permit(:name, :description)
      end
end
