import {createGlobalStyle} from "styled-components";

export const GlobalStyle = createGlobalStyle`
body{
  margin:0;
  padding:0;
  box-sizing: border-box;
  background-color: #222224;
}

html {
  font-size: 16px;
}
@media screen and (min-width: 320px) {
  html {
    font-size: calc(16px + 6 * ((100vw - 320px) / 680));
  }
}
@media screen and (min-width: 1000px) {
  html {
    font-size: 22px;
  }
}
`