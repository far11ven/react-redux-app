import React, { Component } from "react";
import { Link } from "react-router-dom";

class Item extends Component {
  state = {
    //value: this.props.counter.value,
    imageUrl: "https://picsum.photos/id/"
  };

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.item.value === 0 ? "warning" : "primary";
    return classes;
  }

  render() {
    console.log("this.props.item.id :", this.props.item);
    return (
      <React.Fragment>
        <div className="container">
          <Link
            to={"/item-list/" + this.props.item.id}
            // onClick={() => this.props.onNavigate(this.props.counter)}
          >
            <div>
              <img
                alt=""
                src={
                  this.state.imageUrl + (this.props.item.id + 100) + "/300/150"
                }
              />
            </div>
          </Link>
          <h5> Quantity : </h5>

          <button
            onClick={() => this.props.onDecrement(this.props.item)}
            className="btn btn-secondary btn-sm m-2"
          >
            -
          </button>

          <span style={this.styles} className={this.getBadgeClasses()}>
            {this.props.item.value}
          </span>
          <button
            onClick={() => this.props.onIncrement(this.props.item)}
            className="btn btn-secondary btn-sm m-2"
          >
            +
          </button>

          <button
            onClick={() => this.props.onAddCartItem(this.props.item)}
            className="btn btn-info btn-sm m-2"
          >
            Add to cart
          </button>

          <button
            // onClick={() => this.props.onDelete(this.props.counter.id)}
            className="btn btn-danger btn-sm m-2"
          >
            Delete Item
          </button>
          <br />
          <Link
            to={"/item-list/"} //  to={"/item-list/" + this.props.counter.id}
            // onClick={() => this.props.onNavigate(this.props.counter)}
          >
            {<div>{this.props.children}</div>}
          </Link>
          <hr />
        </div>
      </React.Fragment>
    );
  }
}

export default Item;
