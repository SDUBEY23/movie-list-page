import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import * as ROUTES from "../../Navigation/routes";
import "./Navbar.css";

function Navbar() {
  const [show, handleShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false);
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);
  return (
    <div className={`navbar ${show && "nav__black"}`}>
      <div>
        <img
          className="navbar__logo"
          src="https://image.tmdb.org/t/p/original/wwemzKWzjKYJFfCeiB57q3r4Bcm.svg"
          alt="Netflix logo"
        />
        <ul className="navbar__list">
          <li>
            <Link to={ROUTES.HOME}>Home</Link>
          </li>
          <li>
            <Link to={ROUTES.TV_SERIES} params={{ screenType: "tv" }}>
              TV Shows
            </Link>
          </li>
          <li>
            <Link to={ROUTES.MOVIES} params={{ screenType: "movie" }}>
              Movies
            </Link>
          </li>
          {/* <li>New & Popular</li>
           */}
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
