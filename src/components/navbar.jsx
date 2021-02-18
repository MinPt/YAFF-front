import React from "react";
import { Link } from "react-router-dom";
import isLogged from "../utilities/isAuntificated";
import "bootstrap/js/src/collapse";

const NavBar = (props) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link to="/home" className="navbar-brand">
        Navbar
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <Link to="/posts" className="nav-link">
              Posts
            </Link>
          </li>
          {isLogged() && (
            <li className="nav-item active">
              <Link to="/createPost" className="nav-link">
                Create Post
              </Link>
            </li>
          )}
          <li className="nav-item active">
            <Link to="/markdown" className="nav-link">
              Markdown
            </Link>
          </li>
          <li className="nav-item active">
            <Link to="/formik-form" className="nav-link">
              formik-form
            </Link>
          </li>
          {!isLogged() && (
            <li className="nav-item active">
              <Link to="/login" className="nav-link">
                Login
              </Link>
            </li>
          )}
          {isLogged() && (
            <li
              className="nav-item active"
              onClick={() => {
                localStorage.removeItem("jwt");
                props.onLogout();
              }}
            >
              <Link to="/" className="nav-link">
                Logout
              </Link>
            </li>
          )}

          {!isLogged() && (
            <li className="nav-item active">
              <Link to="/registration" className="nav-link">
                Registration
              </Link>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
