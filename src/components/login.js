import React, { Component } from "react";
import { Redirect } from 'react-router-dom'
import axios from 'axios'
// import Welcome from './welcome'

axios.defaults.baseURL = 'http://localhost:8080/api/';
//axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
axios.defaults.headers.post['Content-Type'] = 'application/json';

export default class Login extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      password: '',
      redirect: false
    };

    this.handleNameChange = this.handleNameChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleNameChange(event) {
    //   console.log(event.target.value)
    this.setState({ name: event.target.value });
  }

  handlePasswordChange(event) {
    //   alert()
    this.setState({ password: event.target.value });
  }

  handleSubmit(event) {
    console.log('A name was submitted: ' + this.state.name + "  " + this.state.password);
    event.preventDefault();

    axios.post('/authenticate', {
      username: this.state.name,
      password: this.state.password
    })
      .then(function (response) {
        localStorage.setItem('token', response.data.jwt);
        console.log(response.data);
        this.setState({ redirect: true })
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  renderRedirect = () => {
    alert()
    console.log(localStorage.getItem('token'))
    if (localStorage.getItem('token') !== null) {
      return <Redirect to='/App' />
    }
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h3>Sign In</h3>

        <div className="form-group">
          <label>Name</label>
          <input type="text" className="form-control" autoComplete="current-name" value={this.state.name} onChange={this.handleNameChange} placeholder="Enter name" />
        </div>

        <div className="form-group">
          <label>Password</label>
          <input type="password" autoComplete="current-password" className="form-control" value={this.state.password} onChange={this.handlePasswordChange} placeholder="Enter password" />
        </div>

        <div className="form-group">
          <div className="custom-control custom-checkbox">
            <input type="checkbox" className="custom-control-input" id="customCheck1" />
            <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
          </div>
        </div>
        {localStorage.getItem('token') != null && this.renderRedirect()}
        <button type="submit" className="btn btn-primary btn-block">Submit</button>
        <p className="forgot-password text-right">
          Forgot password?
                </p>
      </form>
    );
  }
}