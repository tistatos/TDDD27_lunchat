class WebsocketController < WebsocketRails::BaseController
  def client_connected
    p '==============USER CONNECT============'
    connect_message = {:message => 'You are connected'}
    send_message :connect, connect_message
  end
end

