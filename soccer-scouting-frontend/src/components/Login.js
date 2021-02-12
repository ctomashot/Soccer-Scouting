import React, { useState } from 'react';
import PropTypes from 'prop-types';
import '../Login.css';

class Login extends React.Component {
  state = {
    username: 'ctomashot',
    password: '1234'
  }

  handleInputChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = (e) =>{
    e.preventDefault()

    const reqObj = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(this.state)
    }

    fetch('http://localhost:4000/scouts', reqObj)
    .then(resp => resp.json())
    .then(data => {

    })
  }

  render(){
  return(
    <div >
      <h1>Please Log In</h1>
      <form onSubmit={this.handleSubmit}>
        <label>
          <p>Username</p>
          <input name={'username'} onChange={this.handleInputChange} value={this.state.username}/>
        </label>
        <label>
          <p>Password</p>
          <input name={'password'} onChange={this.handleInputChange} value={this.state.password}/>
        </label>
        <div>
          <button type="submit">Login</button>
        </div>
      </form>
    </div>
  )
}
}

export default Login