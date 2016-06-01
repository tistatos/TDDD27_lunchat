class UsersController < ApplicationController
  before_filter :authenticate_user

  def index
    @user = @current_user
  end

  def show
    @user = User.find(params[:id])
  end

  private
  def user_params
    params.require(:user).permit(:description)
  end
end

