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
        <div>
            <Link to="/">Bookmarked </Link>
            <Link to="/players">Players </Link>
            <Link to="/teams">Teams </Link>
            {
                this.props.currentScout ?
                <Link to="/login" onClick={this.handleClick}>Logout </Link>
                :
                <Link to="/login">Login </Link>
            }
        </div>
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