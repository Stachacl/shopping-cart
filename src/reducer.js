const reducer = (state, action) => {
  //take all the values from the current state and only change cart value to the empty array:
  if (action.type === "CLEAR_CART") {
    return { ...state, cart: [] };
  }
  if (action.type === "REMOVE") {
    return {
      ...state,
      cart: state.cart.filter((cartItem) => cartItem.id !== action.payload),
    };
  }
  return state;
};

//as an argument it is looking at the state  and action

export default reducer;