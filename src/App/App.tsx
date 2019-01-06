import React, { Fragment } from 'react';
import { hot } from 'react-hot-loader';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';

import { Headings, Home, NotFound } from './screens';

const App = () => (
  <Router>
    <Fragment>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/headings">Headings</Link>
          </li>
        </ul>
      </nav>
      <main>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/headings" exact component={Headings} />
          <Route component={NotFound} />
        </Switch>
      </main>
    </Fragment>
  </Router>
);

export default hot(module)(App);
