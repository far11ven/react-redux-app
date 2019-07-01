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

  getBadgeClasses(item) {
    let classes = "badge m-2 badge-";
    classes += item.value === 0 ? "warning" : "primary";
    return classes;
  }

  render() {
    return (
      <div>
        <button
          onClick={this.props.onAddItem}
          className="btn btn-primary btn-sm m-2"
        >
          Add Product
        </button>
        <button
          onClick={this.props.onResetItemQt}
          className="btn btn-primary btn-sm m-2"
        >
          RESET Qt.
        </button>
        <hr />
        <div className="item-body">
          {this.props.globalState.itemCatalogue.map(item => (
            <Item
              key={this.getRandomItemId()}
              onDelete={this.props.onDeleteItem}
              item={item}
            >
              <div>
                <h4> Item # {item.id}</h4>
                <h5> Quantity : </h5>
                <button
                  onClick={() => this.props.onDecrementItem(item)}
                  className="btn btn-secondary btn-sm m-2"
                >
                  -
                </button>

                <span
                  style={this.styles}
                  className={this.getBadgeClasses(item)}
                >
                  {item.value}
                </span>
                <button
                  onClick={() => this.props.onIncrementItem(item)}
                  className="btn btn-secondary btn-sm m-2"
                >
                  +
                </button>

                <button
                  onClick={() => this.props.onAddCartItem(item)}
                  disabled={!item.value > 0}
                  className="btn btn-info btn-sm m-2"
                >
                  Add to cart
                </button>

                <button
                  onClick={() => this.props.onDeleteItem(item)}
                  className="btn btn-danger btn-sm m-2"
                >
                  Delete Item
                </button>
                <br />
              </div>
            </Item>
          ))}
        </div>
      </div>
    );
  }
}

export default ItemList;
