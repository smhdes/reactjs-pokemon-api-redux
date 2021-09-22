import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import Details from "./components/Details/Details";
import CaughtList from "./components/CaughtList/CaughtList";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import { store } from "./redux/store/index";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./index.css";
import App from "./App";
import "./i18nextInit";

ReactDOM.render(
  <Provider store={store}>
    <Suspense fallback="...">
      <Router>
        <Switch>
          <Route exact path="/">
            <App />
          </Route>

          <Route path="/details/:id">
            <Details />
          </Route>
          <Route path="/caughts">
            <CaughtList />
          </Route>
          {/* 
      <Route>
        <NoMatch />
      </Route> */}
        </Switch>
      </Router>
    </Suspense>
    ,
    {/* <Router>
      <Route exact path="/" component={App} />
      <Route path="/details/:id" component={Details} />
    </Router> */}
  </Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
