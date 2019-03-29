import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import queryString from 'query-string';

import { addCategory, updateCategory } from '../../../modules/category/actions';

import request from '../../../utils/request';

class CategoryForm extends Component {

	constructor(props) {
		super(props);
		this.state = {
			name: '',
			slug: ''
		}
	}

	getCategoryDetail = () => {

		let id = null;

		const { search } = this.props.location;

		if (search) {
			const { category_id } = queryString.parse(search);
			if (category_id) {
				id = category_id;
			}
		}

		if (id) {

			request
		      .get('/categories/' + id)
		      .then(res => res.data)
		      .then(data => {
		        console.log(data, 'category detailt');
		        const { name, slug } = data;
		        this.setState({ name, slug });
		      })
		      .catch(error => console.log(error));
		}
	}

	componentDidMount() {
		this.getCategoryDetail();
	}

	componentWillReceiveProps(nextProps) {
		if (nextProps.location.key !== this.props.location.key) {
			this.getCategoryDetail();
		}
	}

	handleSave = () => {
		const { name, slug } = this.state;
		let id = null;

		const { search } = this.props.location;

		if (search) {
			const { category_id } = queryString.parse(search);
			if (category_id) {
				id = category_id;
			}
		}

		if (id) {
			this.props.updateData(id, { name, slug });
		} else {
			this.props.saveData({ name, slug });
		}
		
		this.props.history.push('/dashboard/category');
	}

	render() {
		console.log(this.props);
		const { name, slug } = this.state;
		return (
			<div className="mt-5">
				<h3 className="float-left">Add Category</h3>	
				<Link className="float-right btn btn-primary mb-3" to="/dashboard/category">Back</Link>
				<div className="clearfix"></div>	
				
			  <div className="form-group">
			    <label htmlFor="name">Name</label>
			    <input value={name} type="text" name="name" className="form-control" id="name" onChange={e => this.setState({ name: e.target.value })} />
			  </div>
			  <div className="form-group">
			    <label htmlFor="slug">Slug</label>
			    <input value={slug} type="text" className="form-control" id="slug" onChange={e => this.setState({ slug: e.target.value })} />
			  </div>
			  <button type="submit" className="btn btn-primary" onClick={this.handleSave}>Submit</button>

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

const mapDispatchToProps = (dispatch) => ({
	saveData: (data) => dispatch(addCategory(data)),
	updateData: (id, data) => dispatch(updateCategory(id, data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CategoryForm);