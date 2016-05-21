class Restaurant extends React.Component{
  render() {
    const {name , image, rating} = this.props.restaurant;
    if(image) {
      restaurantImage = <img src={image}/>
    }
    else {
      restaurantImage = <img src="http://placekitten.com/g/100/100"/>
    }

    return (
      <div className="restaurant">
        { restaurantImage }
        <img src={rating}/>
        <p>{name}</p>
      </div>
    );
  }
}

