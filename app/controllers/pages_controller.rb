class PagesController < ApplicationController

  before_action :authenticate_user!
  respond_to :html, :json
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
    respond_to do |format|
      format.html
      format.json { render json: {page: @page, pages: @pages} }
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

  def update_ajax
    @page = Page.find(params[:id])
    if current_user.id == @page.user_id
      @page.update_attribute(:content, params[:content])
    end
    render :nothing => true
  end

  def sort
    params[:order].each do |key,value|
      Page.find(value[:id]).update_attribute(:weight, value[:position])
    end
    render :nothing => true
  end

  def levelize
    @page = Page.find(params[:id])
    if params[:do] == 'inc'
      if @page.level.nil?
        @page.update_attribute(:level, 1)
      else
        @page.update_attribute(:level, @page.level + 1)
      end
    else
      if @page.level.nil?
        @page.update_attribute(:level, 1)
      else
        unless @page.level == 1 || @page.level == 0
          @page.update_attribute(:level, @page.level - 1)
        end
      end
    end
    render :nothing => true
  end

  private
    def page_params
      params.require(:page).permit(:name, :content, :container_id, :user_id, :weight, :level)
    end
  
end

# == Schema Information
#
# Table name: pages
#
#  id           :integer          not null, primary key
#  name         :string(255)
#  content      :binary(16777215)
#  container_id :integer
#  user_id      :integer
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#  weight       :integer
#  level        :integer
#