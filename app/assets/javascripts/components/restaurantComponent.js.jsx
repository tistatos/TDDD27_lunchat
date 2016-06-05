import TableList from '../containers/tableList.js';

class RestaurantComponent extends React.Component{
  constructor() {
    super();
    this._handleTableClick = this._handleTableClick.bind(this);
    this.restaurant = undefined;
  }

  _handleTableClick() {
    this.props.createTable(this.restaurant);
  }

  render() {
    const restaurant = this.restaurant = this.props.restaurants.filter( (r) => { return (r.yelpid == this.props.yid) } )[0];
    const {name, image, rating, link, tables} = restaurant;
    let restaurantImage;

    if(image) {
      restaurantImage = <img src={image}/>
    }
    else {
      restaurantImage = <img src="http://loremflickr.com/100/100/restaurant"/>

    }

    return (
      <div className="restaurant">
        <a href={link} target="_new" title='Läs om {name} mer på Yelp'>
            <h2 className="name">
              {name}
            </h2>
        </a>
          <div className="image">
            { restaurantImage }
          </div>
          <div className="rating">
            <img src={rating}/>
          </div>
        <div className="tables">
          <TableList restaurant={restaurant.yelpid} tables={tables} currentUser={this.props.currentUser}/>
          <div className="create-table-button">
            <a onClick={this._handleTableClick}> Skapa Bord </a>
          </div>
        </div>
      </div>
    );
  }
}

export default RestaurantComponent;

