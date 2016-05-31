class TablesController < ApplicationController
  before_filter :authenticate_user
  skip_before_action :verify_authenticity_token

  def create
    user = current_user
    @table = Table.create
    @table.user = user
    p params
    @table.restaurant = Restaurant.find_or_create_by(yelpid: params[:yid])
    @table.save
  end
end

