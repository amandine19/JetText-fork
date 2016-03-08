class Upload < ActiveRecord::Base
  #attr_accessible : :image
  #has_attached_file :image, styles: { large: "600x600>", medium: "300x300>", thumb: "150x150>"}
							#:storage => :database, :database_table => 'image_files'
  #validates_attachement :image, content_type: { content_type: ["image/jpeg", "image/jpg","image/gif", "image/png", "image/pdf"]},
  #size: { in: 0..10.kilobytes}
  #validates_attachment_content_type :image, content_type: /\Aimage\/.*\Z/

  
end