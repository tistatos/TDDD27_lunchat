import axios from 'axios';

export function newMessage(message, author) {
  return {
    type: 'NEW_MESSAGE',
    author,
    message
  }
}

export function createTable(restaurant) {
  const request = axios.post('/tables.json', {
        yid: restaurant.yelpid,
        name: restaurant.name
      });

  return (dispatch) => {
    request.then(({data}) => {
      dispatch({type: 'CREATE_TABLE', payload: data})
    });
  }
}

export function destroyTable(tableId) {
  const request = axios.delete('/tables/'+tableId + '.json');

  return (dispatch) => {
    request.then(({data}) => {
      dispatch({type: 'DESTROY_TABLE', payload: data})
    });
  }
}

export function joinTable(tableId) {
  const request = axios.put('/tables/'+ tableId + '/join.json');

  return (dispatch) => {
    request.then(({data}) => {
      dispatch({type: 'JOIN_TABLE', payload: data})
    });
  }
}

export function fetchTables() {
  const request = axios.get('/tables.json');

  return (dispatch) => {
    request.then(({data}) => {
      console.log(data);
      dispatch({type: 'FETCH_TABLES', payload: data})
    });
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

