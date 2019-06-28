import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

//Staetless functional component

const NavBar = props => {
  return (
    <nav className="navbar navbar-light bg-light">
      <Link className="navbar-brand" to="/">
        Home
      </Link>

      <ul className="navbar-nav mr-auto">
        <li className="nav-link">
          <Link to="/item-list">Products</Link>
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
