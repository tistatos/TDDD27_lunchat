import SmallUser from './smallUserComponent.js.jsx';

class ActivityComponent extends React.Component{

  componentWillMount() {
    this.props.fetchTables();
  }
  render() {
    let table = this.props.tables.filter( (t) => {
      return (t.id == this.props.id)
    })[0];

    let restaurant = table.restaurant;
    let owner;
    let restaurantImage;

    if(restaurant.image) {
      restaurantImage = <img src={restaurant.image}/>
    }
    else {
      restaurantImage = <img src="http://loremflickr.com/100/100/restaurant"/>
    }
    if(table.owner.id == this.props.currentUser.id) {
      owner = (<p> Ditt bord </p>);
    }
    else {
      owner = (<div/>);
    }

    return (
      <div className="activity">
        <div className="activity-name">
          <h2>{restaurant.name}</h2>
        </div>
        <div className="activity-left">
          { restaurantImage}
          <p> {table.users.length} Person(er)</p>
          <p> kl 12:00 </p>
        </div>
        <div className="activity-right">
          <h4>Skapare av bordet: {table.owner.name} <i className="fa fa-star"></i>
</h4>
          <p> Deltagare: </p>
          {table.users.map( (user,i) =>
            <SmallUser key={i} user={user} />
            )}
        </div>
      </div>
    );
  }
}

export default ActivityComponent

