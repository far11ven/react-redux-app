import React, { Component } from "react";

class Cart extends Component {
  state = {
    imageUrl: "https://picsum.photos/id/"
  };

  render() {
    let content;

    if (this.props.cartItemDetails.totalItems > 0) {
      console.log("cartItems ;", this.props.cartItemDetails.totalItems);
      content = (
        <div className="item-body">
          {this.props.cartItemDetails.cartItemCatalogue
            .filter(c => c.value > 0)
            .map(item => (
              <div className="item col-md-12">
                <h2>Item #{item.id} </h2>
                <div className="col-md-8" style={{ float: "left" }}>
                  <img
                    alt=""
                    src={this.state.imageUrl + (item.id + 100) + "/600/300"}
                    style={{ width: "100%" }}
                  />
                </div>
                <h1 style={{ zIndex: 999999, float: "right" }}>
                  x
                  <span className="badge badge-pill badge-primary">
                    {" "}
                    {item.value}
                  </span>
                </h1>
              </div>
            ))}
        </div>
      );
    } else {
      content = <h2> There are no items in the cart!! </h2>;
    }

    return (
      <React.Fragment>
        <div className="container">{content}</div>
      </React.Fragment>
    );
  }
}

export default Cart;
