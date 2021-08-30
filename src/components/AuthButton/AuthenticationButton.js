import React, { useContext } from "react";
import LogoutButton from "./LogoutButton";

import { useAuth0 } from "@auth0/auth0-react";
import LogonBtn from "./LogonBtn";
import { VideosContext } from "../providers/VideosProvider";

const AuthenticationButton = () => {
  const { isAuthenticated } = useAuth0();

  const {
    globalState: { credentials },
  } = useContext(VideosContext);

  // TODO: Logon Button actualize despues de cambiar su booleano

  // Se utiliza operador ternario
  // Devuelve el boton para acceder/salir de la sesion
  // return isAuthenticated ? <LogoutButton /> : <LoginButton />;
  return isAuthenticated || credentials.authMock ? (
    <LogoutButton />
  ) : (
    <LogonBtn />
  );
};

export default AuthenticationButton;
