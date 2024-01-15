import { createGlobalStyle } from 'styled-components'; 
// Global Styles Styled Components
export const GlobalStyle = createGlobalStyle`
  *{
    margin: 0; 
    padding: 0;
    box-sizing: border-box;
    outline: none;
    text-decoration: none;
    list-style: none;
    border: none;
    font-size: 1.6rem;
    outline: 0;
  }
  html{
    font-size: 62.5%;
    overflow-x: hidden;
    scroll-behavior: smooth;
  }
  main{
    position: relative !important;
    min-height: 100vh;
  }
  svg, img{ 
    max-width: 100%;
  }
  button, a{
    background-color: transparent;
    border: none;
    cursor: pointer !important;
  }
  :focus{
    outline: 0;
    box-shadow: 0 0 0 2px ${(props) => props.theme['purple-dark']};
  }
  body{
    background-color: ${(props) => props.theme['background-default']};
    color: ${(props) => props.theme['base-text']};
    -webkit-font-smoothing: antialiased;
  }
  body, input, textarea, button{
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 1rem;
    line-height: 130%; /* 18.2px */
  }
  // Container
  .container{
    width: 100%;
    max-width: 127.6rem;
    margin: 0 auto;
    padding: 0;
  }
  @media (max-width: 1400px){
    .container{
      padding: 0px 2.5rem;
    }
  }
  @media (max-width: 300px){
    .container{
      padding: 0px 1.5rem;
    }
  }
  // Typography
  h1{

  }

`;