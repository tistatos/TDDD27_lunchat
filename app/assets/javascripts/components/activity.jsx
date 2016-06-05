class ActivityComponent extends React.Component{

  render() {
    let table = this.props.tables.filter( (t) => {
      return (t.id == this.props.id)
    })[0];

    let restaurant = table.restaurant;
    let owner;
    let restaurantImage;

    if(image) {
      restaurantImage = <img src={restaurant.image}/>
    }
    else {
      restaurantImage = <img src="http://loremflickr.com/100/100/restaurant"/>

    }
    if(table.owner.id == this.props.currentuser.id) {
      owner = (<p> Ditt bord </p>);
    }
    else {
      owner = (<div/>);
    }

    return (
      <div className="activity">
        <h2>{restaurant.name}</h2>
        { restaurantImage}
        { owner }
        <p> {table.users.length} Person(er)</p>
        <p> kl 12:00 </p>
      </div>
    );
  }
}

export default ActivityComponent

