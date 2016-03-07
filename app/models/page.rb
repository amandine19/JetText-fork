class Page < ActiveRecord::Base


  has_attached_file :image, styles: {thumbnail: "60x60#"}
  validates_attachment :image, content_type: { content_type: "image/jpeg" }
  #validates_something_else # Other validations that conflict with Paperclip's

  belongs_to :container
  belongs_to :user

  validates :name,			:presence => true, length: { maximum: 250 }
  validates :user_id, 		:presence => true
  validates :container_id, 	:presence => true
end
