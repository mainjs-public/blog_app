import React, { Component } from 'react';

import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import { Dashboard } from '../pages/dashboard';

import CategoryForm from '../pages/dashboard/category/CategoryForm';
import CategoryList from '../pages/dashboard/category/CategoryList';

import BlogForm from '../pages/dashboard/blog/BlogForm';
import BlogList from '../pages/dashboard/blog/BlogList';

export class LayoutBack extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link className="navbar-brand" to="/dashboard">
              Dashboard
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                  <Link className="nav-link" to="/dashboard/category">
                    Categories
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/dashboard/blog">
                    Blogs
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/dashboard/contacts">
                    Contacts
                  </Link>
                </li>
              </ul>
            </div>
          </nav>

          <Route path="/dashboard" exact component={Dashboard} />

          <Route path="/dashboard/category" exact component={CategoryList} />
          <Route path="/dashboard/category/form" exact component={CategoryForm} />

          <Route path="/dashboard/blog" exact component={BlogList} />
          <Route path="/dashboard/blog/form" exact component={BlogForm} />

        </div>
      </Router>
    );
  }
}
