import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import Details from "./components/Details/Details";
import CaughtList from "./components/CaughtList/CaughtList";
import Loader from "./components/Loader/Loader";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import { store } from "./redux/store/index";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./index.css";
import App from "./App";
import "./i18nextInit";

ReactDOM.render(
  <Provider store={store}>
    <Suspense fallback={<Loader />}>
      <Router basename="/">
        <Route exact path="/" component={App} />
        <Route path="/details/:id" component={Details} />
        <Route path="/caughts" component={CaughtList} />
      </Router>
    </Suspense>
  </Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
