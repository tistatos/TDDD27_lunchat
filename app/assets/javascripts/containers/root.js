import { Provider } from 'react-redux';
import configureStore from '../store/configureStore';
import { Router, Route, IndexRoute, browserHistory} from 'react-router';

import LunchatApp from './lunchatApp';
import RestaurantList from '../components/restaurantList.js.jsx';
import Header from '../components/header.js.jsx';

const store = configureStore();

export default class Root extends React.Component {
  render() {
    return (
        <Provider store={store}>
          <Router history={browserHistory}>
            <Route path="/" component={LunchatApp}>
              <Route path="/restaurants" component={RestaurantList}></Route>
            </Route>
          </Router>
        </Provider>
        )
  }

}

