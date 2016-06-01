function user(state = [], action) {
  switch(action.type) {
    case 'FETCH_USER':
      return action.payload;
    break;
  }
  return state
}

export default user;

