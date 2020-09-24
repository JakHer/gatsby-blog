import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`

html {
 box-sizing: border-box;
}

*, *:before, *:after {
 box-sizing: inherit;
}

* {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

body {
    margin: 0;
    padding: 120px 65px 0;
    font-family: "Montserrat", sans-serif;

    @media (max-width: 800px){
        padding: 120px 10px 0;
    }
}

button {
    padding: 0;
    cursor: pointer;
    font-family: 'Montserrat';
}

p {
    font-size: 16px;
}

ul {
    padding: 0;
    margin: 0;
}
`

export default GlobalStyle
