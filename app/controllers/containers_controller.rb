class ContainersController < ApplicationController

  before_action :authenticate_user!
  skip_before_filter :verify_authenticity_token
  require 'image_generator/image_generator'
  
  def index
    @containers = Container.all.where(:user_id => current_user.id)
  end

  def show
    @container = Container.find(params[:id])
    @pages = Page.where(:container_id => @container.id)
    @new_page = Page.new
    #self.generate(@container.id)
    unless @container.user_id == current_user.id
      redirect_to action: "index"
    end
  end

  def new
    @container = Container.new
  end

  def create
    @container = Container.new(container_params)
    @container.user_id = current_user.id
    if @container.save
      if folder = create_folder
        @container.update_attribute(:url, folder)
        redirect_to container_path(@container.id)
      end
    end
  end
 
  def edit
    @container = Container.find(params[:id])
  end

  def update
    @container = Container.where(:id => params[:id]).where(:user_id => current_user.id).take
    if params[:container][:content].empty?
      val = ""
    else
      val = params[:container][:content]
    end

    @doc = ImageGenerator.image_transformer(val, @container.url)

    if @container.update_attribute(:content, @doc)
      redirect_to container_path(@container.id)
    end
  end

  def destroy
    @container = Container.where(:id => params[:id]).where(:user_id => current_user.id).take
    if @container.destroy
      redirect_to action: "index"
    end
  end

  def generate(id)
    require 'fileutils'

    @container = Container.find(id)
    directory = Rails.public_path + @container.url

    FileUtils.mkdir_p directory
    File.open(Rails.public_path + @container.url + "index.html", "w+") do |f|
      f.write(
        "<html>\n" \
        + "\t<head>\n" \
        + "\t</head>\n" \
        + "\t<body>\n\n" \
      )
      f.write("\t\t<div>"+@container.description+"</div>\n\n")
      f.write(
        "\t</body>\n" \
        + "</html>" \
      )
      f.close
    end
    return true
  end

  def ajax
    render json: Container.all
  end

  
  private
    def container_params
      params.require(:container).permit(:name, :content, :url)
    end

    def create_folder
      return nil unless current_user.present?
      token = SecureRandom.hex(8)
      dest = "generated/#{current_user.email}/#{token}"
      FileUtils.mkdir_p "#{Rails.root}/public/#{dest}"
      return dest
    end

end