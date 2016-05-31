Rails.application.routes.draw do

  root 'pages#home'

  get '/about' => 'pages#about'

  resources :users, only: [:index, :show, :update]
  resources :restaurants

  resources :tables

  get '/auth/:provider/callback' => 'sessions#create'

  get '/signin' => 'sessions#new', :as => :signin
  get '/signout' => 'sessions#destroy', :as => :signout
end

