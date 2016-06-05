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

    console.log(this.props.user);
    if(this.props.user.length == 0)
      return <div/>;
    let likes = this.props.user.likes.slice(0,5);


    return (
        <div className="container">
          <div className="profile-pic">
            <img src={this.props.user.picture} />
          </div>
          <div className="profile-info">
            <div className="profile-info" onClick={this._handleDescriptionClick} >
              <h1> {this.props.user.name} </h1>

              <div className="interests">
                <p> {this.props.user.first}s intressen </p>
                <ul>
                {likes.map( (like, i) =>
                  <li key={i}> {likes[i][0]} </li>
                )}
                </ul>
              </div>
            </div>
          </div>
        </div>
      );
  }
}

