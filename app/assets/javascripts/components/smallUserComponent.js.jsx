import {Link} from 'react-router';

class SmallUser extends React.Component{
  render() {
    let userLink = '/users/' + this.props.user.id;
    return (
        <div className="user-small">
          <Link to={userLink}>
          <div className="profile-pic">
            <img className="user-menu-img" src={this.props.user.image} />
          </div>
          <div className="profile-info">
              <h4> {this.props.user.name} </h4>
          </div>
          </Link>
        </div>
      );
  }
}
export default SmallUser;

