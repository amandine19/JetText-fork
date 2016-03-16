class PagesUpload < ActiveRecord::Base
	belongs_to :page
	belongs_to :upload
end