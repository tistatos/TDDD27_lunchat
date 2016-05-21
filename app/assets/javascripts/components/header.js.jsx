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
      return (
          <Link to={'/activities'}>
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
            {/*<img src={"<%= image_url('logotype.png')%>"} />*/}
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
              <Link to="" onClick={this._userSignOut}>
                Logga ut
              </Link>
            </li>
          </ul>
        </div>
      </nav>
        )
  }
}

export default Header;

