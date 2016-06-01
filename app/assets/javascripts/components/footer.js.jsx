class Footer extends React.Component {

  userIsLoggedIn() {
            //<% if logged_in? %>
              //<li>
                //<%= link_to t('profile'), user_path(current_user.id) %>
              //</li>
              //<li>
                //<%= link_to t('activities'), user_path(current_user.id) %>
              //</li>
              //<li>
                //<%= link_to t('search_restaurants'), restaurants_path %>
              //</li>
              //<li>
              //<%= link_to t('logout'), signout_path, :method => :delete %>
              //</li>
            //<% else %>
              //<li>
                //<%= link_to t('signin'), signin_path %>
              //</li>
            //<% end %>
            //</ul>
    if(this.props.currentUser && this.props.currentUser.length != 0) {
      return (
           <ul>
             <li><a href="">Din profil</a></li>
             <li><a href="">Aktiviteter</a></li>
             <li><a href="">Restauranger</a></li>
             <li><a href="">Logga ut</a></li>
           </ul>
          )
    }
    else {
      return (<p></p> )
    }
  }


  render() {
    return (
      <footer>
        <div className="container">
          <div className="footer-column">
            <p>
              Lunchat är ett projekt skapat i kursen Avancerad Webprogrammering (TDDD27) på Linköpings universitet'
            </p>
          </div>
          <div className="footer-column">
            {this.userIsLoggedIn()}
          </div>
          <div className="footer-column">
            <p>
              Lunchat är skapat av Erik Sandrén
            </p>
            <div className="footer-column">
              <a href="http://www.twitter.com/tistatos_">
                <i className="fa fa-twitter fa-2x"></i>
              </a>
            </div>
            <div className="footer-column">
              <a href="http://www.github.com/tistatos">
                <i className="fa fa-github fa-2x"></i>
              </a>
            </div>
            <div className="footer-column">
              <a href="https://se.linkedin.com/in/eriksandren">
                <i className="fa fa-linkedin fa-2x"></i>
              </a>
            </div>
          </div>
        </div>
      </footer>
        )
  }
}

export default Footer;

