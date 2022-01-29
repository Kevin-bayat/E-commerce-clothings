import { createSelector } from "reselect";

const cartSelect = (state) => state.cart;

export const cartSelectItems = createSelector(
  [cartSelect],
  (cart) => cart.cartItem
);

export const selectHidden = createSelector([cartSelect], (cart) => cart.hidden);

export const cartSelectItemsCount = createSelector(
  [cartSelectItems],
  (cartItem) =>
    cartItem?.reduce((acc, cartItem) => {
      return acc + cartItem?.quantity;
    }, 0)
);

export const selectCartItemsTotal = createSelector(
  [cartSelectItems],
  (cartItems) =>
    cartItems.reduce((acc, cartItems) => {
      return acc + cartItems.quantity * cartItems.price;
    }, 0)
);
