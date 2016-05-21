import Header from './header.js.jsx';
import Footer from './footer.js.jsx';

class MainComponent extends React.Component {
  render() {
    return (
        <div>
          <Header {...this.props}/>
          {React.cloneElement(this.props.children, this.props)}
          <Footer />
        </div>
        )
  }
}

export default MainComponent;

