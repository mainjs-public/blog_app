import React, { Component } from 'react';

import { BlogItem } from '../components/BlogItem';
import { BlogFeature } from '../components/BlogFeature';

export class CategoryPage extends Component {
  render() {
    return (
      <div className="container">
        <BlogFeature />
        {[1, 2, 3].map(blog => (
          <BlogItem key={blog} />
        ))}
      </div>
    );
  }
}
