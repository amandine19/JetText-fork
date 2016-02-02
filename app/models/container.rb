class Container < ActiveRecord::Base
  belongs_to :user
  has_many :pages, :dependent => :delete_all

  validates :name,		:presence => true, length: { maximum: 250 }
  validates :description, :presence => false

  before_save :create_folder

  def create_folder
  	return nil unless get_user
  	user = get_user
  	token = SecureRandom.hex(8)
  	FileUtils.mkdir_p "#{Rails.root}/public/#{user}/{#token}"
  end

  def get_user
  	return nil unless user_id.present?
  	user = User.where(:user_id)
  end

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
