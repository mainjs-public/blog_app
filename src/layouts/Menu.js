import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class Menu extends Component {
  render() {
    const menu = window.MENU;
    return (
      <div className="nav-scroller py-1 mb-2">
        <nav className="nav d-flex justify-content-between">
          {menu.map(m => <Link key={m._id} className="p-2 text-muted" href="#">{m.name}</Link>)}
        </nav>
      </div>
    );
  }
}
