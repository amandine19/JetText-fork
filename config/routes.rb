Rails.application.routes.draw do

  root 'home#index'
  devise_for :users, :controllers => { :registrations => 'registrations' }

  authenticate :user do
    resources :containers
    resources :pages
    resources :variables
    resources :uploads
    post "/uploads_plugin/create" => "uploads#create", as: 'uploads_create'
  end
end