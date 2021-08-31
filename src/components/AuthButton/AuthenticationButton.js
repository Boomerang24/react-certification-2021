import React, { useContext } from "react";
import LogoutButton from "./LogoutButton";
import LogonBtn from "./LogonBtn";
import { VideosContext } from "../providers/VideosProvider";

const AuthenticationButton = () => {
  const { loggedIn } = useContext(VideosContext);

  return loggedIn ? <LogoutButton /> : <LogonBtn />;
};

export default AuthenticationButton;
