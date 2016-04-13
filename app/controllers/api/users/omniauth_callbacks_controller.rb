class Api::Users::OmniauthCallbacksController < Devise::OmniauthCallbacksController
  def facebook
    @user = User.from_omniauth(request.env["omniauth.auth"])

    if @user.persisted?
      sign_in_and_redirect @user, :event => :authentication
      set_flash_message(:notice, :success, :kind => "Facebook") if is_navigational_format?
    else
      sessions["devise.facebook_data"] = request.env["omniauth.auth"]
      redirect_to root_path
    end
  end

  def fail
    redirect_to root_path
  end
end

