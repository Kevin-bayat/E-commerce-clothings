import React from "react";
import { ReactComponent as ShoppingBag } from "../../assets/shopping-bag.svg";

import "./cart-icon.scss";
import toggleCartHidden from "../../redux/cart/cart.action";
import { connect } from "react-redux";

const CartIcon = ({ toggleCartHidden }) => {
  console.log({ toggleCartHidden });
  return (
    <div className="cart-icon" onClick={toggleCartHidden}>
      <ShoppingBag className="shopping-icon" />
      <span className="item-count">0</span>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});

export default connect(null, mapDispatchToProps)(CartIcon);
