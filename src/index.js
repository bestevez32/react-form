import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { combineReducers, createStore } from "redux";
import { Provider } from "react-redux";
import usersReducer from "./components/reducers/usersReducer";

const allReducers = combineReducers({
  users: usersReducer
});

const store = createStore(
  allReducers,
  {
    users: []
  },
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

serviceWorker.unregister();
