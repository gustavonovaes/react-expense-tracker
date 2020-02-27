import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Exo+2:300,400&display=swap');

  :root {
    --max-width: 600px;
    --box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);

    --half-gap: 5px;
    --gap: 10px;
    --double-gap: 20px;

    --text-color: #333;
    --text-color-light: #999;

    --background-color: #f7f7f7;
    --background-color-highlight: #ffffff;
    
    --border-color: #dedede;

    --button-color-background: #9c88ff;
    --button-color-text: #ffffff;

    --color-income: #2ecc71;
    --color-expense: #c0392b;
    --color-danger: #e74c3c;
    
  }

  html {
    scroll-behavior: smooth;
    box-sizing: border-box;
  }

  * {
    padding: 0;
    margin: 0;
  }

  *, *::after, *::before {
    box-sizing: inherit;
  }

  body {
    color: var(--text-color);
    background-color: var(--background-color);
    min-height: 100vh;

    font-family: 'Exo 2', sans-serif;
    font-size: 22px;
    line-height: 1.5;
    font-weight: 300;

    display: flex;
    flex-direction: column;
    justify-content: center;

    /* text-rendering: optimizeSpeed; */
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  h1, h2, h3, h4 {
    letter-spacing: 1px;
    margin: 0;
    margin-bottom: var(--gap);
    text-transform: uppercase;

    font-weight: 400;

    padding: var(--double-gap) 0 var(--gap);
  }

  input::placeholder {
    color: var(--text-color-light);
  }

  input, button {
    font-size: inherit;
    color: inherit;
  }

  button {
    font-weight: bold;
  }

  button:hover {
    cursor: pointer;
    outline: 0;
  }

  .btn {
    width: 100%;
    border: none;

    color: var(--button-color-text);
    background-color: var(--button-color-background);
    
    box-shadow: var(--box-shadow);

    padding: var(--gap);
    margin: var(--double-gap) 0;
  }
`;