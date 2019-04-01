import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import queryString from 'query-string';

import { addBlog, updateBlog } from '../../../modules/blog/actions';
import { SelectAsync } from '../../../components/SelectAsync';

import request from '../../../utils/request';

class BlogForm extends Component {

	constructor(props) {
		super(props);
		this.state = {
			name: '',
			slug: '',
			image: '',
			description: '',
			category: '',
			content: ''
		}
		this.inputUpload = React.createRef();
	}

	getBlogDetail = () => {

		let id = null;

		const { search } = this.props.location;

		if (search) {
			const { blog_id } = queryString.parse(search);
			if (blog_id) {
				id = blog_id;
			}
		}

		if (id) {

			request
		      .get('/blogs/' + id)
		      .then(res => res.data)
		      .then(data => {
		        console.log(data, 'blog detailt');
		        const { name, slug, image, description, content, category } = data;
		        this.setState({ name, slug, image, description, content, category });
		      })
		      .catch(error => console.log(error));
		}
	}

	componentDidMount() {
		this.getBlogDetail();
	}

	componentWillReceiveProps(nextProps) {
		if (nextProps.location.key !== this.props.location.key) {
			this.getBlogDetail();
		}
	}

	handleSave = () => {
		const { name, slug, image, description, content, category } = this.state;
		let id = null;

		const { search } = this.props.location;

		if (search) {
			const { blog_id } = queryString.parse(search);
			if (blog_id) {
				id = blog_id;
			}
		}

		if (id) {
			this.props.updateData(id, { name, slug, image, description, content, category });
		} else {
			this.props.saveData({ name, slug, image, description, content, category });
		}
		
		this.props.history.push('/dashboard/blog');
	}

	handleSelectFile = (e) => {
		// console.log(this.inputUpload.current);
		// // .click();

		const files = e.target.files;
		console.log(e.target.files[0]);

		const data = new FormData();

		data.set('image', files[0]);

		request({
		    method: 'post',
		    url: '/upload',
		    data: data,
		    config: { headers: {'Content-Type': 'multipart/form-data' }}
	    })
	    .then(res => res.data)
	    .then(({ link }) =>{
	        console.log(data, 'upload success');
	        this.setState({
	        	image: link,
	        })
	    })
	    .catch(function (error) {
	        //handle error
	        console.log(error);
	    });

	}

	render() {
		const { name, slug, image, description, category, content } = this.state;
		return (
			<div className="mt-5">
				<h3 className="float-left">Add Blog</h3>	
				<Link className="float-right btn btn-primary mb-3" to="/dashboard/blog">Back</Link>
				<div className="clearfix"></div>	
				
			  <div className="form-group">
			    <label htmlFor="name">Name</label>
			    <input value={name} type="text" name="name" className="form-control" id="name" onChange={e => this.setState({ name: e.target.value })} />
			  </div>

			  <div className="form-group">
			    <label htmlFor="slug">Slug</label>
			    <input value={slug} type="text" className="form-control" id="slug" onChange={e => this.setState({ slug: e.target.value })} />
			  </div>

			  	<label htmlFor="slug">Image</label>
				<div className="input-group mb-3">
				  <input value={image} type="text" className="form-control" id="slug" onChange={e => this.setState({ image: e.target.value })} />
				  <div className="input-group-append">
				    <button className="btn btn-primary" type="button" onClick={e => this.inputUpload.current.click()}>Select File</button>
				  </div>
				  <input style={{ opacity: 0, width: 0, height: 0 }} ref={this.inputUpload} type="file" onChange={this.handleSelectFile} />
				</div>

				<div className="form-group">
				    <label htmlFor="description">Description</label>
				    <textarea value={description} onChange={e => this.setState({ description: e.target.value })} className="form-control" id="description" rows="3">
				    </textarea>
				  </div>

				  <div className="form-group">
				    <label htmlFor="description">Content</label>
				    <textarea value={content} onChange={e => this.setState({ content: e.target.value })} className="form-control" id="description" rows="3">
				    </textarea>
				  </div>

				  <SelectAsync value={category} onChange={e => this.setState({ category: e.target.value })} path="/categories" name="Select Category" />

			  	<button  type="submit" className="btn btn-primary" onClick={this.handleSave}>Submit</button>

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

const mapDispatchToProps = (dispatch) => ({
	saveData: (data) => dispatch(addBlog(data)),
	updateData: (id, data) => dispatch(updateBlog(id, data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(BlogForm);