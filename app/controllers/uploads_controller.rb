class UploadsController < ApplicationController
	skip_before_filter :verify_authenticity_token, :only => [:create]

	def new
		@upload = Upload.new
	end
	
	def create
		@upload = Upload.new(upload_params)
		@upload.user_id = current_user.id
		@upload.url = @upload.file.url
		if @upload.save
      respond_to do |format|
			  format.js
			  format.html { head :no_content }
			end
		end
	end

	private
		def upload_params
			params.require(:upload).permit(:name, :file, :url, :container_id)
		end
end	
