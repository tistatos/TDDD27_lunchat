import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../actions/actionCreators';
import RestaurantListComponent from '../components/restaurantListComponent.js.jsx';

function mapStateToProps(state) {
  return {
    restaurants: state.restaurants,
    currentUser: state.currentUser
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}

const RestaurantList = connect(mapStateToProps, mapDispatchToProps)(RestaurantListComponent);

export default RestaurantList;

