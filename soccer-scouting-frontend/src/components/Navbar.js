import React from 'react';
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import { currentScout } from '../actions/auth'
import { logoutScout } from '../actions/auth'
import { bookmarked } from '../actions/auth'


class Navbar extends React.Component {
    handleClick = () => {
        localStorage.removeItem('jwt_token')
        this.props.logoutScout()
    }
    render(){
    return(
<html>
<head>
  <title>Bootstrap Example</title>
  <meta charset="utf-8"/>
  <meta name="viewport" content="width=device-width, initial-scale=1"/>
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css"/>
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>
</head>

<body>
    <nav class="navbar navbar-inverse">
    <div class="container-fluid">
        <div class="navbar-header">
        <a class="navbar-brand" href="#">Soccer Scouting App</a>
    </div>
        <ul class="nav navbar-nav">
            <li><Link to="/">Bookmarked </Link></li>
            <li><Link to="/players">Players </Link></li>
            <li><Link to="/teams">Teams </Link></li>
            {
                this.props.currentScout ?
                <li><Link to="/login" onClick={this.handleClick}>Logout </Link></li>
                :
                <li><Link to="/login">Login </Link></li>
            }
    </ul>
    </div>
    </nav>
</body>
</html>
    )
    }
}

const mapStateToProps = (state) => {
    return {
        currentScout: state.currentScout
    }
}

const mapDispatchToProps = {
    logoutScout: logoutScout
}

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);