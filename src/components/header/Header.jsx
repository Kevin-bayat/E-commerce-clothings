import React from "react";
import { connect } from "react-redux";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import CartIcon from "../cart-icon/cart-icon";
import CartDropdown from "../cart-dropdown/cart-dropdown";
import { selectCurrentUser } from "../../redux/user/user-selector";
import { selectHidden } from "../../redux/cart/cart-selector";
import { createStructuredSelector } from "reselect";
import {
  HeaderContainer,
  LogoContainer,
  OptionContainerLink,
  OptionsContainer,
} from "./Header.styled";
// import { auth } from "../../firebase/firebase.util";

const Header = ({ currentUser, hidden }) => {
  console.log({ currentUser, hidden });
  return (
    <HeaderContainer>
      <LogoContainer to="/">
        <Logo />
      </LogoContainer>
      <OptionsContainer>
        <OptionContainerLink to="/shop">Shop</OptionContainerLink>
        <OptionContainerLink to="/contacts">Contacts</OptionContainerLink>
        {currentUser ? (
          <OptionContainerLink
            as="div"
            onClick={() => console.log({ currentUser })}
          >
            {currentUser}
          </OptionContainerLink>
        ) : (
          <OptionContainerLink to="/contacts">Sign In</OptionContainerLink>
        )}
        <CartIcon />
      </OptionsContainer>
      {hidden ? null : <CartDropdown />}
    </HeaderContainer>
  );
};
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectHidden,
});
export default connect(mapStateToProps)(Header);
