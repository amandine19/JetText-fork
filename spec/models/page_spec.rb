require 'spec_helper'

describe Page do 
	it {should validate_presence_of(:name)}
	it {should validate_presence_of(:user_id)}  
	it {should validate_presence_of(:container_id)}  
end




