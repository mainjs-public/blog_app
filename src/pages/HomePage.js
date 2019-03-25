import React, { Component } from 'react';

import { BlogItem } from '../components/BlogItem';
import { BlogFeature } from '../components/BlogFeature';
import { Sider } from '../layouts/Sider';
import { LayoutFront } from '../layouts/LayoutFront';

export class HomePage extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <BlogFeature />

          <div className="row mb-2">
            {[1, 2].map(blog => (
              <div className="col-md-6" key={blog}>
                <BlogItem type="blog_type_1" />{' '}
              </div>
            ))}
          </div>
        </div>

        <main role="main" className="container">
          <div className="row">
            <div className="col-md-8 blog-main">
              <h3 className="pb-4 mb-4 font-italic border-bottom">
                From the Firehose
              </h3>

              {[1, 2, 3].map(blog => (
                <BlogItem key={blog} />
              ))}

              <nav className="blog-pagination">
                <a className="btn btn-outline-primary" href="#">
                  Older
                </a>
                <a
                  className="btn btn-outline-secondary disabled"
                  href="#"
                  tabIndex="-1"
                  aria-disabled="true"
                >
                  Newer
                </a>
              </nav>
            </div>

            <Sider />
          </div>
        </main>
      </div>
    );
  }
}
