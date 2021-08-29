import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import { Redirect } from "react-router";
import { Switch, Route } from "react-router-dom";
import { Grid } from "../Grid/Grid";
import { PlayerGrid } from "../VideoPlayerGrid/PlayerGrid";
import PrivateRoutes from "./PrivateRoutes";

export const Routes = () => {
  const { isLoading } = useAuth0();

  if (isLoading) {
    return (
      <img
        alt="Loading"
        src="https://media1.giphy.com/media/3oEjI6SIIHBdRxXI40/200w.gif?cid=82a1493bp5zn7kjyh1c7r3ugxuw6xgy6g8prlm3y50bfdnp5&rid=200w.gif&ct=g"
      ></img>
    );
  }

  return (
    <Switch>
      <Route path="/" exact component={Grid} />
      <Route path="/video/:videoID" component={PlayerGrid} />
      <PrivateRoutes path="/favorite/" exact component={Grid} />
      <PrivateRoutes path="/favorite/:videoID" component={PlayerGrid} />
      <Redirect to="/" />
    </Switch>
  );
};
