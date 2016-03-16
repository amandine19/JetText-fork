class UploadsController < ApplicationController
	def new
		@upload = Upload.new
	end
	
	def create
		@upload = Upload.create(upload_params)
	end

	private
		def upload_params
			params.require(:upload).permit(:name, :file)
		end
end	
