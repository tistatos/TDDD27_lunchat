class UsersController < ApplicationController
  before_filter :authenticate_user
  def show
    @user = User.find(params[:id])
    @fb_user = FbGraph2::User.new(@user.uid)
    @fb_user.authenticate(current_user.oauth_token)
    @fb_user.fetch

    p @fb_user.likes
    if current_user.id == @user.id
      @this_user = true
    end
  end

  def update
    @current_user.update(user_params)
    redirect_to user_path
  end

  def register
  end

  private
  def user_params
    params.require(:user).permit(:description)
  end
end
