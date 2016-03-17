class PagesController < ApplicationController

  before_action :authenticate_user!
  require 'image_generator/image_generator'
  include ImageGenerator

  def index
    @pages = Page.all.where(:user_id => current_user.id)
  end

  def show
    @page = Page.find(params[:id])
    @upload = Upload.new
    @uploads = Upload.all
    @container = Container.find(@page.container_id)
    @pages = Page.where(:container_id => @container.id)
    @new_page = Page.new
    unless @page.user_id == current_user.id
      redirect_to action: "index"
    end 
  end

  def new
    @new_page = Page.new
  end

  def create
    @new_page = Page.new(page_params)
    @new_page.user_id = current_user.id
    @container = Container.find(@new_page.container_id) if Container.exists?(@new_page.container_id)
    if @container.present? && current_user.id == @container.user_id
      if @new_page.save
        redirect_to action: "show", id: @new_page.id
      end
    else
      redirect_to containers_path()
    end
  end

  def edit
    @page = Page.find(params[:id])
    @upload = Upload.new
  end

  def update
    @page = Page.where(:id => params[:id]).where(:user_id => current_user.id).take
    @container = Container.find(@page.container_id)

    if params[:page][:content].empty?
      val = ""
    else
      val = params[:page][:content]
    end

    val.force_encoding("ASCII-8BIT").encode('UTF-8', undef: :replace, replace: '')

    @doc = ImageGenerator.image_transformer(val, @container.url)
    @page.update_attribute(:name, params[:page][:name])
    if @page.update_attribute(:content, @doc)
      redirect_to action: "show", id: @page.id
    end
    @page = Page.find(params[:id])
  end

  def destroy
  end

  private
    def page_params
      params.require(:page).permit(:name, :parent, :content, :container_id, :user_id, :bootsy_image_gallery_id)
    end
  
end
