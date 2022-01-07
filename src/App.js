import React from "react";
import "./App.css";
import HomePage from "./pages/HomePage/HomePage";
import { Link, Route, Switch } from "react-router-dom";

const HatePages = (props) => {
  console.log({ props });

  return (
    <div>
      <button onClick={() => props.history.push("/hats/ggg")}>hats</button>
    </div>
  );
};
const Hasan = (props) => {
  console.log({ props });
  return <div>HASAN</div>;
};
const App = () => {
  return (
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/hats" component={HatePages} />
      <Route path="/hats/ggg" component={Hasan} />
    </Switch>
  );
};

export default App;
