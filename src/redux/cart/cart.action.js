import { cartType } from "./cart.type";
export const toggleCartHidden = () => ({
  type: cartType.TOGGLE_CART_ICON,
});

export const addItem = (item) => ({
  type: cartType.ADD_CART,
  payload: item,
});

export const clearItem = (item) => ({
  type: cartType.CLEAR_CART,
  payload: item,
});
