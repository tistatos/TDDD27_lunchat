import axios from 'axios';

export function newMessage(message, author) {
  return {
    type: 'NEW_MESSAGE',
    author,
    message
  }
}

export function createTable(restaurant, creator) {
  return {
    type: 'CREATE_TABLE',
    restaurant,
    creator
  }
}

export function removeTable(restaurant, tableId) {
  return {
    type: 'REMOVE_TABLE',
    tableId
  }
}

export function joinTable(restaurant, tableId, user) {
  return {
    type: 'JOIN_TABLE',
    tableId,
    user
  }
}

export function leaveTable(restaurant, tableId, user) {
  return {
    type: 'LEAVE_TABLE',
    tableId,
    user
  }
}

export function fetchRestaurants() {
  const request = axios.get('/restaurants.json');

  return (dispatch) => {
    request.then(({data}) => {
      dispatch({type: 'FETCH_RESTAURANTS', payload: data})
    });
  }
}
export function suggestTime(time) {
  return {
    type: 'SUGGEST_TIME',
    time
  }
}

