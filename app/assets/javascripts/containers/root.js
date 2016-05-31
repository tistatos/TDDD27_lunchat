import { Provider } from 'react-redux';
import configureStore from '../store/configureStore';
import { Router, Route, IndexRoute, browserHistory, Handler} from 'react-router';

import LunchatApp from './lunchatApp';
import RestaurantListComponent from '../containers/visibleRestaurantList.js';
import UserComponent from '../containers/userComponent.js';
import ActivityList from '../components/activityList.js.jsx';

const {store, history} = configureStore();

export default class Root extends React.Component {
  render() {
    return (
        <Provider store={store}>
          <Router history={history}>
            <Route path="/" component={LunchatApp}>
              <Route path="/restaurants" component={RestaurantListComponent}></Route>
              <Route path="/users/:id" component={UserComponent}></Route>
              <Route path="/activities" component={ActivityList}></Route>
            </Route>
          </Router>
        </Provider>
        )
  }

}

