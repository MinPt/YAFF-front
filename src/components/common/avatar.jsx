import React from "react";
import { domain } from "../../config.json";

const Avatar = ({ avatar }) => {
  return (
    <img
      style={{ width: "20px", borderRadius: "10%" }}
      src={domain + avatar}
      alt="avatar"
      className="ml-2 mr-3"
    />
  );
};

export default Avatar;
