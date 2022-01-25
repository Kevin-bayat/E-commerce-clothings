import React from "react";
// import { connect } from "react-redux";
import "./Header.scss";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import { Link } from "react-router-dom";
import { auth } from "../../firebase/firebase.util";

const Header = ({ currentUser }) => {
  console.log({ currentUser });
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
          <div className="option" onClick={() => auth.signOut()}>
            Sign Out
          </div>
        ) : (
          <Link className="option" to="/contacts">
            Sign In
          </Link>
        )}
      </div>
    </div>
  );
};
// const mapStateToProps = (state) => ({
//   currentUser: state.user.currentUser,
// });
// export default connect(mapStateToProps)(Header);
export default Header;
