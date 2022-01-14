import React from "react";
import "./App.css";
import HomePage from "./pages/HomePage/HomePage";
import ShopPage from "./pages/Shop/ShopPage";
import { Route, Switch } from "react-router-dom";
import Header from "./components/header/Header";
import SignInSignUp from "./components/sign-in-sign-up/sign-in-sign-up";

const App = () => {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route path="/contacts" component={SignInSignUp} />
      </Switch>
    </div>
  );
};

export default App;
