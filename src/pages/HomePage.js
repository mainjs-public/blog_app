import React, { Component } from 'react';

import { BlogItem } from '../components/BlogItem';
import { BlogFeature } from '../components/BlogFeature';
import { Sider } from '../layouts/Sider';
import { LayoutFront } from '../layouts/LayoutFront';

import request from '../utils/request';

export class HomePage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      blogs: [],
      skip: 0,
      limit: 3,
      loading: false,
    }
  }

  componentDidMount() {
    const { skip, limit } = this.state;
    this.getData(skip, limit);
  }

  getData = (skip, limit) => {
    this.setState({
      loading: true,
    });
    const { blogs } = this.state;

    request.get(`/blogs?skip=${skip}&limit=${limit}`)
      .then(res => res.data)
      .then(data => this.setState({ blogs: [].concat(blogs, data), loading: false }))
      .catch(errors => {
        console.log(errors);
        this.setState({
          loading: false,
        })
      });
  }

  handleMore = () => {

     let { skip, limit } = this.state;
     // skip = skip + limit;

     this.setState({
        skip: skip + limit,
     }, () => {
        this.getData(skip + limit, limit);
     });
  }

  render() {
    const { blogs, loading } = this.state;
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

              {blogs.map(blog => (
                <BlogItem key={blog._id} blog={blog} />
              ))}

              <nav className="blog-pagination">
                <button className="btn btn-outline-primary" onClick={this.handleMore}>
                  {loading ? 'Loading...': 'More'}
                </button>
              </nav>
            </div>

            <Sider />
          </div>
        </main>
      </div>
    );
  }
}
