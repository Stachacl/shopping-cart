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
  if (action.type === "INCREASE") {
    let tempCart = state.cart.map((cartItem) => {
      if (cartItem.id === action.payload) {
        return { ...cartItem, amount: cartItem.amount + 1 };
      }
      return cartItem;
    });
    return { ...state, cart: tempCart };
  }
  if (action.type === "DECREASE") {
    let tempCart = state.cart
      .map((cartItem) => {
        if (cartItem.id === action.payload) {
          return { ...cartItem, amount: cartItem.amount - 1 };
        }
        return cartItem;
      })
      .filter((cartItem) => cartItem.amount !== 0);
    return { ...state, cart: tempCart };
  }
  if (action.type === "GET_TOTALS") {
    //setting a call back function:
    let { total, amount } = state.cart.reduce(
      (cartTotal, cartItem) => {
        const { price, amount } = cartItem;

        const itemTotal = price * amount;
        cartTotal.total += itemTotal;

        cartTotal.amount += amount; //means that whatewer the value from each item add the amount property value
        return cartTotal;
      },
      {
        total: 0,
        amount: 0,
      }
    );
    //Limit the amount of float numbers (after coma) in the total value:
    total = parseFloat(total.toFixed(2));

    return { ...state, total, amount };
  }
  return state;
};

//as an argument it is looking at the state  and action

export default reducer;
