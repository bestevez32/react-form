import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { combineReducers, createStore } from "redux";
import { Provider } from "react-redux";
import userReducer from "./components/reducers/userReducer";
import usersReducer from "./components/reducers/usersReducer";

const allReducers = combineReducers({
  user: userReducer,
  users: usersReducer
});

const store = createStore(
  allReducers,
  {
    user: "Michael",
    users: [{ firstName: "", lastName: "", hobbies: "" }]
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
