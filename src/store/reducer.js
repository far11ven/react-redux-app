import * as actionTypes from "./actions";

const defaultState = {
  totalItems: 0,
  itemList: [{ id: 0, value: 0 }, { id: 1, value: 10 }],
  cartItemList: []
};

const reducer = (state = { ...defaultState }, action) => {
  console.log("action.itemId :", action.itemId);
  switch (action.type) {
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
        if (item.id === action.itemId) {
          item.value = item.value - 1;
        }
      });
      const decrementedState = { ...state, itemList: newDECItemListArr };
      console.log("newState :", decrementedState);
      return decrementedState;

    case actionTypes.ADD_CART_ITEM:
      let newADDItemListArr = state.itemList.slice();
      let totalItemCount = newADDItemListArr.filter(
        item => item.id === action.itemId
      );

      let newTotalItems = state.totalItems + totalItemCount[0].value;

      let newCartItemList = state.cartItemList.slice();

      let existingItem = newCartItemList.filter(
        item => item.id === action.itemId
      );

      if (existingItem.length > 0) {
        if (action.itemCount > 0) {
          console.log("Inside existing array:before", existingItem[0].id);
          newCartItemList.map(item => {
            if (item.id === existingItem[0].id) {
              item.value = action.itemCount;
            }
          });
          console.log("Inside existing array:after", newCartItemList);
        }
      } else {
        console.log("Inside Inexisting array:before", action.itemCount);
        if (action.itemCount > 0) {
          newCartItemList.push({ id: action.itemId, value: action.itemCount });

          console.log("Inside Inexisting array:after", newCartItemList);
        }
      }
      const addItemState = {
        ...state,
        totalItems: newTotalItems,
        cartItemList: newCartItemList
      };

      console.log("newState :", addItemState);
      return addItemState;
  }

  return state;
};

export default reducer;
