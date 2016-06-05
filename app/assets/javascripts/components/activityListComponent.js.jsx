import Activity from '../containers/activity';

class ActivityListComponent extends React.Component{
  componentWillMount() {
    this.props.fetchTables();
  }

  render() {
    if(!this.props.tables)
      return <div/>;
    return (
      <div className="container">
        <div className="activities">
          {this.props.tables.map(
            (table, i) =>
            <Activity key={i} id={table.id}/>
            )}
        </div>
      </div>
    );
  }
}

export default ActivityListComponent;

