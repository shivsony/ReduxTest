import React from "react";
import { Switch, Route } from "react-router-dom";

const Home = () => (<div>home</div>);
const Initial = () => (<div>Initial</div>);
const Main = () => (
  <Switch>
    <Route exact path="/" component={Initial} />
    <Route path="/home" component={Home} />
  </Switch>
);

export default Main;
