import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';

import restaurants from './restaurantReducers';
import currentUser from './currentUserReducers';
import user from './userReducers';
import tables from './tableReducers';

const rootReducer = combineReducers({restaurants, tables, user, currentUser, routing: routerReducer});

export default rootReducer

