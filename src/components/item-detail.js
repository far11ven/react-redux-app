import React from "react";

const ItemDetail = props => {
  return (
    <div className="container">
      <h3> Product-Description : </h3>

      <h5> Item #{props.currItemId} </h5>

      <br />
      <img
        alt=""
        src={
          "https://picsum.photos/id/" +
          (Number(props.currItemId) + 100) +
          "/600/300"
        }
      />
    </div>
  );
};

export default ItemDetail;
