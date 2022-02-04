import React from "react";
import { ReactComponent as ShoppingBag } from "../../assets/shopping-bag.svg";

import "./cart-icon.scss";
import { connect } from "react-redux";
import { cartSelectItemsCount } from "../../redux/cart/cart-selector";
import { toggleCartHidden } from "../../redux/cart/cart.action";

const CartIcon = ({ itemCount, dispatch }) => {
  console.log({ dispatch });

  return (
    <div className="cart-icon" onClick={() => dispatch(toggleCartHidden())}>
      <ShoppingBag className="shopping-icon" />
      <span className="item-count">{itemCount}</span>
    </div>
  );
};

const mapStateToProps = (state) => ({
  itemCount: cartSelectItemsCount(state),
});

export default connect(mapStateToProps)(CartIcon);
