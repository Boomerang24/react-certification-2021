import React from "react";
import styled from "styled-components";
import { Grid } from "./Grid";

const StyledTitle = styled.h1`
  color: ${(props) => props.theme.fontcolor};
`;

function Favoritos() {
  return (
    <>
      <StyledTitle>Welcome to "Favoritos"</StyledTitle>
      <Grid />
    </>
  );
}

export default Favoritos;
