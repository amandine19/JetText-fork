require 'spec_helper'


RSpec.describe PagesController do

	describe " POST 'create'" do 

	before(:each) do

			@user = FactoryGirl.create(:user)

			@container= FactoryGirl.create(:container)
		@container.user_id = @user.id
			@container.save

			
		@page_attributes = FactoryGirl.attributes_for(:page, :container_id => @container)
			#Lorsqu'une ressource imbriquée est affichée , 
			#il attend params à la fois pour la ressource du parent et de l'enfant .
			post :create, :container_id => @container, :page => @page_attributes

		end	

		FactoryGirl.define do
			factory :page do
			 page "My page"
			 container
			end
		end

	end
end