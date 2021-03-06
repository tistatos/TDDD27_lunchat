import Header from './header.js.jsx';
import Footer from './footer.js.jsx';

class MainComponent extends React.Component {
  componentWillMount() {
    this.props.fetchCurrentUser();
  }

  render() {
    return (
        <div>
          <Header {...this.props}/>
          <div className="main-container">
          {this.props.children}
          </div>
          <Footer {...this.props}/>
        </div>
        )
  }
}

export default MainComponent;

