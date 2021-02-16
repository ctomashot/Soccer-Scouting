import React from 'react';
import '../Login.css';
import { loginSuccess } from '../actions/auth'
import {connect} from 'react-redux'
import { currentScout } from '../actions/auth'
import { logoutScout } from '../actions/auth'

class Login extends React.Component {
  state = {
    username: 'ctomashot',
    password: '1234',
    error: ''
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

    fetch('http://localhost:4000/api/v1/auth', reqObj)
    .then(resp => resp.json())
    .then(data => {
      if(data.error){
        this.setState({
          error: data.error
        })
      } else{
        localStorage.seItem('jwt_token', data.token)
        this.props.loginSuccess(data.scout)
        this.props.history.push('/bookmarked')
      }
      }
    )
  }

  render(){
  return(
    <div >
      <h1>Please Log In</h1>
      {this.state.error ? <h4 style={{color: 'red'}}>this.state.error</h4> : null}
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


const mapDispatchToProps = {
    loginSuccess: loginSuccess
}


export default connect(null, mapDispatchToProps)(Login);