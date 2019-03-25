import React, { Component } from 'react';

import { Link } from 'react-router-dom';

export class BlogItem extends Component {
  render() {
    const { type } = this.props;

    if (type === 'blog_type_1') {
      return (
        <div className="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
          <div className="col p-4 d-flex flex-column position-static">
            <strong className="d-inline-block mb-2 text-primary">World</strong>
            <h3 className="mb-0">Featured post</h3>
            <div className="mb-1 text-muted">Nov 12</div>
            <p className="card-text mb-auto">
              This is a wider card with supporting text below as a natural
              lead-in to additional content.
            </p>
            <Link to="/blog/blog-name-slug" className="stretched-link">
              Continue reading
            </Link>
          </div>
          <div className="col-auto d-none d-lg-block">
            <svg
              className="bd-placeholder-img"
              width="200"
              height="250"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="xMidYMid slice"
              focusable="false"
              role="img"
              aria-label="Placeholder: Thumbnail"
            >
              <title>Placeholder</title>
              <rect width="100%" height="100%" fill="#55595c" />
              <text x="50%" y="50%" fill="#eceeef" dy=".3em">
                Thumbnail
              </text>
            </svg>
          </div>
        </div>
      );
    }

    return (
      <div className="blog-post">
        <h2 className="blog-post-title">Another blog post</h2>
        <p className="blog-post-meta">
          December 23, 2013 by <a href="#">Jacob</a>
        </p>

        <p>
          Cum sociis natoque penatibus et magnis{' '}
          <a href="#">dis parturient montes</a>, nascetur ridiculus mus. Aenean
          eu leo quam. Pellentesque ornare sem lacinia quam venenatis
          vestibulum. Sed posuere consectetur est at lobortis. Cras mattis
          consectetur purus sit amet fermentum.
        </p>
        <blockquote>
          <p>
            Curabitur blandit tempus porttitor.{' '}
            <strong>Nullam quis risus eget urna mollis</strong> ornare vel eu
            leo. Nullam id dolor id nibh ultricies vehicula ut id elit.
          </p>
        </blockquote>
        <p>
          Etiam porta <em>sem malesuada magna</em> mollis euismod. Cras mattis
          consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla
          sed consectetur.
        </p>
        <p>
          Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.
          Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget
          lacinia odio sem nec elit. Morbi leo risus, porta ac consectetur ac,
          vestibulum at eros.
        </p>
      </div>
    );
  }
}
