import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';

import restaurants from './restaurantReducers';
import tables from './tableReducers';
import currentUser from './currentUserReducers';
import activities from './activityReducers';

const rootReducer = combineReducers({restaurants, activities, currentUser, tables, routing: routerReducer});

export default rootReducer

