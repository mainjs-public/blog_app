import React, { Component } from 'react';

export class ContactPage extends Component {
  render() {
    return (
      <div className="container mt-3 mb-3">
        <form>
          <div className="form-group">
            <label for="exampleFormControlInput1">Email address</label>
            <input
              type="email"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="name@example.com"
            />
          </div>

          <div className="form-group">
            <label for="exampleFormControlTextarea1">Example textarea</label>
            <textarea
              className="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
            />
          </div>

          <input className="btn btn-info" type="button" value="Submit" />
        </form>
      </div>
    );
  }
}
