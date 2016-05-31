class PagesController < ApplicationController
  def home
    if logged_in?
      redirect_to auth_root_path
    end
  end

  def logged_in
  end

  def about
  end
end

