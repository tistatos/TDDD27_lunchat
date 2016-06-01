class TablesController < ApplicationController
  before_filter :authenticate_user
  skip_before_action :verify_authenticity_token

  def create
    user = current_user
    @table = Table.create
    @table.restaurant = Restaurant.find_or_create_by(yelpid: params[:yid])
    @table.owner = user
    @table.users << user
    @table.save
  end
end

