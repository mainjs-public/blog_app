import React, { Component } from 'react';
import request from './utils/request.js';

import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

import { connect } from 'react-redux';

import PrivateRouter from './components/PrivateRouter';

import { LayoutFront } from './layouts/LayoutFront';
import { LayoutBack } from './layouts/LayoutBack';
import LoginPage from './pages/LoginPage';

import { getBlogs } from './modules/blog/actions'

class App extends Component {
  // constructor(props) {
  //   super(props);
  // }

  // componentWillMount() {
  //   this.props.dispatch(getBlogs());
  // }

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

const mapStateToProps = state => {
  const {
    blog: { loading, data },
  } = state;
  return {
    loading,
    data,
  };
};

export default connect(mapStateToProps)(App);
