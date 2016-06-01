import { Provider } from 'react-redux';
import configureStore from '../store/configureStore';
import { Router, Route, IndexRoute, browserHistory, Handler} from 'react-router';

import LunchatApp from './lunchatApp';
import RestaurantList from '../containers/restaurantList.js';
import User from '../containers/user.js';
import ActivityList from '../components/activityListComponent.js.jsx';

const {store, history} = configureStore();

export default class Root extends React.Component {
  render() {
    return (
        <Provider store={store}>
          <Router history={history}>
            <Route path="/" component={LunchatApp}>
              <Route path="/restaurants" component={RestaurantList}></Route>
              <Route path="/users/:id" component={User}></Route>
              <Route path="/activities" component={ActivityList}></Route>
              <Route path="/table/:id" component={ActivityList}></Route>
            </Route>
          </Router>
        </Provider>
        )
  }

}

