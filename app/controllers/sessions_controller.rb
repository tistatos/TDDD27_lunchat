class SessionsController < ApplicationController
  def create
    auth = request.env["omniauth.auth"]
    user = User.from_omniauth(auth)
    session[:user_id] = user.id
    redirect_to user_path(current_user.id)
  end

  def new
    redirect_to '/auth/facebook'
  end

  def destroy
    reset_session
    redirect_to root_url
  end
end

