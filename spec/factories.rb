
FactoryGirl.define do


	factory :user do
		name 'david'		
	end

	factory :container do
		name "nom de ma ressource"	
	end


	factory :page do
		name "My page"
		container "nom de ma ressource"
		content "contenu de ma page"
	end
		

end

