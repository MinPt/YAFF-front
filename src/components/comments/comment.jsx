import React from "react";
import Avatar from "../common/avatar";
import normalizeDate from "../../utilities/toHumanFriendlyDate";

const CommentItem = ({ body, author, dateAdded }) => {
  return (
    <div className="border mt-2 p-3">
      <div>
        comment by {author.userName}
        <Avatar {...author} />
        posted: {normalizeDate(dateAdded)}
      </div>
      <p>{body}</p>
    </div>
  );
};

export default CommentItem;
