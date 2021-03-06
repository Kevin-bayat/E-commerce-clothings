import React from "react";
import "./checkout.scss";
import { createStructuredSelector } from "reselect";
import {
  cartSelectItems,
  selectCartItemsTotal,
} from "../../redux/cart/cart-selector";
import { connect } from "react-redux";
import CheckoutItem from "../../components/checkout-item/checkout-item";
import StripeCheckoutButton from "../../components/stripe-checkout-button/stripe-checkout-button";

const Checkout = ({ cartItems, total }) => {
  return (
    <div className="checkout-page">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>
      <div>
        {cartItems.map((cartItem) => (
          <CheckoutItem key={cartItem.id} cartItem={cartItem} />
        ))}
      </div>
      <span className="total">TOTAL:${total}</span>

      <div className="warning-message">
        *Please pay for 4242 4242 4242 4242 date:02/22 cvv:454*
        <StripeCheckoutButton price={total} />
      </div>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: cartSelectItems,
  total: selectCartItemsTotal,
});
export default connect(mapStateToProps)(Checkout);
