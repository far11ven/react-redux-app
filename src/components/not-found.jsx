import React from "react";
import { Link } from "react-router-dom";

//Staetless functional component

const NotFound = props => {
  return (
    <div>
      <h2 style={{ margin: "33px" }}>
        <span style={{ color: "red" }}>404.</span> You've strayed away!!
        <br />
        <Link
          to="/"
          style={{
            marginTop: "10px",
            color: "royalblue",
            textDecoration: "underline"
          }}
        >
          <h5> Go back to home </h5>
        </Link>
      </h2>
    </div>
  );
};

export default NotFound;
