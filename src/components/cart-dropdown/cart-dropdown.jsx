import React from "react";
import { withRouter } from "react-router-dom";
import "./cart-dropdown.scss";
import { connect } from "react-redux";
import CartItem from "../cart-item/cart-item";
import { cartSelectItems } from "../../redux/cart/cart-selector";
import { toggleCartHidden } from "../../redux/cart/cart.action";
import { CustomButtonContainer } from "../custom-button/custom-button.styled";

const CartDropdown = ({ cartItem, history, dispatch }) => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItem?.length ? (
          cartItem?.map((cartItem) => (
            <CartItem id={cartItem?.id} item={cartItem} />
          ))
        ) : (
          <span className="empty-message">Your Cart Is Empty</span>
        )}
      </div>
      <CustomButtonContainer
        onClick={() => {
          history.push("/checkout");
          dispatch(toggleCartHidden());
        }}
      >
        Go To Checkout
      </CustomButtonContainer>
    </div>
  );
};

const mapStateToProps = (state) => ({
  cartItem: cartSelectItems(state),
});
export default withRouter(connect(mapStateToProps)(CartDropdown));
