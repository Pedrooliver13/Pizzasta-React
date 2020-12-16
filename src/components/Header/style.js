import styled from 'styled-components';
import * as C from '../../styles/Constants';

export const Wrapper = styled.header`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  & div.row {
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 25%;
    width: 100%;
  }
`;

export const Search = styled.form`
  position: relative;
  max-width: 40%;
  width: 100%;

  button {
    position: absolute;
    top: 15px;
    right: 20px;

    cursor: pointer;
    color: ${C.PizzaLightGray};
    border: none;
  }
`;

export const User = styled.div`
  width: 75%;

  display: flex;
  align-items: center;
  justify-content: space-around;
  font-weight: bold;
  
  padding: 0.5rem;

  border: 2px solid ${C.PizzaGray};
  border-radius: 10px;

  img {
    width: 35px;
    border-radius: 50%;
    overflow: hidden;
    object-fit: contain;
  }
`;

export const Buy = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  width: 50px;
  height: 50px;

  border-radius: 10px;
  color: ${C.PizzaGray};

  background-color: ${C.PizzaDarkBlue};

  .items {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;

    font-size: .8rem;
    font-weight: bold;

    width: 25px;
    height: 25px;
    border-radius: 50%;
    padding: .5rem;
    
    background-color: ${C.PizzaYellow};
    bottom: -5px;
    right: -5px;
  }
`;
