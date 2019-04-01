import React, { Component } from 'react';
import request from './utils/request.js';

import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

import PrivateRouter from './components/PrivateRouter';

import { LayoutFront } from './layouts/LayoutFront';
import { LayoutBack } from './layouts/LayoutBack';
import LoginPage from './pages/LoginPage';


class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/login" component={LoginPage} />
          <PrivateRouter path="/dashboard" component={LayoutBack} />
          <Route path="/" component={LayoutFront} />
        </Switch>
      </Router>
    );
  }
}

export default App;
