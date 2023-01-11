import React from "react";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return <div>
    <Link to={"/"}><h1>Products</h1></Link>
    <ul>
            <li>
                <NavLink to={"/"}>Home</NavLink>
            </li>
            <li>
                <NavLink to={"/products-list"}>Products List</NavLink>
            </li>
            <li>
                <NavLink to={"/products-in-basket"}>Products in Basket</NavLink>
            </li>
        </ul>
  </div>;
};

export default Header;
