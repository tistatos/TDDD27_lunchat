//= require websocket_rails/main
dispatcher = new WebSocketRails("localhost:3000/websocket")

dispatcher.bind('connect', function(data) {
  console.log(data.message);
});

dispatcher.bind('restaurant', function(data) {
  console.log(data.message);
});


dispatcher.trigger('restaurants')

