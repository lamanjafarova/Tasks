import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return <div>
    <nav>
        <Link to={"/"}>Movie App</Link>
        <ul>
            <li>
            <i className="fa-solid fa-circle-user"></i>
            </li>
        </ul>
    </nav>
  </div>;
};

export default Header;
