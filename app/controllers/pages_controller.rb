class PagesController < ApplicationController

  before_action :authenticate_user!

  def index
    @pages = Page.all.where(:user_id => current_user.id)
  end

  def show
    @page = Page.find(params[:id])
    @container = Container.find(@page.container_id)
    @pages = Page.where(:container_id => @container.id)
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
      render :nothing => true, :status => 200
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
      params.require(:page).permit(:name, :parent, :container_id, :user_id)
    end

    helper_method :has_children
    def has_children(page)
      if Page.where(:parent => page.id).empty?
        return false
      else
        return true
      end
    end

    helper_method :get_children
    def get_children(page)
      return Page.where(:parent => page.id)
    end
  
end
