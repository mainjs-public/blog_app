import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getBlogList, deleteBlog } from '../../../modules/blog/actions';

class BlogList extends Component {

	componentDidMount() {
		this.props.dispatch(getBlogList());
	}

	handleDelete(id) {
		this.props.dispatch(deleteBlog(id));
	}

	render() {
		const { data } = this.props;
		return (
			<div className="mt-5">
				<h3 className="float-left">Blogs</h3>	
				<Link className="float-right btn btn-primary mb-3" to="/dashboard/blog/form">Add Blog</Link>
				<table className="table">
				  <thead>
				    <tr>
				      <th scope="col">#</th>
				      <th scope="col">Name</th>
				      <th scope="col">Slug</th>
				      <th scope="col" className="text-right">Action</th>
				    </tr>
				  </thead>
				  <tbody>
				    {data.map((blog, index) => <tr key={blog._id}>
				      <th scope="row">{index + 1}</th>
				      <td>{blog.name}</td>	
				      <td>{blog.slug}</td>
				      <td className="text-right">
				      	<Link to={`/dashboard/blog/form?blog_id=${blog._id}`} className="btn btn-primary mr-1">Edit</Link>
				      	<button type="button" className="btn btn-danger" onClick ={() => this.handleDelete(blog._id)}>Delete</button>
				      </td>
				    </tr>)}
				  </tbody>
				</table>
			</div>
		);
	}
}

const mapStateToProps = state => {
  const {
    blog: { loading, data },
  } = state;
  return {
    loading,
    data,
  };
};

export default connect(mapStateToProps)(BlogList);