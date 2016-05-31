class Restaurant extends React.Component{
  constructor() {
    super();
    this._handleTableClick = this._handleTableClick.bind(this);
  }

  _handleTableClick() {
    console.log(this.props)
    this.props.createTable(this.props.restaurant.yelpid)
  }

  render() {
    const {name, image, rating, link, tables} = this.props.restaurant;
    if(image) {
      restaurantImage = <img src={image}/>
    }
    else {
      restaurantImage = <img src="http://placekitten.com/g/100/100"/>
    }

    if(tables.length == 0) {
      tablelist = (
          <div className="table-list">
            <div className="create-table-button">
              <a onClick={this._handleTableClick}> Skapa Bord </a>
            </div>
          </div>
          )
    }
    else {
      tablelist = (
          <div className="table-list">
            <TableList tables={tables}/>
            <div className="create-table-button">
              <a onClick={this._handleTableClick}> Skapa Bord </a>
            </div>
          </div>
          )
    }

    return (
      <div className="restaurant">
        <a href={link} target="_new" title='Läs om {name} mer på Yelp'>
            <h2 className="name">
              {name}
            </h2>
          <div className="image">
            { restaurantImage }
          </div>
          <div className="rating">
            <img src={rating}/>
          </div>
        </a>
        {tablelist}
      </div>
    );
  }
}

