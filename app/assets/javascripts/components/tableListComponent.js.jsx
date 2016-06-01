import Table from '../containers/table';

class TableListComponent extends React.Component{
  render() {
    const restaurant = this.props.restaurants.filter( (r) => { return (r.yelpid == this.props.restaurant) } )[0];

    return (
      <div className="tableList">
      { restaurant.tables.map(
        (table, i) =>
          <Table key={i} restaurant={restaurant.yelpid} table_id={table.id} />
        )}
      </div>
    );
  }
}

export default TableListComponent;
