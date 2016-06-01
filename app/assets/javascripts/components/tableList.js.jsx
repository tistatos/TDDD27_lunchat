class TableList extends React.Component{
  render() {
    return (
      <div className="tableList">
      { this.props.tables.map(
        (table, i) =>
          <Table key={i} table.id={table.id} />
        )}
      </div>
    );
  }
}

