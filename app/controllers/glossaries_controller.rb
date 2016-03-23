class GlossariesController < ApplicationController
  def index
  	@glossaries = Glossary.all
  end

  def show
  	@glossary = Glossary.find(params[:id])
  end

  def new
  	@glossary = Glossary.new
  end

  def create
    @glossary = Glossary.new(glossary_params)
    @glossary.user_id = current_user.id
    if @glossary.save
      respond_to do |format|
        format.html { head :no_content }
      end
    end
  end

  def edit
  end

  private
    def glossary_params
      params.require(:glossary).permit(:name, :description)
    end
end
