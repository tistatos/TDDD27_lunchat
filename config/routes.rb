Rails.application.routes.draw do
  root 'pages#home'

  devise_for :users, :controllers => { :omniauth_callbacks => "api/users/omniauth_callbacks" }

end

