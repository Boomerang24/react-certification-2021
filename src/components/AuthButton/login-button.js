import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { StyledButton } from "../NavBar/NavBar.styles";
import { MdFace } from "react-icons/md";

const LoginButton = () => {
  // loginWithRedirect funciona para triggerear el proceso de auth.
  const { loginWithPopup } = useAuth0();
  return (
    <StyledButton
      className="btn btn-primary btn-block"
      data-testid="logon-button"
      onClick={() => loginWithPopup()}
    >
      <MdFace />
    </StyledButton>
  );
};

export default LoginButton;
