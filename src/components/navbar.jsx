import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/js/src/collapse";

const NavBar = () => {
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
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
