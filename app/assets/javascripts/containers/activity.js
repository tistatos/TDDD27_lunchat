import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../actions/actionCreators';
import ActivityComponent from '../components/activityComponent.js.jsx';

function mapStateToProps(state) {
  return {
    tables: state.tables,
    currentUser: state.currentUser,
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}

const Activity = connect(mapStateToProps, mapDispatchToProps)(ActivityComponent);

export default Activity;

