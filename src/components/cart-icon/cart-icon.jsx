import React from "react";
import { ReactComponent as ShoppingBag } from "../../assets/shopping-bag.svg";

import "./cart-icon.scss";
import { toggleCartHidden } from "../../redux/cart/cart.action";
import { connect } from "react-redux";
import { cartSelectItemsCount } from "../../redux/cart/cart-selector";

const CartIcon = ({ toggleCartHidden, itemCount }) => {
  console.log({ toggleCartHidden });
  return (
    <div className="cart-icon" onClick={toggleCartHidden}>
      <ShoppingBag className="shopping-icon" />
      <span className="item-count">{itemCount}</span>
    </div>
  );
};

const mapStateToProps = (state) => ({
  itemCount: cartSelectItemsCount(state),
});

const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
