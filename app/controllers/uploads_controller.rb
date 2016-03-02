class UploadsController < ApplicationController
	
	def create
		@upload = Upload.create(params[:upload])
	end
end	
