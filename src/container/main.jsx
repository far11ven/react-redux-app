import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import Navbar from "../components/navbar";
import ItemList from "../components/item-list";
import Item from "../components/item";
import Cart from "../components/cart";

class Main extends Component {
  handleIncrement = counter => {
    console.log("clicked increment button");
    const countersNew = [...this.props.counters];
    const index = countersNew.indexOf(counter);

    countersNew[index] = { ...counter };

    ++countersNew[index].value;

    console.log("countersNew[index] :", countersNew[index]);

    this.setState({ counters: countersNew });
    this.updateTotalItems();
  };

  handleDecrement = counter => {
    console.log("clicked decrement button");

    const countersNew = [...this.state.counters];
    const index = countersNew.indexOf(counter);

    countersNew[index] = { ...counter };

    if (countersNew[index].value > 0) {
      --countersNew[index].value;
      this.setState({ counters: countersNew });
    }
    this.updateTotalItems();
  };

  handleAdd = () => {
    console.log("clicked ADD button");

    var countersNew = this.state.counters.slice();

    if (this.state.counters.length > 0) {
      countersNew.push({
        id: this.state.counters[this.state.counters.length - 1].id + 1,
        value: 0
      });
    } else {
      countersNew.push({ id: 0, value: 0 });
    }
    this.setState({ counters: countersNew });
    this.updateTotalItems();
  };

  handleReset = () => {
    console.log("clicked RESET button");
    const countersNew = this.state.counters.map(c => {
      c.value = 0;
      return c;
    });

    this.setState({ counters: countersNew });
    this.updateTotalItems();
  };

  handleDelete = counterId => {
    const counters = this.state.counters.filter(c => c.id !== counterId);
    this.setState({ counters: counters });
    this.updateTotalItems();
  };

  handleNavigate = counter => {
    // this.props.history.push({
    //   state: { detail: "Hello" }
    // });

    // console.log("Saving data in history", this.props.history);

    let counterId = counter.id;

    this.setState({ selectedCounterId: counterId });
  };

  updateTotalItems = () => {
    let i = 0;
    this.state.counters.filter(c => {
      i += c.value;
      console.log("i", c.value);
      return i;
    });
    console.log("final i", i);
    this.setState({ totalItems: i });

    this.props.onUpdateTotal(this.state.totalItems); // updates value in Navbar via App Component
    //localStorage.setItem("state", JSON.stringify(this.state));
  };

  render() {
    let content;

    if (this.props.location.pathname === "/") {
      var min = 1;
      var max = 100;
      var rand_id = min + Math.random() * (max - min);
      content = (
        <div>
          <h1>You've reached home</h1>
          <img
            src={"https://picsum.photos/id/" + Math.floor(rand_id) + "/800/400"}
          />
        </div>
      );
    } else if (this.props.location.pathname === "/cart") {
      content = <Cart cartItemDetails={this.props.globalState} />;
    } else if (this.props.location.pathname === "/item-list") {
      content = (
        <ItemList
          globalState={this.props.globalState}
          onIncrement={this.props._handleIncrementItem}
          onDecrement={this.props._handleDecrementItem}
          onAddCartItem={this.props._handleAddCartItem}
        />
      );
    } else if (this.props.location.pathname.includes("/item-list/")) {
      content = <Item />;
    }

    return (
      <React.Fragment>
        <Navbar totalItems={this.props.globalState.totalItems} />
        <main className="container">{content}</main>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    globalState: {
      totalItems: state.totalItems,
      itemCatalogue: state.itemList,
      cartItemCatalogue: state.cartItemList
    }
  };
};

const mapActionsToProps = dispatch => {
  return {
    _handleIncrementItem: item =>
      dispatch({ type: "INC_ITEM", itemId: item.id }),
    _handleDecrementItem: item =>
      dispatch({ type: "DEC_ITEM", itemId: item.id }),
    _handleAddCartItem: item =>
      dispatch({
        type: "ADD_CART_ITEM",
        itemId: item.id,
        itemCount: item.value
      })
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapActionsToProps
  )(Main)
);
