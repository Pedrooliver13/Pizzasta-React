import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import GlobalStyled from '../styles/Global';
import Home from '../pages/Home';
import Page404 from '../pages/Page404';

const Router = () => {
  return (
    <BrowserRouter>
      <GlobalStyled />
      <Switch>
        <Route path="/" component={Home} />
        <Route path="*" component={Page404} />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
