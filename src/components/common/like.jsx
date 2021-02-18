import React from "react";

const Like = ({ count }) => {
  return (
    <div className="d-flex align-self-end mb-2">
      <span className="material-icons mr-1">favorite_border</span>
      {count}
    </div>
  );
};

export default Like;
