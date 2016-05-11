class RestaurantsController < ApplicationController
  before_filter :get_resturants, :authenticate_user

  def index
    @restaurants.each do |r|
      r.extend RestaurantTables
      r.getTables
    end
  end

  def create
    @table = Resturant.find(params[:yelpid]).tables.create
  end

  def get_resturants
    if params[:city]
      response = Geocoder.search(params[:city])
      p response[0].data['geometry']
      locale = { lang: 'sv' }
      params = {term: 'lunch' }
      coordinates = { :latitude => response[0].data['geometry']['location']['lat'], :longitude => response[0].data['geometry']['location']['lng']}
      yelpResponse = Yelp.client.search_by_coordinates(coordinates, params, locale)
      @restaurants = yelpResponse.businesses
    else
      ip = request_ip
      response = Geocoder.search(ip)
      locale = { lang: 'sv' }
      params = {term: 'lunch' }
      @city = response[0].data['city']
      coordinates = { :latitude => response[0].data['latitude'], :longitude => response[0].data['longitude']}
      yelpResponse = Yelp.client.search_by_coordinates(coordinates, params, locale)
      @restaurants = yelpResponse.businesses
    end
  end
end

module RestaurantTables
  @@tables = nil
  def getTables
    restaurant = Restaurant.where(:yelpid => id)
    if !restaurant.empty?
      @tables = restaurant.table
    end
  end
end

