Rails.application.routes.draw do
  root 'pages#home'

  get '/about' => 'pages#about'

  get '/auth/:provider/callback' => 'sessions#create'

  get '/signin' => 'sessions#new', :as => :signin
  delete '/signout' => 'sessions#destroy', :as => :signout
end

