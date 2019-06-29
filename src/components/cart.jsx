import React, { Component } from "react";
import { Link } from "react-router-dom";

class Cart extends Component {
  state = {
    imageUrl: "https://picsum.photos/id/"
  };

  render() {
    let content;

    if (this.props.cartItemDetails.totalItems > 0) {
      console.log("cartItems ;", this.props.cartItemDetails.totalItems);
      content = (
        <div className="item-container">
          {this.props.cartItemDetails.cartItemCatalogue
            .filter(c => c.value > 0)
            .map(item => (
              <div className="item-body" style={{ margin: "2em" }}>
                <div className="item">
                  <div className="col-md-6">
                    <h1>
                      Item #{item.id}
                      <span
                        style={{ float: "right" }}
                        className="badge badge-pill badge-primary"
                      >
                        x {item.value}
                      </span>
                    </h1>
                  </div>
                  <div className="col-md-6">
                    <Link to={"/item-list/" + item.id}>
                      <img
                        alt=""
                        src={this.state.imageUrl + (item.id + 100) + "/400/200"}
                        style={{ width: "100%" }}
                      />
                    </Link>
                  </div>
                </div>
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
