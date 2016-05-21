
export default function startServer(store) {
  const io = new WebSocketRails('localhost:3000/websocket');

  io.bind('connect', msg => {
    console.log(msg);
    io.bind('action', store.dispatch.bind(store));
  });

  store.subscribe(
    () => io.trigger('state', store.getState().toJS())
  );

}

