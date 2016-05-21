import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';

import restaurants from './restaurantReducers';
import tables from './tableReducers';
import currentUser from './currentUserReducers';

const rootReducer = combineReducers({restaurants, currentUser, tables, routing: routerReducer});

export default rootReducer

