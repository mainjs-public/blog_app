import React, { Component } from 'react';
import { connect } from 'react-redux';

import axios from 'axios';

class App extends Component {

   constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

  componentWillMount() {

    this.props.dispatch({ type: 'FETCH_BLOG_REQUEST' });

    axios.get('http://localhost:4000/blogs').then(res => res.data).then(data => {
      this.props.dispatch({ type: 'FETCH_BLOG_SUCCESS', payload: data });
    });

  }

  render() {
    const { data } = this.state;
    const { blogs, loading } = this.props;

    console.log(blogs, loading);

    if (loading) {
      return <p>Loading</p>
    }

    return (
      <div className="App">
        <ul>
          {blogs.map(blog => (<li key={blog.id}><a href={`blogs/${blog.id}`}>{blog.name}</a></li>))}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const { loading, blogs } = state;
  return {
    loading,
    blogs
  };
}

export default connect(mapStateToProps)(App);
