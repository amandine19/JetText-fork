# == Schema Information
#
# Table name: pages
#
#  id           :integer          not null, primary key
#  name         :string(255)
#  parent       :integer
#  content      :binary(16777215)
#  container_id :integer
#  user_id      :integer
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#  weight       :integer
#

module PagesHelper

	def has_children(page)
    if Page.where(:parent => page.id).empty?
      return false
    else
      return true
    end
  end

	def get_children(page)
    return Page.where(:parent => page.id)
  end
  
end
