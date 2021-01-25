import React from "react";
import Like from "../common/like";
import { useHistory } from "react-router-dom";
import Avatar from "../common/avatar";
import normalizeDate from "../../utilities/toHumanFriendlyDate";

const PostPreview = ({ title, body, author, likesCount, dateAdded, id }) => {
  let history = useHistory();

  return (
    <div
      onClick={() => {
        history.push(`/posts/${id}`);
      }}
      className="border mt-2"
    >
      <li className="list-group-item">
        <div className="">
          <div className="d-flex align-baseline">
            <p>Posted by /u {author.userName}</p>
            <Avatar {...author} />
            <p>Posted : {normalizeDate(dateAdded)}</p>
          </div>
          <h3>{title}</h3>
        </div>
        <div>
          <p>{body}</p>
          <Like count={likesCount} />
        </div>
      </li>
    </div>
  );
};

export default PostPreview;
