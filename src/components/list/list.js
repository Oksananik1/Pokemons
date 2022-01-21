
import React from 'react';

import Card from "../card";

const List = (props) => {
    const products = props.list;
    console.log(props)
  return (
    <div className="container mt-3">
      <div className="row">
        <Card />
      </div>
    </div>
  );
};

export default List;
