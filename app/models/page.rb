class Page < ActiveRecord::Base
  belongs_to :container
  belongs_to :user
  has_many :uploads

  validates :name,			:presence => true, length: { maximum: 250 }
  validates :user_id, 		:presence => true
  validates :container_id, 	:presence => true
end
