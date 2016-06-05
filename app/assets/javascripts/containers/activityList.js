import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../actions/actionCreators';
import ActivityListComponent from '../components/activityListComponent.js.jsx';

function mapStateToProps(state) {
  return {
    tables: state.tables,
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}

const ActivityList = connect(mapStateToProps, mapDispatchToProps)(ActivityListComponent);

export default ActivityList;

