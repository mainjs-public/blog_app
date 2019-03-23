import React, { Component } from 'react';
import './App.css';

import axios from 'axios';

class App extends Component {

   constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

  componentWillMount() {
    console.log('componentWillMount');
    axios.get('http://localhost:4000/blogs').then(res => res.data).then(data => {
      this.setState({
        data,
      })
    });
  }

  render() {
    const { data } = this.state;
    return (
      <div className="App">
        <ul>
          {data.map(blog => (<li key={blog.id}><a href={`blogs/${blog.id}`}>{blog.name}</a></li>))}
        </ul>
      </div>
    );
  }
}

export default App;
