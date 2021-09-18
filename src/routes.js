import React from "react";
import { Route, Switch } from "react-router-dom";
import App from "./components/App";
import Home from "./components/pages/Home";
import Auth from "./components/pages/Auth";
import Join from "./components/Join";
import Host from "./components/Host";

const routes = (
  <App>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/authenticate" component={Auth} />
      <Route path="/join" component={Join} />
      <Route path="/host" component={Host} />
    </Switch>
  </App>
);

export { routes };
