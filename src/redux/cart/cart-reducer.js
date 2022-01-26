import "../cart/cart.type";
import toggleCartHidden from "./cart.action";
import { cartType } from "./cart.type";

const INITIAL_STATE = {
  hidden: true,
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case cartType.TOGGLE_CART_ICON:
      return {
        ...state,
        hidden: !state.hidden,
      };
    default:
      return state;
  }
};
export default cartReducer;
