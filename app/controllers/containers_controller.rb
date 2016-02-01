class ContainersController < ApplicationController

  def index
  end

  def new
  	@container = Container.new
  end

end
