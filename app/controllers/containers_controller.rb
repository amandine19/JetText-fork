class ContainersController < ApplicationController

  before_action :authenticate_user!
  skip_before_filter :verify_authenticity_token

  def index
    @containers = Container.all
  end

  def show
    @container = Container.find(params[:id])
  end

  def new
    @container = Container.new
  end

  def create
    @container = Container.new(container_params)
    @container.user_id = current_user.id
    if @container.save
      redirect_to action: "index"
    end
  end

  def edit
    @container = Container.find(params[:id])
  end

  def update
    @container = Container.where(:id => params[:id]).where(:user_id => current_user.id).take
    if @container.update_attributes(container_params)
      redirect_to action: "index"
    end
  end

  def destroy
    @container = Container.where(:id => params[:id]).where(:user_id => current_user.id).take
    if @container.destroy
      redirect_to action: "index"
    end
  end

  private
    def container_params
      params.require(:container).permit(:name, :description, :url)
    end

end
