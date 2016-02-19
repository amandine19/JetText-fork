Rails.application.routes.draw do

  root 'home#index'
  get '/container/ajax', to: 'containers#ajax'
  get '/page/ajax', to: 'pages#ajax'
  devise_for :users, :controllers => { :registrations => 'registrations' }

  authenticate :user do
    resources :containers
    resources :pages
    resources :variables

  end

end
