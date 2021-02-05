import { createGlobalStyle } from 'styled-components';


export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Kodchasan:400,700');
  * {
    box-sizing: border-box;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
  body {
    padding: 0;
    margin: 0;
    font-family: 'Jost', sans-serif;
    background-color: #181a1f;
  }
  a {
    text-decoration: none;
  }
  ul {
    margin: 0 auto;
    list-style-type: none;
  }
  .Row {
    margin-left: 0;
  }
`;