import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import request from '../utils/request';
import { login } from '../modules/auth/actions';

class LoginPage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    }
  }

  handleLogin = () => {
    const { email, password } = this.state;
    this.props.dispatch(login({ email, password }));
  }

  render() {

    const { isLogin } = this.props;

    if (isLogin) {
      return <Redirect to="/dashboard" />
    }

    return (
      <div>
        <form className="container" style={{ maxWidth: 400 }}>
          <h2 className="text-center mt-5">Login </h2>

          <div className="form-group">
            <label for="exampleFormControlInput1">Email</label>
            <input
              type="email"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="Email"
              onChange={(e) => this.setState({ email: e.target.value })}
            />
          </div>

          <div className="form-group">
            <label for="exampleFormControlInput1">Password</label>
            <input
              type="password"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="Password"
              onChange={(e) => this.setState({ password: e.target.value })}
            />
          </div>

          <button onClick={this.handleLogin} className="btn btn-info" type="button" value="Login">Login</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = ({ auth: { isLogin } }) => ({ isLogin });

export default connect(mapStateToProps)(LoginPage);