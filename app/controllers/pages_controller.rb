class PagesController < ApplicationController
  def home
    if logged_in?
      redirect_to activities_path
    end
  end
  def about
  end
end

