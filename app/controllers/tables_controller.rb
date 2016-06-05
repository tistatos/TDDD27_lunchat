class TablesController < ApplicationController
  before_filter :authenticate_user
  skip_before_action :verify_authenticity_token

  def index
    @tables = current_user.tables
  end

  def create
    user = current_user
    @table = Table.create
    @table.restaurant = Restaurant.find_or_create_by(yelpid: params[:yid])
    @table.owner = user
    @table.users << user
    @table.save
  end

  def join
    @table = Table.find(params[:tableid])
    user = current_user
    @table.users << user
  end

  def update
    @table = Table.find(params[:id])
  end

  def destroy
    @table = Table.find(params[:id])
    @table.destroy
  end
end

