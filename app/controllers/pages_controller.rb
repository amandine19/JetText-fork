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
    @container = Container.find(@page.container_id) if Container.exists?(@page.container_id)
    if @container.present? && current_user.id == @container.user_id
      if @page.save
        #render :nothing => true, :status => 200
        redirect_to action: "show", id: @page.id
      end
    else
      redirect_to containers_path()
    end
  end

  def edit
    @page = Page.find(params[:id])
  end

  def update
    @page = Page.find(params[:id])
    if @page.update_attribute(:name, params[:page][:name])
      redirect_to action: "show", id: @page.id
    end
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
