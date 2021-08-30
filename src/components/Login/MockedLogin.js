import { Button, Grid, TextField } from "@material-ui/core";
import React, { useContext } from "react";
import ReactDom from "react-dom";
import { types } from "../../types/types";
import useForm from "../hooks/useForm";
import { VideosContext } from "../providers/VideosProvider";
import loginApi from "./loginApi";
import {
  StyledModal,
  StyledOverLay,
  textFieldFormat,
} from "./MockedLogin.styles";

const MockedLogin = ({ open, children, onClose }) => {
  const [logonInfo, setLogonInfo] = useForm({
    username: "",
    password: "",
    authMock: "false",
  });

  const { username, password } = logonInfo;

  const { dispatch } = useContext(VideosContext);

  const handleLoginApi = (e) => {
    e.preventDefault();
    loginApi(username, password)
      .then((userinfo) => {
        dispatch({ type: types.saveUser, payload: userinfo });
        onClose();
        //TODO: Check if this could be changed
        window.location.reload(true);
      })
      .catch((error) => console.error(error));
  };

  if (!open) return null;

  return ReactDom.createPortal(
    <>
      <StyledOverLay />
      <StyledModal>
        <form>
          <Grid
            container
            direction="column"
            justifyContent="center"
            spacing={2}
            className="login-form"
          >
            <h3>Welcome back!</h3>
            <TextField
              dense="true"
              type="username"
              name="username"
              placeholder="Username"
              fullWidth
              variant="outlined"
              value={username}
              // inputProps={{ className: classes.input }}
              style={textFieldFormat}
              menulistprops={{
                disablePadding: true,
              }}
              onChange={setLogonInfo}
              required
              autoFocus
            />
            <TextField
              type="password"
              name="password"
              placeholder="Password"
              fullWidth
              variant="outlined"
              value={password}
              style={textFieldFormat}
              menulistprops={{
                disablePadding: true,
              }}
              onChange={setLogonInfo}
              required
              autoFocus
            />
            <Button
              variant="contained"
              color="primary"
              type="submit"
              className="button-block"
              style={textFieldFormat}
              menulistprops={{
                disablePadding: true,
              }}
              onClick={handleLoginApi}
            >
              Logon
            </Button>
            <Button
              variant="contained"
              color="primary"
              type="submit"
              className="button-block"
              onClick={onClose}
            >
              Cancel
            </Button>
          </Grid>
        </form>
        {children}
      </StyledModal>
    </>,
    document.getElementById("portal-root")
  );
};

export default MockedLogin;
