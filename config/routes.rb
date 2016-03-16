Rails.application.routes.draw do

  root 'home#index'
  get '/container/ajax', to: 'containers#ajax'
  get '/page/ajax', to: 'pages#ajax'
  devise_for :users, :controllers => { :registrations => 'registrations' }

  authenticate :user do
    resources :containers
    resources :pages
    resources :variables
    resources :uploads
    post "/uploads_plugin/create" => "uploads#create", as: 'uploads_create'
  end
end