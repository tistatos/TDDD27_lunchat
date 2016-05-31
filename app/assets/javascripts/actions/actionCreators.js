import axios from 'axios';

export function newMessage(message, author) {
  return {
    type: 'NEW_MESSAGE',
    author,
    message
  }
}

export function createTable(restaurant, creator) {
  const request = axios.post('/tables.json', {
        yid: restaurant
      });

  return (dispatch) => {
    request.then(({data}) => {
      dispatch({type: 'CREATE_TABLE', payload: data})
    });
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

export function fetchRestaurants(city = undefined) {
  let requestEndPoint = '/restaurants.json';
  if(city !== undefined) {
    requestEndPoint += "?city=" + city;
  }

  let request = axios.get(requestEndPoint);

  return (dispatch) => {
    request.then(({data}) => {
      console.log(data);
      dispatch({type: 'FETCH_RESTAURANTS', payload: data})
    });
  }
}
export function fetchCurrentUser() {
  const request = axios.get('/users.json');

  return (dispatch) => {
    request.then(({data}) => {
      dispatch({type: 'FETCH_CURRENT_USER', payload: data})
    });
  }
}

export function fetchUser(userId) {
  const request = axios.get('/users/' + userId  + '.json');

  return (dispatch) => {
    request.then(({data}) => {
      console.log(data);
      dispatch({type: 'FETCH_USER', payload: data})
    });
  }
}

export function suggestTime(time) {
  return {
    type: 'SUGGEST_TIME',
    time
  }
}

