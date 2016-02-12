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

  test "should create container" do
    sign_in @user
    assert_difference('Container.count', +1) do
      post :create, container: {name: "ressource 1"}  
    end
    assert_redirected_to container_path(assigns(:container))
  end



    test "should show controller" do
      sign_in @user
      get :show, id: @container
    end  

    test "should destroy controller" do
      sign_in @user
      assert_difference('Container.count', -1)  do
        delete :destroy, id: @container
    end  
     assert_response :success
end

      test "should update" do
        container = Container.create(name: "ressource")
        get :update
      end  



  private
    def initialize_container
      @user = users(:one)
      @container = containers(:one)
      
    end
end
