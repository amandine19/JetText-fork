require 'spec_helper'


describe Container do
	it {should validate_presence_of(:name)}
	it {should validate_presence_of(:content)}
	it {should validate_presence_of(:url)}
end	
