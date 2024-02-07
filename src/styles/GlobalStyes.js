import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  :root {
    // COLORS 
    --yellow: hsl(47, 88%, 63%);
    --white: hsl(0, 0%, 100%);
    --grey: hsl(0, 0%, 50%);
    --black: hsl(0, 0%, 7%);

    // FONTS 
    --figtree: font-family: 'Figtree', sans-serif;
    --fw-600: 600;
    --fw-800: 800;

    // OTHER 

    // BREAKPOINTS
    --bp-800: 50em; // 800px 
  }

  *, 
  *::before,
  *::after {
    box-sizing: border-box;

    margin: 0;
    padding: 0;
  }

  html {
    font-size: 62.5%;
  }

  body {
    box-sizing: border-box;
    font-size: 1.6rem;
    font-family: var(--figtree);
    background-color: var(--yellow);
    color: var(--black);
    line-height: 1.5; 
  }

  a {
    text-decoration: none;
  }

`;

export default GlobalStyles;
