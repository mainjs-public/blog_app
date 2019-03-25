import React, { Component } from 'react';

import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import { HomePage } from '../pages/HomePage';
import { AboutPage } from '../pages/AboutPage';
import { BlogPage } from '../pages/BlogPage';
import { ContactPage } from '../pages/ContactPage';
import { CategoryPage } from '../pages/CategoryPage';

import { Header } from './Header';
import { Footer } from './Footer';
import { Menu } from './Menu';

export class LayoutFront extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <Header />
          <Menu />
        </div>

        <Route path="/" exact component={HomePage} />
        <Route path="/about" exact component={AboutPage} />
        <Route path="/contact" exact component={ContactPage} />
        <Route path="/category/:slug" exact component={CategoryPage} />
        <Route path="/blog/:slug" exact component={BlogPage} />

        <Footer />
      </Router>
    );
  }
}
