class UploadsController < ApplicationController
	
	def index
		@upload = Upload.all
	end
	
	def new
		@upload = Upload.new	
	end	

	def edit
	end	

	def create
		@upload = Upload.new(upload_params)

		respond_to do |format|
			if @upload.save
				format.html { redirect_to @upload, notice: 'Upload was successfully created'}
				format.json { render :show, status: :created, location: @upload}
			else
				format.html {render :new}
				format.json { render json: @upload.errors, status:  :unprocessable_entity}	
			end	
		end	
	end

	def update
		respond_to do |format|
			if @upload.update(upload_params)
				format.html { redirect_to @upload, notice: 'Upload was successfully created'}
				format.json { render :show, status: :created, location: @upload}
			else
				format.html {render :new}
				format.json { render json: @upload.errors, status:  :unprocessable_entity}	
			end	
		end	
	end

	def destroy
		@upload.destroy
		respond_to do |format|
			format.html { redirect_to upload_url, notice: 'Upload was successfully destroyed'}
			format.json { head : no_content}
		end
	end

	private

	def set_upload
		@upload = upload.find(params[:id])
	end
	
	def upload_params
		params.require(:post).permit(:name, :type, :url, :size)
	end	


end	
