class Upload < ActiveRecord::Base
	has_and_belongs_to_many :pages, :through => :pages_uploads

  has_attached_file :file,
  	:url => "/Desktop/ressources/:basename.:extension",
  	:path => "/Users/pierre",
  	:use_timestamp => false

  validates_attachment_content_type :file, 
		:content_type => [
			"video/mp4",
			"application/pdf",
			"image/png"
		],
		:message => 'seuls les fichiers PDF et MP4 sont autorisés.'
end