import React from "react";
import { Route, Switch } from "react-router-dom";
import App from "./components/App";
import Home from "./components/pages/Home";
import Auth from "./components/pages/Auth";

const routes = (
  <App>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/authenticate" component={Auth} />
    </Switch>
  </App>
);

export { routes };
