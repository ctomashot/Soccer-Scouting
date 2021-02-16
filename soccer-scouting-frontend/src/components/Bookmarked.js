import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux'
import '../Login.css';
import { currentScout } from '../actions/auth'
import bookmarked from '../reducers/bookmarked';

class Bookmarked extends React.Component {
    componentDidMount(){
        const token = localStorage.getItem('jwt_token')

        if(!token) {
            this.props.history.push('/login')
        } else {
            if(!this.props.currentScout){
                console.log('here')
            const reqObj = {
                method: 'GET',
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }

            fetch('http://localhost:4000/api/v1/current_scout', reqObj)
            .then(resp => resp.json())
            .then(data => {
                console.log(data)
                this.props.currentScout(data.scout)        
            })}            
        }


    }

    renderPlayers = () => {
        return this.props.bookmarked.map(b => {
            return (
                <div>
                    <h4>{b.name}</h4>
                    <p>{b.position}</p>
                </div>
            )
        })
    }

    render(){
    return(
        <div>
            <h1>Your Players</h1>
            {this.renderPlayers()}
        </div>
    )}
}

const mapStateToProps = (state) => {
    return {
        currentScout: state.currentScout,
        bookmarked: state.bookmarked
    }
}

const mapDispatchToProps = {
    currentScout: currentScout
}


export default connect(mapStateToProps, mapDispatchToProps)(Bookmarked);