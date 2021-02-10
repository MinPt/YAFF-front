import React from "react";
import Like from "../common/like";
import { useHistory } from "react-router-dom";
import Avatar from "../common/avatar";
import normalizeDate from "../../utilities/toHumanFriendlyDate";
import ReactMarkdown from "react-markdown";
import { domain } from "../../config.json";
const PostPreview = ({
  title,
  summary,
  previewImage,
  author,
  likesCount,
  dateAdded,
  id,
}) => {
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
        <div className="d-flex flex-column ">
          <img
            src={domain + previewImage}
            className="img-fluid mb-2"
            alt="img"
          />
          <p>{summary}</p>
          <Like count={likesCount} />
        </div>
      </li>
    </div>
  );
};

export default PostPreview;
