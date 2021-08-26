import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    body{
        //TODO: Fix full body layout
        background-color: ${(props) => props.theme.body.backgroundColor};
        color: ${(props) => props.theme.color}
    }
`;
