import React, { connect } from 'react';
import PropTypes from 'prop-types';
import '../Login.css';
import { currentScout } from '../actions/auth'
import bookmarked from '../reducers/bookmarked';

class Bookmarked extends React.Component {
    componentDidMount(){
        if(this.props.currentScout){
            this.props.history.push('/login')
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

export default connect(mapStateToProps)(Bookmarked);