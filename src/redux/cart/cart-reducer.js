import "../cart/cart.type";
import { cartType } from "./cart.type";
import { cartAddToCart, removeItemFromCart } from "./cart.utils";

const INITIAL_STATE = {
  hidden: true,
  cartItem: [],
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case cartType.TOGGLE_CART_ICON:
      return {
        ...state,
        hidden: !state.hidden,
      };
    case cartType.ADD_CART:
      return {
        ...state,
        cartItem: cartAddToCart(state.cartItem, action.payload),
      };

    case cartType.REMOVE_ITEM:
      return {
        ...state,
        cartItem: removeItemFromCart(state.cartItem, action.payload),
      };

    case cartType.CLEAR_CART:
      return {
        ...state,
        cartItem: state.cartItem.filter(
          (cartItem) => cartItem.id !== action.payload.id
        ),
      };
    default:
      return state;
  }
};
export default cartReducer;
