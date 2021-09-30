import { Button, Grid, TextField } from "@material-ui/core";
import React, { useContext, useState } from "react";
import ReactDom from "react-dom";
import { types } from "../../types/types";
import useForm from "../hooks/useForm";
import { VideosContext } from "../providers/VideosProvider";
import loginApi from "./loginApi";
import {
  btnFormat,
  StyledModal,
  StyledOverLay,
  textFieldFormat,
} from "./MockedLogin.styles";

const MockedLogin = ({ open, children, onClose }) => {
  const [logonInfo, setLogonInfo, reset] = useForm({
    username: "",
    password: "",
    authMock: "false",
  });

  const { username, password } = logonInfo;

  const { dispatch } = useContext(VideosContext);

  const [failedLogon, setFailedLogon] = useState("");

  const handleLoginApi = (e) => {
    e.preventDefault();
    loginApi(username, password)
      .then((userinfo) => {
        dispatch({ type: types.saveUser, payload: userinfo });
        onClose();
        window.location.reload();
      })
      .catch((error) => {
        setFailedLogon(error);
        reset();
      });
  };

  const handleCancel = () => {
    onClose();
    setFailedLogon("");
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
              style={btnFormat}
              menulistprops={{
                disablePadding: true,
              }}
              onClick={handleLoginApi}
            >
              Login
            </Button>
            <Button
              variant="contained"
              color="primary"
              type="submit"
              className="button-block"
              onClick={handleCancel}
              style={btnFormat}
            >
              Cancel
            </Button>
            <p>{failedLogon}</p>
          </Grid>
        </form>
        {children}
      </StyledModal>
    </>,
    document.getElementById("portal-root")
  );
};

export default MockedLogin;
