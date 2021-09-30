import React, { useContext } from "react";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import { VideosContext } from "../providers/VideosProvider";

const StyledContainer = createGlobalStyle`
    body{
        background-color: ${(props) => props.theme.body};
    }
`;

const MainContainer = ({ children }) => {
  const {
    globalState: { theme },
  } = useContext(VideosContext);

  return (
    <ThemeProvider theme={theme}>
      <StyledContainer />
      {children}
    </ThemeProvider>
  );
};

export default MainContainer;
