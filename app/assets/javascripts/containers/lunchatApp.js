import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../actions/actionCreators';
import MainComponent from '../components/mainComponent.js.jsx';

function mapStateToProps(state) {
  return {
    restaurants: state.restaurants,
    currentUser: state.currentUser
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}

const LunchatApp = connect(mapStateToProps, mapDispatchToProps)(MainComponent);

export default LunchatApp;

