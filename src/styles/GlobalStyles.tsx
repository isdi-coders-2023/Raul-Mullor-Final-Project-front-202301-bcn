import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
:root {
  --main-color-button: #590004;
  --main-color-text: #fff;
  --secondary-color-button: #1C2938
  --secondary-color-text: #000;
  --third-color-text: #0D23AF;
  --main-font: "Spectral SC";
  --secondary-font: "Spectral";
}

*, ::after, ::before {
  box-sizing: border-box;
}

body {
  padding: 20px;
  background-color: #fff;
  font-family: var(--main-font);
  min-height: 100vh;
  
}

h1,h2{
  padding: 0;
  margin: 0;
}

ol, ul, li {
  list-style: none;
  margin: 0;
  padding: 0;
  text-decoration: none;
}

button{
  background-color: transparent;
  border: none;
  cursor: pointer;
  font-family: inherit;
}

a, :visited, :active{
text-decoration: none;
color: var(--third-color-text)
}

`;

export default GlobalStyles;
