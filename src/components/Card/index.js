import React from 'react';
import * as Styled from './style';

const Card = () => {
  return (
    <Styled.Wrapper>
      <Styled.Image
        src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=902&q=80"
        alt="Foto da Comida"
      />

      <Styled.Title>Hambúrguer</Styled.Title>
      <Styled.Price>R$ 90</Styled.Price>
      <Styled.Button>+</Styled.Button>
    </Styled.Wrapper>
  );
};

export default Card;
