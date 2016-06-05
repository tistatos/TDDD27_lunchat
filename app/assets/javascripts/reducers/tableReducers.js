function destroyTable(state,action) {
  for(let i = 0; i < state.length; i++) {
    let table = state[i]
    if(table.id == action.id) {
        return [
          ...state.slice(0,i),
          ...state.slice(i+1) ];
      }
    }
  return state;
}

function tables(state = [], action) {
  switch (action.type) {
    case 'FETCH_TABLES':
      return action.payload;
    break;
    case 'CREATE_TABLE':
      return state.concat(action.payload);
    break;
    case 'DESTROY_TABLE':
      return destroyTable(state,action.payload);;
    break;
  }
  return state;
}

export default tables;

