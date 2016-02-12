require 'test_helper'

class ContainersControllerTest < ActionController::TestCase

  include Devise::TestHelpers
  setup :initialize_container

  test "dshould get index" do
    sign_in @user
    get :index
    assert_response :success, "Possède une méthode index"
  end

  test "should get new" do
    sign_in @user
    get :new
    assert_response :success
  end

  private
    def initialize_container
      @user = users(:one)
      @containers = containers(:one)
    end
end
