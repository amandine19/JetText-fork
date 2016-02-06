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
