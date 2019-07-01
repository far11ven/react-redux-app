import React, { Component } from "react";
import { Link } from "react-router-dom";

class Item extends Component {
  state = {
    //value: this.props.counter.value,
    imageUrl: "https://picsum.photos/id/"
  };

  navigateToItem(pathId) {
    let path = "/item-list/" + pathId;
    this.props.history.push(path);
    console.log("pushed to history!!");
  }

  render() {
    console.log("this.props.item.id :", this.props.item);
    return (
      <React.Fragment>
        <div
          className="container"
          //onClick={() => this.navigateToItem(this.props.item.id)}
        >
          <Link to={"/item-list/" + this.props.item.id}>
            <img
              alt="Goto Product Page"
              src={
                this.state.imageUrl + (this.props.item.id + 100) + "/300/150"
              }
            />
          </Link>

          {this.props.children}

          <hr />
        </div>
      </React.Fragment>
    );
  }
}

export default Item;
