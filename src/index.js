import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { Route, BrowserRouter as Router } from "react-router-dom";
import reducer from "./store/reducer";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import "bootstrap/dist/css/bootstrap.css";
import Main from "./container/main";
import ItemDetail from "./components/item-detail";

const store = createStore(reducer);

const rootElement = document.getElementById("root");
const appRouter = (
  <Router>
    <Route exact path="/" component={App} />
    <Route path="/cart" component={Main} />
    <Route path="/item-list" component={Main} />
  </Router>
);

ReactDOM.render(<Provider store={store}> {appRouter} </Provider>, rootElement);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
