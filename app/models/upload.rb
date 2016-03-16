class Upload < ActiveRecord::Base
  belongs_to :user
  belongs_to :container
  has_and_belongs_to_many :pages, :through => :pages_uploads

  Paperclip.interpolates('container') do |attachment, style|
    attachment.instance.get_container(3).url
  end

  has_attached_file :file,
    :url => ":container/files/:basename.:extension",
  	:path => ":rails_root/public/:container/files/:basename.:extension"

  validates_attachment_content_type :file, 
		:content_type => [
			"video/mp4",
			"application/pdf",
			"image/png"
		],
		:message => 'seuls les fichiers PDF et MP4 sont autorisés.'

  def get_container(container_id)
    return Container.find(container_id)
  end
end