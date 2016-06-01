function currentUser(state = [], action) {
  switch(action.type) {
    case 'FETCH_CURRENT_USER':
      return action.payload;
    break;
  }
  return state;
}

export default currentUser;

