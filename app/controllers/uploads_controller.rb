class UploadsController < ApplicationController
	# GET /uploads
	# GET /uploads.json

	def index
		@uploads = Upload.all

		respond_to do |format|
			format.html #index.html.erb
		end
	end
	


	def show
		@upload = Upload.find(params[:id])	

		respond_to do |format|
			format.html #show.html.erb
			format.json { render json:  @uploads.map{|upload| upload.to_jq_upload}
		end	
	end
	
	def new
		@upload = Upload.new

		respond_to do |format|	
			format.html #new.html.erb
			format.json { render json: @upload}
		end
	end


	def edit
		@upload = Upload.find(params[:id])		
	end
	
	def create
		@upload = Upload.new(params[:upload])

		respond_to do |format|	
			if @upload.save
				format.html {
					render :json => [@upload.to_jq_upload].to_json,
					:content_type => 'text/html'
					:layout => false
				}
				format.json { render json: {files: [@upload.to_jq_upload]} status: :created, location: @upload}	
			else
				format.html {render action: "new"}
				format.json {render json: @upload.errors, status: unprocessable_entity}	
			end
		end
	end
	
	def update
    @upload = Upload.find(params[:id])

    respond_to do |format|
      if @upload.update_attributes(params[:upload])
        format.html { redirect_to @upload, notice: 'Upload was successfully updated.' }
        format.json { head :no_content }
      else
        format.html { render action: "edit" }
        format.json { render json: @upload.errors, status: :unprocessable_entity }
      end
    end
  end


  def destroy
    @upload = Upload.find(params[:id])
    @upload.destroy

    respond_to do |format|
      format.html { redirect_to uploads_url }
      format.json { head :no_content }
    end
  end
end
