import { Link } from 'react-router';

class TableComponent extends React.Component{
  constructor() {
    super();
    this._handleLeaveClick = this._handleLeaveClick.bind(this);
    this.table = undefined;
  }

  _handleLeaveClick() {
    if(this.table.owner.id == this.props.currentUser.id) {
      this.props.destroyTable(this.table.id)
    }
    else {
      this.props.leaveTable(this.table.id, this.props.currentUser.id)
    }
  }

  render() {
    const restaurant = this.props.restaurants.filter( (r) => { return (r.yelpid == this.props.restaurant) } )[0];
    const table = this.table = restaurant.tables.filter( (t) => { return (t.id == this.props.table_id); })[0];
    let ownsTable;
    let partofTable;

    if(!table)
      return (<div></div>);

    if(table.owner.id == this.props.currentUser.id) {
      ownsTable = ( <div className="owner">
                      <i className="fa fa-star"></i>
                    </div> );
    }
    else {
      ownsTable = ( <div className="owner">
                    </div> );
    }

    for(let i = 0; i < this.table.users.length; i++) {
      if(this.table.users[i].id == this.props.currentUser.id) {
        partofTable =  (
        <div className="leave" onClick={this._handleLeaveClick}>
          <i className="fa fa-times"></i>
        </div> );
        break;
      }
      else {
        partofTable =  (
        <div className="join" onClick={this._handleJoinClick}>
          <i className="fa fa-check"></i>
        </div> );
      }
    }
    const userFriendsAtTable = table.users.filter( (u) => {
      for(let i = 0; i < this.props.currentUser.friends; i++) {
        if(u.uid === this.props.currentUser.friends[i].id) {
          return true;
        }
        return false;
      }
    })

    let tableLink = '/table/' + table.id;

    return (
      <div className="table">
        {ownsTable}
        <div className="users">
          <i className="fa fa-users"></i> {userFriendsAtTable.length}/{table.users.length}
        </div>
        {partofTable}
      </div>
    );
  }
}

export default TableComponent;

