import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    body{
        height: 100vh;
        background-color: ${(props) => props.theme.body.backgroundColor};
        color: ${(props) => props.theme.color}
    }
`;
