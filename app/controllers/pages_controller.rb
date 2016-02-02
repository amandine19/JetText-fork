class PagesController < ApplicationController

  before_action :authenticate_user!

  def index
    @pages = Page.all.where(:user_id => current_user.id)
  end

  def show
    @page = Page.find(params[:id])
    unless @page.user_id == current_user.id
      redirect_to action: "index"
    end 
  end

  def new
    @page = Page.new
  end

  def create
    @page = Page.new(page_params)
    @page.user_id = current_user.id
    if @page.save
      redirect_to container_path(@page.container_id)
    end
  end

  def edit
  end

  def update
  end

  def destroy
  end

  private
    def page_params
      params.require(:page).permit(:name, :parent, :container_id)
    end

end
