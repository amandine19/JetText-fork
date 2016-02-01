class ContainersController < ApplicationController

	before_action :authenticate_user!

  def index
  end

  def new
  	@container = Container.new
  end

  def create
  	@container = Container.new(container_params)
  	@container.user_id = current_user.id
  	if @container.save
  		redirect_to :action => :index
  	end
  end

  private
  	def container_params
  		params.require(:container).permit(:name, :description, :url)
  	end

end
