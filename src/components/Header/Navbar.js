import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import * as ROUTES from "../../Navigation/routes";
import "./Navbar.css";
import NotificationsActiveOutlinedIcon from "@material-ui/icons/NotificationsActiveOutlined";
import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined";
import CardGiftcardOutlinedIcon from "@material-ui/icons/CardGiftcardOutlined";
import { Avatar, Badge, IconButton } from "@material-ui/core";

function Navbar() {
  const [showNavbar, handleShowNavbar] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 50 ? handleShowNavbar(true) : handleShowNavbar(false);
    });
  }, []);
  return (
    <div className={`navbar ${showNavbar && "nav__black"}`}>
      <div>
        <img
          className="navbar__logo"
          src="https://image.tmdb.org/t/p/original/wwemzKWzjKYJFfCeiB57q3r4Bcm.svg"
          alt="Netflix logo"
        />
        <ul className="navbar__list">
          <li>
            <NavLink exact className="navbar__activeitem" to={ROUTES.HOME}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink exact className="navbar__activeitem" to={ROUTES.TV_SERIES}>
              TV Shows
            </NavLink>
          </li>
          <li>
            <NavLink exact className="navbar__activeitem" to={ROUTES.MOVIES}>
              Movies
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="navbar__icons">
        <IconButton>
          <Badge>
            <SearchOutlinedIcon style={{ color: "white" }} />
          </Badge>
        </IconButton>
        <IconButton>
          <Badge>
            <NotificationsActiveOutlinedIcon style={{ color: "white" }} />
          </Badge>
        </IconButton>
        <IconButton>
          <Badge>
            <CardGiftcardOutlinedIcon style={{ color: "white" }} />
          </Badge>
        </IconButton>
        <IconButton>
          <Avatar alt="Remy Sharp" size="small" src="/broken-image.jpg">
            S
          </Avatar>
        </IconButton>
      </div>
    </div>
  );
}

export default Navbar;
