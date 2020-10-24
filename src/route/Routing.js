import React from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import PrivateRoute from "../Auth/Guards/PrivateRoute";
import configRouting from "./ConfigRoute";
const Routing = () => {
  return (
    <Router>
      <Switch>
        {configRouting.map((route, index) => (
          <PrivateRoute key={index} path={route.path} exact={route.exact}>
            <route.page />
          </PrivateRoute>
        ))}
      </Switch>
    </Router>
  );
};

export default Routing;
