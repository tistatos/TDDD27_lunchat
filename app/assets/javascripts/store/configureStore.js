import { createStore, applyMiddleware, compose} from 'redux';
import thunkMiddleware from 'redux-thunk';
import rootReducer from '../reducers/index';

export const defaultState = {
  currentUser : [],
  restaurants : [],
  tables : []
};


export default function configureStore(initialState=defaultState) {
  const store = createStore(rootReducer, initialState,
       compose( applyMiddleware(thunkMiddleware),
       window.devToolsExtension ? window.devToolsExtension() : undefined
      )
      );
  return store;
}

