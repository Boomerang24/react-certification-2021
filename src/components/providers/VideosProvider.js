import React, { createContext, useReducer, useState } from "react";
// import {data} from '../../mock/mockedUTube'
import { reducer } from "../../helpers/reducer";
import { lightTheme } from "../../ThemeStyles";
import { storage } from "./storage";

const favVideos = storage.get("favList") || [];
const theme = storage.get("theme") || lightTheme;
const credentials = storage.get("credentials") || {
  username: "",
  password: "",
  authMock: false,
};

export const VideosContext = createContext();

export function VideosProvider({ children }) {
  const [globalState, dispatch] = useReducer(reducer, {
    theme,
    favVideos,
    credentials,
  });

  const [busqueda, setBusqueda] = useState("Wizeline");

  return (
    <VideosContext.Provider
      value={{ busqueda, setBusqueda, globalState, dispatch }}
    >
      {children}
    </VideosContext.Provider>
  );
}
