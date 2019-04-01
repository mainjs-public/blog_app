import React, { Component } from 'react';
import request from '../utils/request';

export class BlogPage extends Component {

constructor(props) {
    super(props);
    this.state = {
      data: {},
      loading: false,
    }
  }

  componentDidMount() {
    const { match: { params } } = this.props;
    if (params && params.slug) {
    	this.getData(params.slug);
    }
  }

  getData = (slug) => {

  	    console.log(slug, 'slug');

    this.setState({
      loading: true,
    });

    request.get(`/blogs/slug?slug=${slug}`)
      .then(res => res.data)
      .then(data => this.setState({ data, loading: false }))
      .catch(errors => {
        console.log(errors);
        this.setState({
          loading: false,
        })
      });
  }


  render() {

  	const { loading, data } = this.state;

    return (
    	<div className="container mt-3 mb-3">
    		{ loading ? 'Loading...' : data.content }
    	</div>
    );
  }
}
