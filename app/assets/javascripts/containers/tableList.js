import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../actions/actionCreators';
import TableListComponent from '../components/tableListComponent.js.jsx';

function mapStateToProps(state) {
  return {
    restaurants: state.restaurants,
    currentUser: state.currentUser
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}

const TableList = connect(mapStateToProps, mapDispatchToProps)(TableListComponent);

export default TableList;

