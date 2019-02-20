import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "../components/Home/Home";
import Dashboard from './Dashboard/Dashboard';

const Logout = () => (<div>Logout</div>);
const NewAutomation = () => (<div>New Automation</div>);
const Main = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/dashboard" component={Dashboard} />
    <Route exact path="/new-automation" component={NewAutomation} />
    <Route exact path="/logout" component={Logout} />
  </Switch>
);

export default Main;
