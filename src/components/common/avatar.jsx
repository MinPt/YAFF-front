import React from "react";
import { domain } from "../../config.json";

const Avatar = ({ avatar }) => {
  return (
    <img
      style={{ width: "40px", borderRadius: "100%" }}
      src={domain + avatar}
      alt="avatar"
      className="ml-2"
    />
  );
};

export default Avatar;
