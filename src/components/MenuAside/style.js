import styled from 'styled-components';
import * as C from '../../styles/Constants';

export const Wrapper = styled.aside`
  max-width: 280px;
  width: 100%;
  height: 720px;

  display: flex;
  flex-direction: column;

  background-color: ${C.PizzaDarkBlue};
  color: ${C.PizzaGray};
  border-radius: 40px;

  @media (max-width: ${C.XL}){
    display: none;
  }
 `;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;

  font-weight: bold;
  font-size: 1.5rem;

  line-height: 4;
  color: ${C.PizzaYellow};

  .red {
    color: ${C.PizzaRed};
  }
`;

export const Menu = styled.ul`
  max-width: 100%;
  padding: 0 1.5rem;
  margin-top: 3rem;

  svg {
    width: 30px;
    height: auto;

    margin-right: 1rem;
  }

  li > a {
    width: 100%;
    padding: 0.7rem 1.5rem;

    display: flex;
    align-items: center;
    justify-content: flex-start;

    cursor: pointer;

    margin-bottom: 2rem;
    border-radius: 40px;
    font-weight: bold;
    color: ${C.PizzaGray};

    transition: background-color 0.2s ease-in;

    &.active {
      background-color: ${C.PizzaYellow};
    }

    &:hover,
    &:focus {
      background-color: ${C.PizzaDarkYellow};
    }
  }
`;
