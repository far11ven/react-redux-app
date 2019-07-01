import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import Navbar from "../components/navbar";
import ItemList from "../components/item-list";
import Cart from "../components/cart";
import ItemDetail from "../components/item-detail";

class Main extends Component {
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
            alt="Home"
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
          onAddItem={this.props._handleAddNewItem}
          onDeleteItem={this.props._handleDeleteItem}
          onResetItemQt={this.props._handleResetQt}
          onIncrementItem={this.props._handleIncrementItem}
          onDecrementItem={this.props._handleDecrementItem}
          onAddCartItem={this.props._handleAddCartItem}
        />
      );
    } else if (this.props.location.pathname.includes("/item-list/")) {
      const currItemId = this.props.location.pathname[
        this.props.location.pathname.length - 1
      ];
      console.log("currItemId", currItemId);
      content = (
        <ItemDetail
          globalState={this.props.globalState}
          currItemId={currItemId}
          onAddItem={this.props._handleAddNewItem}
          onResetItemQt={this.props._handleResetQt}
          onIncrementItem={this.props._handleIncrementItem}
          onDecrementItem={this.props._handleDecrementItem}
          onAddCartItem={this.props._handleAddCartItem}
        />
      );
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
    _handleAddNewItem: item => dispatch({ type: "ADD_ITEM", itemId: item.id }),
    _handleDeleteItem: item => dispatch({ type: "DEL_ITEM", itemId: item.id }),
    _handleResetQt: item => dispatch({ type: "RESET_ITEM_QT" }),
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
