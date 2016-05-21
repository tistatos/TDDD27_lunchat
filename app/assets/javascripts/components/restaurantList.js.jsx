class RestaurantList extends React.Component {
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
              <Restaurant key={i} restaurant={restaurant}/>
             )}
        </section>
        <div className="yelp-info">
          Sökresultatet kommer från:
          {/*<%= image_tag("yelp-logo-medium.png") %>*/}
        </div>
      </div>
    );
  }
}

export default RestaurantList;

