var RestaurantList = React.createClass({
  propTypes: {
    city: React.PropTypes.string
  },

  render: function() {
    return (
      <div>
        <h1>Restauranger i {this.props.city}</h1>
        <img src={this.props.image}/>
        <div>Tables: {this.props.tables}</div>
      </div>
    );
  }
});

