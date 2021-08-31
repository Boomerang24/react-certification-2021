import React, { useContext } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { AiOutlineLogout } from "react-icons/ai";
import { StyledButton } from "../NavBar/NavBar.styles";
import { VideosContext } from "../providers/VideosProvider";
import { types } from "../../types/types";

const LogoutButton = () => {
  const { logout } = useAuth0();
  const { dispatch } = useContext(VideosContext);

  return (
    <StyledButton
      className="btn btn-danger btn-block"
      data-testid="logout-button"
      onClick={() => {
        logout({
          // cierra la sesion y regresa a la pagina principal
          returnTo: window.location.origin,
        });
        dispatch({
          type: types.saveUser,
          payload: { username: "", password: "", authMock: false },
        });
      }}
    >
      <AiOutlineLogout />
    </StyledButton>
  );
};

export default LogoutButton;
