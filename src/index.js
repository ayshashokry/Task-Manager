import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

/* Redux Connections */
import rootReducer from "./redux/reducers/rootReducer";
import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import { composeWithDevTools } from "redux-devtools-extension/developmentOnly";
import promiseMiddleware from "redux-promise";

/* LocalStorage Functions */
import { loadState } from "./redux/LocalStorage";
import { saveState } from "./redux/LocalStorage";

const persistedState = loadState();
const middleware = [thunk];
const store = createStore(
  rootReducer,
  persistedState,
  composeWithDevTools(applyMiddleware(promiseMiddleware, ...middleware))
);

store.subscribe(() => {
  saveState({
    List: store.getState().List
  });
});
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
