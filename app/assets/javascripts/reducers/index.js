import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';

import restaurants from './restaurantReducers';
import currentUser from './currentUserReducers';
import user from './userReducers';

const rootReducer = combineReducers({restaurants, user, currentUser, routing: routerReducer});

export default rootReducer

