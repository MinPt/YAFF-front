import React from "react";

const ListItem = ({ brand, data }) => {
  return (
    <div className="border mt-2">
      <li class="list-group-item">
        <h2>{brand}</h2>
        <p>{data}</p>
      </li>
    </div>
  );
};

export default ListItem;
