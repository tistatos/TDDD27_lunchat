import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../actions/actionCreators';
import UserComponent from '../components/userComponent.js.jsx';

function mapStateToProps(state) {
  return {
    user: state.user,
    currentUser: state.currentUser
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}

const User = connect(mapStateToProps, mapDispatchToProps)(UserComponent);

export default User;

