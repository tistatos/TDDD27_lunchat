function addTable(state, action) {
  for(let i = 0; i < state.length; i++) {
    if(state[i].id == action.restaurant_id) {
      return [
        ...state.slice(0,i),
        { ...state[i], tables: state[i].tables.concat(action) },
        ...state.slice(i+1)
      ]
    }
  }
  return state;
}

function destroyTable(state,action) {
  for(let i = 0; i < state.length; i++) {
    let restaurant = state[i]
    for(let j = 0; j < restaurant.tables.length; j++) {
      if(restaurant.tables[j].id == action.id) {
        return [
          ...state.slice(0,i),
          { ...state[i], tables:
            [  ...state[i].tables.slice(0,j),
               ...state[i].tables.slice(j+1)]},
          ...state.slice(i+1) ];
      }
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
    case 'DESTROY_TABLE':
      return destroyTable(state, action.payload)
    break;
  }
  return state;
}

export default restaurants;

