import React, { Component } from 'react';

import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import { Dashboard } from '../pages/dashboard';

import { Header } from './Header';
import { Footer } from './Footer';
import { Menu } from './Menu';

export class LayoutBack extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <Link class="navbar-brand" to="/dashboard">
              Dashboard
            </Link>
            <button
              class="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon" />
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav mr-auto">
                <li class="nav-item active">
                  <Link class="nav-link" to="/dashboard/category">
                    Categories
                  </Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link" to="/dashboard/blogs">
                    Blogs
                  </Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link" to="/dashboard/contacts">
                    Contacts
                  </Link>
                </li>
              </ul>
            </div>
          </nav>

          <Route path="/dashboard" exact component={Dashboard} />
          <Route path="/dashboard/category" component={Dashboard} />
          <Route path="/dashboard/blogs" component={Dashboard} />
          <Route path="/dashboard/contacts" component={Dashboard} />
        </div>
      </Router>
    );
  }
}
