class Upload < ActiveRecord::Base
  belongs_to :user
  belongs_to :container
  has_and_belongs_to_many :pages, :through => :pages_uploads

  Paperclip.interpolates('user') do |attachment, style|
    attachment.instance.user.email.to_s
  end

  Paperclip.interpolates :file_type do |attachment, style|
    attachment.instance.file_type
  end

  has_attached_file :file,
    :url => ":user/files/:file_type/:basename.:extension",
  	:path => ":rails_root/public/:user/files/:file_type/:basename.:extension",
    :timestamp => false

  validates_attachment_content_type :file, 
		:content_type => [
			"video/mp4",
			"application/pdf",
      "application/force-download",
			"image/png"
		],
		:message => 'seuls les fichiers PDF et MP4 sont autorisés.'

    def file_type
      self.file_content_type.mb_chars.normalize(:kd).split('/')[0].to_s
    end
end

# == Schema Information
#
# Table name: uploads
#
#  id                :integer          not null, primary key
#  name              :string(255)
#  file_file_name    :string(255)
#  file_content_type :string(255)
#  file_file_size    :integer
#  file_updated_at   :datetime
#  type              :string(255)
#  url               :string(255)
#  size              :integer
#  user_id           :integer
#
