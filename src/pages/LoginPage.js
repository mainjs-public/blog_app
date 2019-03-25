import React, { Component } from 'react';

export class LoginPage extends Component {
  render() {
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
              placeholder="name@example.com"
            />
          </div>

          <div className="form-group">
            <label for="exampleFormControlInput1">Password</label>
            <input
              type="password"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="name@example.com"
            />
          </div>

          <input className="btn btn-info" type="button" value="Login" />
        </form>
      </div>
    );
  }
}
