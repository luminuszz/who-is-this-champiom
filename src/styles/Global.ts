import { createGlobalStyle } from 'styled-components';

import background from '../assets/background.jpg';

export const GlobalStyle = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  outline: 0;
  box-sizing: border-box;
}
body{
background-image: url('${background}');

background-repeat: no-repeat;
background-size: cover;
  -webkit-font-smoothing: antialiased;

}
body, input, button{
  font: 16px Roboto,  sans-serif;
}
#__next{
  max-width: 960px;
  margin: 0 auto;
  padding: 40px 20px
}



button{
  cursor: pointer;
}

`;
