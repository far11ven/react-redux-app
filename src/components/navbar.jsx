import React from "react";
import PropTypes from "prop-types";
import { Link, NavLink } from "react-router-dom";

//Staetless functional component

const NavBar = props => {
  return (
    <nav className="navbar navbar-light bg-light">
      <Link className="navbar-brand" to="/">
        <img alt="Home" src="/favicon.png" />
      </Link>

      <ul className="navbar-nav mr-auto">
        <li className="nav-link" style={{ marginLeft: "10px" }}>
          <NavLink to="/item-list">
            <h6>Products</h6>
          </NavLink>
        </li>
      </ul>
      <form className="form-inline my-2 my-lg-0">
        <Link className="nav-link" to="/cart">
          <h5>
            Total Items :{" "}
            <span className="badge badge-pill badge-primary">
              {props.totalItems}
            </span>
          </h5>
        </Link>
      </form>
    </nav>
  );
};

NavBar.propTypes = {
  totalItems: PropTypes.number.isRequired
};

export default NavBar;
