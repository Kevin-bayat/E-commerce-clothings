import React from "react";

import "./checkout-item.scss";
import { clearItem } from "../../redux/cart/cart.action";
import { connect } from "react-redux";

const CheckoutItem = ({ cartItem, removeItem }) => {
  const { name, quantity, price, imageUrl } = cartItem;
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt="" />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">{quantity}</span>
      <span className="price">{price}</span>
      <div className="remove-button" onClick={() => removeItem(cartItem)}>
        &#10005;
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  removeItem: (item) => dispatch(clearItem(item)),
});
export default connect(null, mapDispatchToProps)(CheckoutItem);
