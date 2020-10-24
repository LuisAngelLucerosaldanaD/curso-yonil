import React from "react";
import { Route, Redirect } from "react-router-dom";

const isAuth = () => {
  const suma = 2 + 2;
  if (suma === 4) {
    return true;
  }
  return false;
};

const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        isAuth() ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/",
              state: { message: "User not Auth" },
            }}
          />
        )
      }
    />
  );
};

export default PrivateRoute;
