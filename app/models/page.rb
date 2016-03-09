class Page < ActiveRecord::Base

  
  has_attached_file :image, styles: { medium: "150x150>", thumb: "60x60>"}, :storage => :database	
  #validates_attachment :type, 
  #content_type: [ 'type/png', 'jpg', 'image/gif', "application/pdf", 'video/mpeg', 'video/quicktime', 'video/x-ms-asf', 'video/x-msvideo', 
                                 						#'video/x-flv' ]
  validates_attachment_content_type :image, content_type: /\Aimage\/.*\Z/

  belongs_to :container
  belongs_to :user

  validates :name,			:presence => true, length: { maximum: 250 }
  validates :user_id, 		:presence => true
  validates :container_id, 	:presence => true
  validates :upload_id,     :presence => true
end
