WebsocketRails::EventMap.describe do

  #subscribe :client_connected, :to => WebsocketController, :with_method => :client_connected
  subscribe :client_connected, 'Websocket#client_connected'

  namespace :chat do
    subscribe :connect, 'chat#initialize_session'
    subscribe :message, 'chat#new_message'
  end
end

