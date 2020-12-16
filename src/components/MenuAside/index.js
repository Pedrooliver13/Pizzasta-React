import React from 'react';
import * as Styled from './style';

import { Link, NavLink } from 'react-router-dom';

// components
import { ReactComponent as Pizza } from '../../assets/pizza.svg';
import { ReactComponent as Burger } from '../../assets/hamburger.svg';
import { ReactComponent as Cake } from '../../assets/cake.svg';
import { ReactComponent as Soda } from '../../assets/soda-can.svg';
import { ReactComponent as Fork } from '../../assets/cutlery.svg';

const MenuAside = () => {
  return (
    <Styled.Wrapper>
      <Styled.Header>
        <Link to="/">
          Pizz<span className="red">asta</span>
        </Link>
      </Styled.Header>

      <Styled.Menu>
        <li>
          <NavLink to="/" exact>
            <Fork /> Tudo
          </NavLink>
        </li>
        <li>
          <NavLink to="/pizzas">
            <Pizza /> Pizza
          </NavLink>
        </li>
        <li>
          <NavLink to="/hamburges">
            <Burger /> Hamburger
          </NavLink>
        </li>
        <li>
          <NavLink to="/bolos">
            <Cake /> Sobremesa
          </NavLink>
        </li>
        <li>
          <NavLink to="/bebidas">
            <Soda /> Bebidas
          </NavLink>
        </li>
      </Styled.Menu>
    </Styled.Wrapper>
  );
};

export default MenuAside;
