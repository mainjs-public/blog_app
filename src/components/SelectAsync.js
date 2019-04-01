import React, { Component } from 'react';

import request from '../utils/request';

export class SelectAsync extends Component {

	constructor(props) {
		super(props);
		this.state = {
			data: [],
		}
	}


	componentDidMount() {
		const { path } = this.props
		request
		      .get(path)
		      .then(res => res.data)
		      .then(data => {
		        this.setState({ data });
		      })
		      .catch(error => console.log(error));
	}

	render() {
		return (
			<div className="form-group">
    		<label >{this.props.name}</label>
    		<select className="form-control" onChange={this.props.onChange} value={this.props.value}>
		      {this.state.data.map(item => <option key={item._id} value={item._id}>{item.name}</option>)}
		    </select>
		  </div>
		);
	}
}
