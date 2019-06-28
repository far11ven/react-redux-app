import React, { Component } from "react";
import Item from "./item";

class ItemList extends Component {
  componentDidMount() {
    console.log("Inside Counters Mount");
  }

  getRandomItemId() {
    // let min = 100;
    // let max = 999;
    // let random_id = min + Math.random() * (max - min);

    return Math.random() + "_" + Math.random();
  }

  render() {
    return (
      <div>
        <button className="btn btn-primary btn-sm m-2">Add Product</button>
        <button className="btn btn-primary btn-sm m-2">RESET</button>
        <hr />
        <div className="item-body">
          {this.props.globalState.itemCatalogue.map(item => (
            <Item
              key={this.getRandomItemId() + "_" + Item.id}
              onIncrement={this.props.onIncrement}
              onDecrement={this.props.onDecrement}
              onAddCartItem={this.props.onAddCartItem}
              // onDelete={this.props.onDelete}
              // onNavigate={this.props.onNavigate}
              item={item}
            >
              <h4> Item #{}</h4>
            </Item>
          ))}
        </div>
      </div>
    );
  }
}

export default ItemList;
