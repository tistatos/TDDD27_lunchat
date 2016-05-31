function addTable(state, action) {
  console.log(state);
  for(let i = 0; i < state.length; i++) {
    if(state[i].id == action.restaurant_id) {

      return [
        ...state.slice(0,i),
        { ...state[i], tables: state[i].tables.concat(action.id) },
        ...state.slice(i+1)
      ]
    }
  }
  return state;
}


function restaurants(state = [], action) {
  switch (action.type) {
    case 'FETCH_RESTAURANTS':
      return action.payload;
    break;
    case 'CREATE_TABLE':
      return addTable(state, action.payload)
    break;
  }
  return state;
}

export default restaurants;

