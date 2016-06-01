export default class UserComponent extends React.Component{

  constructor() {
    super();
    this._handleDescriptionClick = this._handleDescriptionClick.bind(this);
  }

  _handleDescriptionClick() {
  }

  componentWillMount() {
    this.props.fetchUser(this.props.params.id);
  }

  render() {
    const currentUser = this.props.currentUser.id == this.props.user.id;

    let desc;
    if(this.props.user && this.props.user.description && this.props.user.description.length !== 0) {
      desc = (<p>{this.props.user.description}</p>);
    }
    else {
      desc = (<p>no description...</p>);
    }

    let profileDescription;
    if(currentUser) {
      profileDescription =(
          <div className="profile-me-info" onClick={this._handleDescriptionClick} >
            <h1> {this.props.user.name} </h1>
            {desc}
          </div>
          );
    }
    else {
      profileDescription =(
          <div className="profile-info" onClick={this._handleDescriptionClick} >
            <h1> {this.props.user.name} </h1>
            {desc}
          </div>
          );

    }
    return (
        <div className="container">
          <div className="profile-pic">
            <img src={this.props.user.picture} />
          </div>
          <div className="profile-info">
            {profileDescription}
          </div>
        </div>
      );
  }
}

