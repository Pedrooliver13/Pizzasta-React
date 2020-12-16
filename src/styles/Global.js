import { createGlobalStyle } from 'styled-components';

import { Reset } from './Reset';
import { PizzaWhite, PizzaDarkGray } from './Constants';

const GlobalStyled = createGlobalStyle`
  ${Reset};

  body {
    font-family: 'Montserrat', sans-serif;
    background-color: ${PizzaWhite};
    color: ${PizzaDarkGray};
  }

  a {
    color: inherit;
    text-decoration: none;
  }
`

export default GlobalStyled;
