import React, { useState } from "react";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { StyledButton } from "../NavBar/NavBar.styles";
import { MdFace } from "react-icons/md";
import { useAuth0 } from "@auth0/auth0-react";
import MockedLogin from "../Login/MockedLogin";

export default function LogonBtn() {
  const [anchorEl, setAnchorEl] = useState(null);

  const [openLogon, setOpenLogon] = useState(false);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const { loginWithPopup } = useAuth0();

  return (
    <div data-testid="login-button">
      <StyledButton
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        <MdFace />
      </StyledButton>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem
          id="Auth0"
          onClick={() => {
            handleClose();
            loginWithPopup();
          }}
        >
          Auth0
        </MenuItem>
        <MenuItem
          id="Wizeline"
          onClick={() => {
            handleClose();
            setOpenLogon(true);
          }}
        >
          Wizeline
        </MenuItem>
      </Menu>
      <MockedLogin
        open={openLogon}
        onClose={() => {
          setOpenLogon(false);
        }}
      />
    </div>
  );
}
