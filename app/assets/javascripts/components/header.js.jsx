import { Link } from 'react-router';

class Header extends React.Component {
  constructor() {
    super();
    this._userSignOut = this._userSignOut.bind(this);
  }
  _userSignOut() {
    console.log("clicking");
    this.props.signOut();
  }
  userLink() {
    if(this.props.currentUser) {
      const userlink = '/users/' + this.props.currentUser.id
      return (
          <Link to={userlink}>
            <img className="user-menu-img" src={this.props.currentUser.image} />
             {this.props.currentUser.first}
          </Link>
          )
    }
    else return (<a href="">no user</a>)
  }

  render() {
    return (
      <nav>
        <div className="container">
          <div className="header-logo">
            <Link to={'/activities'}>
            <img src="images/logotype.png" />
            </Link>
          </div>
          <ul className="header-menu">
            <li className="menu-item">
              {this.userLink()}
            </li>
            <li className="menu-item">
              <Link to={'/activities'}>
                Aktiviteter
              </Link>
            </li>
            <li className="menu-item">
              <Link to={'/restaurants'}>
                Restauranger
              </Link>
            </li>
            <li className="menu-item">
              <a href="/signout">
                Logga ut
              </a>
            </li>
          </ul>
        </div>
      </nav>
        )
  }
}

export default Header;

