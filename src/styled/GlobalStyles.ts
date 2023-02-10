import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body,html {
    margin: 0;
    padding: 0;
    overflow-x: hidden;
   background-color: #0f171a;
    font-family: 'Roboto Mono', monospace;

  }

  ::-webkit-scrollbar {
  display: none;
}
`;

export default GlobalStyle;
