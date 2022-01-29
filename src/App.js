import React from "react";
import "./App.css";
import HomePage from "./pages/HomePage/HomePage";
import ShopPage from "./pages/Shop/ShopPage";
import { Route, Switch, Redirect } from "react-router-dom";
import Header from "./components/header/Header";
import SignInSignUp from "./components/sign-in-sign-up/sign-in-sign-up";
import { connect } from "react-redux";
import { setCurrentUser } from "./redux/user/user-action";
import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "./redux/user/user-selector";
import Checkout from "./pages/checkout/Checkout";
// import { auth, createUserProfileInDocument } from "./firebase/firebase.util";

class App extends React.Component {
  unsubscribeFromAuth = null;
  componentDidMount() {
    // this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
    //   if (userAuth) {
    //     const useRef = await createUserProfileInDocument(userAuth);
    //     useRef.onSnapshot((snapshot) => {
    //       this.setState(
    //         {
    //           currentUser: {
    //             id: snapshot.id,
    //             ...snapshot.data(),
    //           },
    //         },
    //         () => console.log({ state: this.state })
    //       );
    //     });
    //   } else {
    //     this.setState({ currentUser: null });
    //   }
    // });
    const { setCurrentUser } = this.props;
    setCurrentUser("keyvan bayat");
  }
  // componentWillUnmount() {
  //   this.unsubscribeFromAuth();
  // }

  render() {
    console.log(this.props, "dddd");
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route exact path="/checkout" component={Checkout} />
          <Route
            exact
            path="/contacts"
            render={() =>
              this.props.currentUser ? <Redirect to="/" /> : <SignInSignUp />
            }
          />
        </Switch>
      </div>
    );
  }
}
//
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
