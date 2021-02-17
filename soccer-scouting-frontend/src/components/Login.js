import React from 'react';
import '../Login.css';
import { loginSuccess } from '../actions/auth'
import {connect} from 'react-redux'
import { currentScout } from '../actions/auth'
import { logoutScout } from '../actions/auth'

class Login extends React.Component {
  state = {
    username: '',
    password: '',
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
        localStorage.setItem('jwt_token', data.token)
        this.props.loginSuccess(data.scout)
        this.props.history.push('/bookmarked')
      }
      }
    )
  }

  render(){
  return(

<body id="LoginForm">
<div class="container">
<h1 class="form-heading"></h1>
<div class="login-form">
<div class="main-div">
    <div class="panel">
   <h2>Scout Login</h2>
   <p>Please enter your username and password</p>
   </div>
    {this.state.error ? <h4 style={{color: 'red'}}>Please enter a valid Username and Password</h4> : null}
    <form id="Login" onSubmit={this.handleSubmit}>

        <div class="form-group">


            <input type="username" placeholder= "Username" class="form-control" name={'username'} onChange={this.handleInputChange} value={this.state.username}/>
        </div>

        <div class="form-group">

            <input type="password" placeholder= "Password"class="form-control" name={'password'} onChange={this.handleInputChange} value={this.state.password}/>

        </div>

        <button type="submit" class="btn btn-primary">Login</button>

    </form>
<p class="botto-text"> Designed by Sunil Rajput</p>

</div>
</div>
</div>
</body>




  )
}
}


const mapDispatchToProps = {
    loginSuccess: loginSuccess
}


export default connect(null, mapDispatchToProps)(Login);