require 'test_helper'

class PagesControllerTest < ActionController::TestCase
  include Devise::TestHelpers
  setup :initialize_page

  test "should get index" do
    sign_in @user
    get :index
    assert_response :success
  end
 
  test "should be logged in for index" do
    get :index
    assert_response :redirect
  end

  test "should get new" do
    sign_in @user
    get :new
    assert_response :success
  end

  test "should create page" do
    sign_in @user
   assert_difference('Page.count') do
    post :create, page: {name: "ressouce 1", parent: nil, content: "description de la ressource", container_id: @container, user_id: 1}
  end
    assert_redirected_to containers_path()
  end  
  
 test "no difference" do
    sign_in @user
    assert_no_difference 'Page.count', 'An page should not be created' do
    post :create, page: invalid_attributes
    end
  end  



 private
    def initialize_page
      @user = users(:one)
      @container = containers(:one)
    end
end
