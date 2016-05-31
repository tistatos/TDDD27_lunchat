import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../actions/actionCreators';
import RestaurantList from '../components/restaurantList.js.jsx';

function mapStateToProps(state) {
  return {
    restaurants: state.restaurants,
    currentUser: state.currentUser
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}

const RestaurantListComponent = connect(mapStateToProps, mapDispatchToProps)(RestaurantList);

export default RestaurantListComponent;

