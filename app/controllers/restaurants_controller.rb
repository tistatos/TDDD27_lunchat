class RestaurantsController < ApplicationController
  before_filter :get_restaurants, :authenticate_user

  def index
    @res_json = @restaurants.as_json
  end

  def create
    @table = Restaurant.find(params[:yelpid]).tables.create
  end

  def get_restaurants
    if params[:city]
      @city = params[:city]
      response = Geocoder.search(params[:city])
      p response[0].data['geometry']
      locale = { lang: 'sv' }
      params = {term: 'lunch' }
      coordinates = { :latitude => response[0].data['geometry']['location']['lat'], :longitude => response[0].data['geometry']['location']['lng']}
      yelpResponse = Yelp.client.search_by_coordinates(coordinates, params, locale)
      businesses = yelpResponse.businesses
    else
      ip = request_ip
      response = Geocoder.search(ip)
      locale = { lang: 'sv' }
      params = {term: 'lunch' }
      @city = response[0].data['city']
      coordinates = { :latitude => response[0].data['latitude'], :longitude => response[0].data['longitude']}
      yelpResponse = Yelp.client.search_by_coordinates(coordinates, params, locale)
      businesses = yelpResponse.businesses
    end
    @restaurants = []
    businesses.each do |b|
      restaurant = Restaurant.find_or_create_by(yelpid: b.id)
      restaurant.name = b.name
      restaurant.rating = b.rating_img_url
      restaurant.image = b.image_url
      restaurant.yelpid = b.id
      restaurant.link = b.url
      @restaurants.push(restaurant)
    end
  end
end

