import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import configureStore from "./store/configureStore";
import App from "./App";

const store = configureStore();

function renderApp() {
  render(
    <Provider store={store}>
      <App />
    </Provider>,
    root
  );
}

renderApp();

module.hot.accept();
