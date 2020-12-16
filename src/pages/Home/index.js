// framework
import React from 'react';

// estilos
import * as Styled from './style';

// components
import MenuAside from '../../components/MenuAside';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Card from '../../components/Card';
import { ReactComponent as Chef } from '../../assets/chef.svg';

const Home = () => {
  return (
    <Styled.ContainerFlex>
      <MenuAside />

      <Styled.Content>
        <Header />

        <Styled.Banner>
          <Styled.Title>
            Delicioso <span>Frango Assado</span>
          </Styled.Title>

          <Chef />
        </Styled.Banner>

        <Styled.CardWrapper>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </Styled.CardWrapper>

        <Footer />
      </Styled.Content>
    </Styled.ContainerFlex>
  );
};

export default Home;
