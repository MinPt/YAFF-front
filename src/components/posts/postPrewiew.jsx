import React from "react";
import Like from "../common/like";
import { Link } from "react-router-dom";
import Avatar from "../common/avatar";
import { useHistory } from "react-router-dom";
import { domain } from "../../config.json";
import normalizeDate from "../../utilities/toHumanFriendlyDate";
import { parseToken } from "../../utilities/parseToken";


const PostPreview = ({
  title,
  summary,
  previewImage,
  author,
  likesCount,
  dateAdded,
  id,
  tags,
}) => {
  let history = useHistory();

  let UserId = "";
  if (parseToken() !== undefined) {
    const decoded = parseToken();
    UserId = decoded.Id;
  } else {
    UserId = undefined;
  }
  return (
    <div className="my-5 border-bottom border-dark">
      <div className="my-3 ">
        <div className="d-flex mb-2 ">
          <div className="d-flex justify-content-between align-items-end">
            <small className="m-0">
              Posted by
              <Link
                to={`/users/${author.id}`}
                style={{ textDecoration: "none", color: "black" }}
              >
                <strong className="ml-1">{author.userName}</strong>
              </Link>
            </small>

            <Avatar {...author} />
            <small className="m-0">
              <em>Posted : {normalizeDate(dateAdded)}</em>
            </small>
          </div>
          
        </div>
        <div className="d-flex mb-2 flex-wrap ">
          {tags.map((item) => (
            <small
              className="badge badge-primary mr-1"
              style={{ cursor: "pointer" }}
            >
              {item}
            </small>
          ))}
        </div>
        <h3
          onClick={() => {
            history.push(`/posts/${id}`);
          }}
          className=" "
          style={{ cursor: "pointer" }}
        >
          {title}
        </h3>
      </div>
      <div className="d-flex flex-column ">
        <img src={domain + previewImage} className="img-fluid mb-2" alt="img" />
        <p className="mt-2">{summary}</p>
        <Like count={likesCount} />
      </div>
    </div>
  );
};

export default PostPreview;
