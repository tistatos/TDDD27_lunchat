import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../actions/actionCreators';
import User from '../components/user.js.jsx';

function mapStateToProps(state) {
  return {
    user: state.user,
    currentUser: state.currentUser
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}

const UserComponent = connect(mapStateToProps, mapDispatchToProps)(User);

export default UserComponent;

