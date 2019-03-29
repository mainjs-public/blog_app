import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getCategories, deleteCategory } from '../../../modules/category/actions';

class CategoryList extends Component {

	componentDidMount() {
		this.props.dispatch(getCategories());
	}

	handleDelete(id) {
		this.props.dispatch(deleteCategory(id));
	}

	render() {
		const { data } = this.props;
		return (
			<div className="mt-5">
				<h3 className="float-left">Categories</h3>	
				<Link className="float-right btn btn-primary mb-3" to="/dashboard/category/form">Add Category</Link>
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
				    {data.map((category, index) => <tr key={category._id}>
				      <th scope="row">{index + 1}</th>
				      <td>{category.name}</td>	
				      <td>{category.slug}</td>
				      <td className="text-right">
				      	<Link to={`/dashboard/category/form?category_id=${category._id}`} className="btn btn-primary mr-1">Edit</Link>
				      	<button type="button" className="btn btn-danger" onClick ={() => this.handleDelete(category._id)}>Delete</button>
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
    category: { loading, data },
  } = state;
  return {
    loading,
    data,
  };
};

export default connect(mapStateToProps)(CategoryList);