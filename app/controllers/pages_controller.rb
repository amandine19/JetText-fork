class PagesController < ApplicationController

  before_action :authenticate_user!

  def index
    @pages = Page.all.where(:user_id => current_user.id)
  end

  def show
    @page = Page.find(params[:id])
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
  end

  def update
    @page = Page.where(:id => params[:id]).where(:user_id => current_user.id).take
    @container = Container.find(@page.container_id)
    if params[:page][:content].empty?
      val = ""
    else
      val = params[:page][:content]
    end

    @doc = image_transformer(val, @container.url)

    if @page.update_attribute(:content, @doc)
      redirect_to action: "show", id: @page.id
    end
    @page = Page.find(params[:id])
  end

  def destroy
  end

  private
    def page_params
      params.require(:page).permit(:name, :parent, :content, :container_id, :user_id)
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

    def image_transformer(html, url)
      require 'fileutils'
      @doc = Nokogiri::HTML(html)
      images = @doc.search('img') if @doc.search('img').present?
      unless images.nil?
        images.each_with_index do |item, index|
          if item['src']['data:image/'].to_s.length > 0
            format = item['src'].split(';')[0].split('/')[-1]
            if format =~ /^*(png|jpg|jpeg|gif)$/
              image = Base64.decode64(item['src']["data:image/#{format};base64,".length .. -1])
              path = "public/#{url}/img/image#{index}.#{format}"
              unless File.directory?("public/#{url}/img/")
                FileUtils.mkdir_p "public/#{url}/img"
              end
              File.open(path, 'wb') { |f| f.write(image) }
              item['src'] = "/#{url}/img/image#{index}.#{format}"
            end
          end
        end
      end
      return @doc
    end
  
end
