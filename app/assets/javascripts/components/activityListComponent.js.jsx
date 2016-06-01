class ActivityListComponent extends React.Component{
  render() {
    return (
      <div className="activities">
        {this.props.activities.map(
          (activity, i) =>
          <Activity key={i} activity={activity}/>
          )}
      </div>
    );
  }
}

export default ActivityListComponent;
