import * as actionTypes from "./actions";

const defaultState = {
  totalItems: 0,
  itemList: [{ id: 0, value: 1 }, { id: 1, value: 1 }],
  cartItemList: []
};

const reducer = (state = { ...defaultState }, action) => {
  console.log("action.itemId :", action.itemId);

  switch (action.type) {
    case actionTypes.ADD_ITEM:
      let newADDItemListArr = state.itemList.slice();
      let newArr = [];
      newArr = newADDItemListArr.concat({
        id: newADDItemListArr.length,
        value: 0
      });
      const addItemState = { ...state, itemList: newArr };
      console.log("newState :", addItemState);
      return addItemState;

    case actionTypes.DEL_ITEM:
      let newDeletedTotalItems = state.totalItems;
      let newDELItemListArr = state.itemList.slice();
      let listitemIndex = newDELItemListArr.findIndex(
        obj => obj.id == action.itemId // Both have different type but same value hence, obj.id == action.itemId
      );
      console.log("listitemIndex :", listitemIndex);
      newDELItemListArr.splice(listitemIndex, 1);

      let newDELCartItemList = state.cartItemList.slice();

      let cartitemIndex = newDELCartItemList.findIndex(
        obj => obj.id == action.itemId // Both have different type but same value hence, obj.id == action.itemId
      );
      console.log("cartitemIndex ; ", cartitemIndex);
      if (cartitemIndex !== -1) {
        newDeletedTotalItems =
          newDeletedTotalItems - newDELCartItemList[cartitemIndex].value; //update total cart item count
        newDELCartItemList.splice(cartitemIndex, 1); //update total cart item deletes
      }

      const deleteItemState = {
        ...state,
        totalItems: newDeletedTotalItems,
        itemList: newDELItemListArr,
        cartItemList: newDELCartItemList
      };
      console.log("newState :", deleteItemState);
      return deleteItemState;

    case actionTypes.RESET_ITEM_QT:
      let newRESETItemListArr = state.itemList.slice();
      newRESETItemListArr.map(item => {
        item.value = 0;
      });
      const resetState = { ...state, itemList: newRESETItemListArr };
      console.log("newState :", resetState);
      return resetState;

    case actionTypes.INC_ITEM:
      let newINCItemListArr = state.itemList.slice();
      newINCItemListArr.map(item => {
        if (item.id === action.itemId) {
          item.value = item.value + 1;
        }
      });
      const incrementedState = { ...state, itemList: newINCItemListArr };
      console.log("newState :", incrementedState);
      return incrementedState;

    case actionTypes.DEC_ITEM:
      let newDECItemListArr = state.itemList.slice();
      newDECItemListArr.map(item => {
        if (item.id === action.itemId && item.value > 0) {
          item.value = item.value - 1;
        }
      });
      const decrementedState = { ...state, itemList: newDECItemListArr };
      console.log("newState :", decrementedState);
      return decrementedState;

    case actionTypes.ADD_CART_ITEM:
      let newADDCartItemListArr = state.itemList.slice();
      let totalItemCount = newADDCartItemListArr.filter(
        item => item.id === action.itemId
      );

      let newTotalItems = state.totalItems + totalItemCount[0].value;

      let newCartItemList = state.cartItemList.slice();

      let existingItemIndex = newCartItemList.findIndex(
        obj => obj.id == action.itemId // Both have different type but same value hence, obj.id == action.itemId
      );

      console.log("existingItemIndex ", existingItemIndex);

      if (existingItemIndex !== -1) {
        if (action.itemCount > 0) {
          console.log("Inside existing array:before", existingItemIndex);

          newCartItemList[existingItemIndex].value =
            newCartItemList[existingItemIndex].value + action.itemCount;

          console.log("Inside existing array:after", newCartItemList);
        }
      } else {
        console.log("Inside Inexisting array:before", action.itemCount);
        if (action.itemCount > 0) {
          newCartItemList.push({ id: action.itemId, value: action.itemCount });

          console.log("Inside Inexisting array:after", newCartItemList);
        }
      }
      const addCartItemState = {
        ...state,
        totalItems: newTotalItems,
        cartItemList: newCartItemList
      };

      console.log("newState :", addCartItemState);
      return addCartItemState;

    default:
      break;
  }

  return state;
};

export default reducer;
