import React from "react";
import { Route, Switch } from "react-router-dom";
import App from "./components/App";
import Home from "./components/pages/Home";
import Auth from "./components/pages/Auth";
import Host from "./components/pages/Host";
import AllEvents from "./components/pages/AllEvents";
import Join from "./components/Join";

const routes = (
  <App>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/authenticate" component={Auth} />
      <Route path="/events" component={AllEvents} />
      <Route path="/host" component={Host} />
      <Route path="/join" component={Join} />
    </Switch>
  </App>
);

export { routes };
