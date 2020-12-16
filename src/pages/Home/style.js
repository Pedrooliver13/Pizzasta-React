import styled from 'styled-components';

import * as C from '../../styles/Constants';
import { Container } from '../../styles/Container';

export const ContainerFlex = styled(Container)`
  display: flex;

  margin-top: 1rem;
  margin-bottom: 1rem;
`;

export const Content = styled.section`
  width: 100%;
  padding:0  1rem;
 `;

export const Banner = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;

  svg {
    width: 35%;
  }
`;

export const Title = styled.h1`
  padding: 0 2rem;

  font-weight: bold;
  font-size: 4rem;
  color: ${C.PizzaRed};

  span {
    display: block;
    color: ${C.PizzaYellow};
  }

  @media (max-width: ${C.MD}) {
    font-size: 1rem;
  }
`;

export const CardWrapper = styled.section`
  display: grid;
  align-items: center;
  /* justify-content: center; */

  grid-template-columns: repeat(5, 1fr);
  gap: 20px; 

  
  @media (max-width: ${C.XL}) {
    grid-template-columns: repeat(4, 200px);
  }
`