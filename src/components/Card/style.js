import styled from 'styled-components';
import * as C from '../../styles/Constants';

export const Wrapper = styled.div`
  position: relative;
  width: 100%;

  display: flex;
  align-items: center;
  flex-direction: column;
  border-radius: 40px;

  text-align: center;
  line-height: 3;

  margin: 0.5rem;
  padding: 1.5rem 1rem;
  background-color: ${C.PizzaGray};
  border: 1px solid transparent;
  box-shadow: 0px 2px 4px 0px ${C.PizzaLightGray};
  transition: all 0.5s ease;

  &:hover,
  &:focus {
    border: 1px solid ${C.PizzaLightGray};

    button {
      opacity: 1;
    }
  }
`;

export const Image = styled.img`
  max-width: 100px;
  width: 100%;
  height: 100px;
  border-radius: 50%;
  object-fit: cover;
`;

export const Title = styled.h2`
  font-weight: bold;
`;

export const Price = styled.p`
  font-weight: lighter;
  color: ${C.PizzaDarkGray};
`;

export const Button = styled.button`
  width: 50px;
  height: 50px;
  margin-bottom: -2.5rem;
  
  font-size: 1.8rem;

  border-radius: 50%;
  outline: 0;

  cursor: pointer;
  border: none;
  background-color: ${C.PizzaYellow};
  color: ${C.PizzaWhite};
  opacity: 0;
  z-index: 1;

  transition: opacity 0.5s ease-in-out;
`;
