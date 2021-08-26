import React from "react";
import { Route, Redirect } from "react-router-dom";

import { useAuth0 } from "@auth0/auth0-react";

function PrivateRoutes({ component: Component, ...rest }) {
  const { isAuthenticated } = useAuth0();

  return (
    <Route {...rest}>
      {isAuthenticated ? <Component /> : <Redirect to="/" />}
    </Route>
  );
}

export default PrivateRoutes;
