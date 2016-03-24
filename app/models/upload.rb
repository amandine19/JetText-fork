class Upload < ActiveRecord::Base
  belongs_to :user
  belongs_to :container
  has_and_belongs_to_many :pages, :through => :pages_uploads

  Paperclip.interpolates('container') do |attachment, style|
    attachment.instance.container.url.to_s
  end

  Paperclip.interpolates :file_type do |attachment, style|
    attachment.instance.file_type
  end

  has_attached_file :file,
    :url => ":container/files/:file_type/:basename.:extension",
  	:path => ":rails_root/public/:container/files/:file_type/:basename.:extension",
    :timestamp => false

  validates_attachment_content_type :file, 
		:content_type => [
			"video/mp4",
			"application/pdf",
			"image/png"
		],
		:message => 'seuls les fichiers PDF et MP4 sont autorisés.'

    def file_type
      self.file_content_type.mb_chars.normalize(:kd).split('/')[0].to_s
    end
end

