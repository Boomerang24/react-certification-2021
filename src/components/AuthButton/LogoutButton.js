import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { AiOutlineLogout } from "react-icons/ai";
import { StyledButton } from "../NavBar/NavBar.styles";

const LogoutButton = () => {
  const { logout } = useAuth0();
  return (
    <StyledButton
      className="btn btn-danger btn-block"
      data-testid="logout-button"
      onClick={() =>
        logout({
          // cierra la sesion y regresa a la pagina principal
          returnTo: window.location.origin,
        })
      }
    >
      <AiOutlineLogout />
    </StyledButton>
  );
};

export default LogoutButton;
