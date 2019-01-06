import React, { Fragment } from 'react';
import { hot } from 'react-hot-loader';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Navigation from './Navigation';
import { Headings, Home, Inputs, Links, NotFound } from './screens';

const App = () => (
  <Router>
    <Fragment>
      <Navigation />
      <main id="main">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/headings" exact component={Headings} />
          <Route path="/inputs" exact component={Inputs} />
          <Route path="/links" exact component={Links} />
          <Route component={NotFound} />
        </Switch>
      </main>
    </Fragment>
  </Router>
);

export default hot(module)(App);
