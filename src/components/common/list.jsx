import React from "react";
import ListItem from "./listItem";

const List = ({ items }) => {
  return (
    <ul className="list-group">
      {items.map((item) => {
        return <ListItem key={item.id} brand={item.title} data={item.body} />;
      })}
    </ul>
  );
};

export default List;
