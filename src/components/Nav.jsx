import React from "react";
import { Timage, Tinput } from "./Tags";
import {
  IcAddOut,
  IcExplore,
  IcHome,
  IcLoveN,
  IcMessanger,
  IcSearch,
} from "./Icons";
import { Users } from "./Users";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav>
      <Timage src={logo} clas="logo_insta" />
      <div className="bowl_search_two">
        <IcSearch clas="svg_nav_Search" />
        <Tinput plc="Search" clas="bowl_search" />
      </div>
      <div className="bowl_items_nav">
        <Link to="/" className="svg_nav_a">
          <IcHome clas="svg_nav" />
        </Link>
        <Link to="/chat" className="svg_nav_a">
          <IcMessanger clas="svg_nav" />
        </Link>
        <Link to="/add-post" className="svg_nav_a">
          <IcAddOut clas="svg_nav" />
        </Link>
        <Link to="/explore" className="svg_nav_a">
          <IcExplore clas="svg_nav" />
        </Link>
        <Link to="/notification" className="svg_nav_a">
          <IcLoveN clas="svg_nav" />
        </Link>
        <Link to="/profile/devnluffy" className="svg_nav_a">
          <Timage src={Users[0].avatar} clas="avatar_nav" />
        </Link>
      </div>
    </nav>
  );
}

export default Nav;
