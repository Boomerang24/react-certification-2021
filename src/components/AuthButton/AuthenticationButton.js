import React from "react";

import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";

import { useAuth0 } from "@auth0/auth0-react";

const AuthenticationButton = () => {
  const { isAuthenticated } = useAuth0();

  // Se utiliza operador ternario
  // Devuelve el boton para acceder/salir de la sesion
  return isAuthenticated ? <LogoutButton /> : <LoginButton />;
};

export default AuthenticationButton;
