require 'spec_helper'

describe Uploads do
	it "should be valid" do
    Upload.new.should be_valid
end


def do_upload_file
# write the request for the action as defined in your routes file
# get :upload_file, :id => :user_id (id of the user)
end

before do
 # set the session variables and other parameters here..
end

it "should upload the file correctly" do
  @user.should_receive(:update_attributes).and_return(true)
  do_upload_asset
  response.should redirect_to(whatever_path)
end