import { Fragment } from "react";
function ListGroup() {
  const items =[
    'New York',
    'San Francisco',
    'Tokyo',
    'London',
    'Paris'
  ];
  return (
    <Fragment>
      <h1>List</h1>
    <ul className="list-group">
      {items.map((item) =>
      (<li key={item}>{item}</li>))}
  </ul>
  </Fragment>
  );
}

export default ListGroup;