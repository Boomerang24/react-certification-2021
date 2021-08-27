import styled from "styled-components";

export const StyledGrid = styled.div`
  display: flex;
  height: 100vh;
  flex-wrap: wrap;
  justify-content: center;
  background-color: ${(props) => props.theme.body};
`;
