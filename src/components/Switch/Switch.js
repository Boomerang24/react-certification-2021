import React, { useContext, useState } from "react";
import Switch from "@material-ui/core/Switch";
import { VideosContext } from "../providers/VideosProvider";
import { types } from "../../types/types";
import { lightTheme, darkTheme } from "../../ThemeStyles";
import { BsSun } from "react-icons/bs";
import { FaMoon } from "react-icons/fa";

export default function Switches() {
  const { globalState, dispatch } = useContext(VideosContext);

  const initialTheme = globalState.theme.id === "darkTheme";
  const [switchValue, setSwitchValue] = useState(initialTheme);

  const handleSwitchChange = (e) => {
    setSwitchValue(e.target.checked);
    dispatch({
      type: types.theme,
      payload: e.target.checked ? darkTheme : lightTheme,
    });
    dispatch({ type: types.saveThemeStorage });
  };

  return (
    <Switch
      onClick={handleSwitchChange}
      color="default"
      checked={switchValue}
      icon={<BsSun />}
      checkedIcon={<FaMoon />}
      className="darkmode-switch"
      name="lightTheme"
      data-testid="dark-mode-switch"
    />
  );
}
