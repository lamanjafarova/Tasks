import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./header.scss"

const Header = () => {
  return <div className="container">
    <div id="header">
      <Link to={"/new-blog"} className="logo">The Blog Website</Link>

<ul>
  <li>
    <NavLink to={"/new-blog"}>Home</NavLink>
    <NavLink to={"/"}>New Blog</NavLink>
  </li> 
</ul>
  </div>
  </div>
};

export default Header;
