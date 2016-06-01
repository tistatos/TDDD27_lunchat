import Restaurant from '../containers/restaurant';

class RestaurantListComponent extends React.Component {
  componentWillMount() {
    this.props.fetchRestaurants();
  }

  render() {
    return (
      <div>
        <h1>Restauranger i {this.props.city}</h1>
        <section className="restaurants">
          {this.props.restaurants.map(
            (restaurant, i) =>
              <Restaurant key={i} yid={restaurant.yelpid} />
             )}
        </section>
        <div className="yelp-info">
          Sökresultatet kommer från:
            <img src="images/yelp-logo-medium.png"/>
        </div>
      </div>
    );
  }
}

export default RestaurantListComponent;

