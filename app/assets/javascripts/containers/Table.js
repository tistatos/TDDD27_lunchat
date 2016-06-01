import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../actions/actionCreators';
import TableComponent from '../components/TableComponent.js.jsx';

function mapStateToProps(state) {
  return {
    restaurants: state.restaurants,
    currentUser: state.currentUser
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}

const Table = connect(mapStateToProps, mapDispatchToProps)(TableComponent);

export default Table;

