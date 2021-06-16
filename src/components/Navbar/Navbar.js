import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="navbar">
      <div>
        <img
          className="navbar__logo"
          src="https://image.tmdb.org/t/p/original/wwemzKWzjKYJFfCeiB57q3r4Bcm.svg"
          alt="Netflix logo"
        />
        <ul className="navbar__list">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/tvseries">TV Shows</Link>
          </li>
          <li>
            <Link to="/movies">Movies</Link>
          </li>
          {/* <li>New & Popular</li>
           */}
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
