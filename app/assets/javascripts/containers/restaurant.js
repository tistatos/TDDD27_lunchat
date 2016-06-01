import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../actions/actionCreators';
import RestaurantComponent from '../components/restaurantComponent.js.jsx';

function mapStateToProps(state) {
  return {
    restaurants: state.restaurants,
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}

const Restaurant = connect(mapStateToProps, mapDispatchToProps)(RestaurantComponent);

export default Restaurant;

