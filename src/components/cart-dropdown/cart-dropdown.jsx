import React from "react";

import "./cart-dropdown.scss";
import CustomButton from "../custom-button/custom-button";
import { connect } from "react-redux";
import CartItem from "../cart-item/cart-item";

const CartDropdown = ({ cartItem }) => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItem?.map((cartItem) => (
          <CartItem id={cartItem?.id} item={cartItem} />
        ))}
      </div>
      <CustomButton>Go To Checkout</CustomButton>
    </div>
  );
};

const mapStateToProps = ({ cart: { cartItem } }) => ({
  cartItem,
});
export default connect(mapStateToProps)(CartDropdown);
