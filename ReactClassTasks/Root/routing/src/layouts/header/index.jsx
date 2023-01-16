import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import "./index.scss";

const Header = () => {
  return (
    <div id="header">
    <Link to={"/"}>Logo</Link>

    <ul>
      <li>
        <NavLink to={"/customers"}>Customers</NavLink>
      </li>
      <li>
        <NavLink to={"/order"}>Orders</NavLink>
      </li>
      <li>
        <NavLink to={"/products"}>Products</NavLink>
      </li>
      <li>
        <NavLink to={"/supplier"}>Supplier</NavLink>
      </li>
    </ul>
  </div>
  )
}

export default Header
