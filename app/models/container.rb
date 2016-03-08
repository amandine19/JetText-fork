class Container < ActiveRecord::Base
  belongs_to :user
  has_many :pages,      :dependent => :delete_all

  validates :name,		:presence => true, length: { maximum: 250 }
  validates :content, 	:presence => false
  validates :user_id, 	:presence => true
end

# == Schema Information
#
# Table name: containers
#
#  id          :integer          not null, primary key
#  name        :string
#  description :text
#  url         :string
#  user_id     :integer
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#
