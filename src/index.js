import React from "react";
import ReactDOM from "react-dom";
import { persistGate } from "redux-persist/integration/react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import "./index.css";
import App from "./App";
import { persistor, store } from "./redux/store/store";

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <persistGate persistor={persistor}>
        <App />
      </persistGate>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
