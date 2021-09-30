import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";

import { useAuth0 } from "@auth0/auth0-react";
import { VideosContext } from "../providers/VideosProvider";

function PrivateRoutes({ component: Component, ...rest }) {
  const { isAuthenticated } = useAuth0();

  const {
    globalState: { credentials },
  } = useContext(VideosContext);

  return (
    <Route {...rest}>
      {isAuthenticated || credentials.authMock ? (
        <Component />
      ) : (
        <Redirect to="/" />
      )}
    </Route>
  );
}

export default PrivateRoutes;
