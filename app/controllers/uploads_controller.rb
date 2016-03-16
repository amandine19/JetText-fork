class UploadsController < ApplicationController
	def new
		@upload = Upload.new
	end
	
	def create
		@upload = Upload.create(upload_params)
		#render json: {file: @upload.file_file_name}, status: :ok
		render partial: "save_upload", locals: {file: @upload}
	end

	private
		def upload_params
			params.require(:upload).permit(:name, :file, :file_file_name, :file_content_type, :file_file_size)
		end
end	
