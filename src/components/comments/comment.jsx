import React from "react";
import { domain } from "../../config.json";

const CommentItem = ({ body, author }) => {
  return (
    <div className="border mt-2 p-3">
      <div>
        <p>Posted by {author.nickName}</p>
        <img src={domain + author.avatar} alt="AVATAR" />
      </div>
      <p>{body}</p>
    </div>
  );
};

export default CommentItem;
