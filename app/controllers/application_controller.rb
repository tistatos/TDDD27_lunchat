class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception

  def current_user
    @current_user ||= User.find_by(id: session[:user_id])
  end

  def logged_in?
    current_user != nil
  end

  def request_ip
    if Rails.env.development?
       ip = '130.236.133.166'
    else
       request.remote_ip
    end
  end

  def authenticate_user
    if !logged_in?
      redirect_to root_path
    end
  end

  helper_method :current_user, :logged_in?
end

