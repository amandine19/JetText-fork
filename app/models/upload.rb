class Upload < ActiveRecord::Base
  belongs_to :user
	has_and_belongs_to_many :pages, :through => :pages_uploads

	Paperclip.interpolates('container') do |attachment, style|
    attachment.instance.get_container(3).url
  end

  has_attached_file :file,
    :url => ":container/:basename.:extension",
  	:path => ":rails_root/public/:container/:basename.:extension"

  validates_attachment_content_type :file, 
		:content_type => [
			"video/mp4",
			"application/pdf",
			"image/png"
		],
		:message => 'seuls les fichiers PDF et MP4 sont autorisés.'

  def get_container(page_id)
    return Container.find(page_id)
  end
end