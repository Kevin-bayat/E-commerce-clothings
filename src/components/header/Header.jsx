import React from "react";
import { connect } from "react-redux";
import "./Header.scss";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import { Link } from "react-router-dom";
import CartIcon from "../cart-icon/cart-icon";
import CartDropdown from "../cart-dropdown/cart-dropdown";
// import { auth } from "../../firebase/firebase.util";

const Header = ({ currentUser, hidden }) => {
  console.log({ currentUser, hidden });
  return (
    <div className="header">
      <Link to="/">
        <Logo className="logo-container" />
      </Link>
      <div className="options">
        <Link to="/shop" className="option">
          Shop
        </Link>
        <Link to="/contacts" className="option">
          Contacts
        </Link>
        {currentUser ? (
          <div className="option" onClick={() => console.log({ currentUser })}>
            {currentUser}
          </div>
        ) : (
          <Link className="option" to="/contacts">
            Sign In
          </Link>
        )}
        <CartIcon />
      </div>
      {hidden ? null : <CartDropdown />}
    </div>
  );
};
const mapStateToProps = ({ user: { currentUser }, cart: { hidden } }) => ({
  currentUser,
  hidden,
});
export default connect(mapStateToProps)(Header);
