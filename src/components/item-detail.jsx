import React from "react";

const ItemDetail = props => {
  const item = props.globalState.itemCatalogue.filter(
    c => c.id == props.currItemId // Both have different type but same value hence, obj.id == action.itemId
  )[0];

  return (
    <div className="container">
      <h3 style={{ color: "royalblue" }}> Product-Description : </h3>

      <h4> Item #{item.id}</h4>

      <img
        alt="Goto Product Page"
        src={
          "https://picsum.photos/id/" +
          (Number(props.currItemId) + 100) +
          "/600/300"
        }
      />
      <br />
      <br />

      <h6> Quantity : </h6>
      <button
        onClick={() => props.onDecrementItem(item)}
        className="btn btn-secondary btn-sm m-2"
      >
        -
      </button>

      <span className="badge m-2 badge-primary">{item.value}</span>
      <button
        onClick={() => props.onIncrementItem(item)}
        className="btn btn-secondary btn-sm m-2"
      >
        +
      </button>

      <button
        onClick={() => props.onAddCartItem(item)}
        disabled={!item.value > 0}
        className="btn btn-info btn-sm m-2"
      >
        Add to cart
      </button>
    </div>
  );
};

export default ItemDetail;
