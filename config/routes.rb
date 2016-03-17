Rails.application.routes.draw do

  root 'home#index'
  devise_for :users, :controllers => { :registrations => 'registrations' }

  authenticate :user do
    resources :containers
    resources :pages
    resources :variables
    resources :uploads
    get "/generate_container/:id" => "containers#generate", as: 'generate_container'
  end
end