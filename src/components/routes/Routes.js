import { useAuth0 } from "@auth0/auth0-react";
import { LinearProgress } from "@material-ui/core";
import React from "react";
import { Redirect } from "react-router";
import { Switch, Route } from "react-router-dom";
import Favoritos from "../Grid/Favoritos";
import { Grid } from "../Grid/Grid";
import { PlayerGrid } from "../VideoPlayerGrid/PlayerGrid";
import PrivateRoutes from "./PrivateRoutes";

export const Routes = () => {
  const { isLoading } = useAuth0();

  if (isLoading) {
    return <LinearProgress color="secondary" />;
  }

  return (
    <Switch>
      <Route path="/" exact component={Grid} />
      <Route path="/video/:videoID" component={PlayerGrid} />
      <PrivateRoutes path="/favorite/" exact component={Favoritos} />
      <PrivateRoutes path="/favorite/:videoID" component={PlayerGrid} />
      <Redirect to="/" />
    </Switch>
  );
};
