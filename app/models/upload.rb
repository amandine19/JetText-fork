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

  Paperclip.interpolates :valid_file_name do |attachment, style|
    attachment.instance.valid_file_name
  end

  has_attached_file :file,
    :url => ":container/files/:file_type/:valid_file_name.:extension",
  	:path => ":rails_root/public/:container/files/:file_type/:valid_file_name.:extension",
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

    def valid_file_name
      self.file_file_name.mb_chars.normalize(:kd).split('.')[0].to_s.gsub!(/[^a-zA-Z0-9]/i, '_')
    end  
end

