
function restaurants(state = [], action) {
  switch (action.type) {
    case 'FETCH_RESTAURANTS':
      return action.payload;
    break;
  }
  return state;
}

export default restaurants;

