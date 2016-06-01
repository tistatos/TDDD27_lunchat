class Table extends React.Component{
  constructor() {
    super();
    this._handleLeaveClick = this._handleLeaveClick.bind(this);
  }

  _handleLeaveClick() {
    if(this.props.table.owner.id == this.props.currentUser.id) {
      this.props.removeTable(this.props.table.id)
    }
    else {
      this.props.leaveTable(this.props.table.id, this.currentUser.id)
    }
  }

  render() {
    if(this.props.table.owner.id == this.props.currentUser.id) {
      ownsTable = ( <div className="owner">
                      <i className="fa fa-star"></i>
                    </div> );
    }
    else {
      ownsTable = ( <div className="owner">
                    </div> );
    }

    const userFriendsAtTable = this.props.table.users.filter( (u) => {
      for(let i = 0; i < this.props.currentUser.friends; i++) {
        if(u.uid === this.props.currentUser.friends[i].id) {
          return true;
        }
        return false;
      }
    })

    tableLink = '/table/' + this.props.table.id

    return (
      <div className="table">
        {ownsTable}
        <div className="users">
          <i className="fa fa-users"></i> {userFriendsAtTable.length}/{this.props.table.users.length}
        </div>
        <div className="leave" onClick={this._handleLeaveClick}>
          <i className="fa fa-times"></i>
        </div>
      </div>
    );
  }
}

