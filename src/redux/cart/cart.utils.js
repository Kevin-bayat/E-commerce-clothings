export const cartAddToCart = (cartItems, cartItemsToAdd) => {
  const existingCart = cartItems?.find(
    (cartItem) => cartItem?.id === cartItemsToAdd?.id
  );
  if (existingCart) {
    return cartItems?.map((cartItem) =>
      cartItem.id === cartItemsToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : { ...cartItem }
    );
  }
  return [...cartItems, { ...cartItemsToAdd, quantity: 1 }];
};

export const removeItemFromCart = (cartItem, cartItemToRemove) => {
  const existingCart = cartItem.find(
    (cartItem) => cartItem?.id === cartItemToRemove?.id
  );

  if (existingCart?.quantity === 1) {
    return cartItem.filter((cartItem) => cartItem.id !== cartItemToRemove.id);
  }

  return cartItem.map((cartItem) =>
    cartItem.id === cartItemToRemove.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};
