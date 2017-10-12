import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Homepage from './homepage';
import About from './about';

import NotFound from './not-found';

export default () => (
  <Switch>
    <Route exact path="/" component={Homepage} />
    <Route exact path="/about" component={About} />

    <Route component={NotFound} />
  </Switch>
);
