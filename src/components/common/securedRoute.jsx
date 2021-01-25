import React from "react";
import { Redirect, Route } from "react-router-dom";
import isLogged from "../../utilities/isAuntificated";

const SecuredRoute = ({ children, ...rest }) => {
  return (
    <Route
      {...rest}
      render={() => {
        return isLogged() ? children : <Redirect to="/login" />;
      }}
    />
  );
};

export default SecuredRoute;
