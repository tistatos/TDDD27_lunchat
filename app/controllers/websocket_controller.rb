class WebsocketController < WebsocketRails::BaseController
  def client_connected
    p '==============USER CONNECT============'
    connect_message = {:message => 'You are connected'}
    send_message :connect, connect_message
  end

  def restaurant
    restaurant_message = {:message => 'You get restaurant updates'}
    send_message :restaurant, restaurant_message
  end
end

