import { createStore, applyMiddleware, compose} from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';
import thunkMiddleware from 'redux-thunk';
import rootReducer from '../reducers/index';

export const defaultState = {
  currentUser : [],
  restaurants : [],
};


export default function configureStore(initialState=defaultState) {
  const store = createStore(rootReducer, initialState,
       compose( applyMiddleware(thunkMiddleware),
       window.devToolsExtension ? window.devToolsExtension() : undefined
      )
      );
  return {store: store, history: syncHistoryWithStore(browserHistory, store)};
}

