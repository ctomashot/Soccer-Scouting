import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux'
import '../Login.css';
import { currentScout } from '../actions/auth'
import bookmarked from '../reducers/bookmarked';
import BookmarkedPlayer from './BookmarkedPlayer';

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

    removeBookmarked = (e) =>{
        const id = e.target.id
        fetch(`http://localhost:4000/bookmarked_players/${id}`, { method: 'DELETE'})
        .then(() => {
            alert("Player was deleted")
            this.props.currentScout({bookmarked_players: this.props.bookmarked.filter(b => b.id !== parseInt(id))})
    })
    }

    newPlayers = (bookmarkPlayer) => {
        let bookmarked_players = this.props.bookmarked.map(bookmarked => {
                if(bookmarkPlayer.id === bookmarked.id){
                    return bookmarkPlayer
                }else{
                    return bookmarked
                }
            })
        
        this.props.currentScout({bookmarked_players: bookmarked_players})
    }


    renderPlayers = () => {
            return this.props.bookmarked.map((b) => {
            var p = this.props.players.filter(player => player.id === b.player_id)
            return (
                <BookmarkedPlayer b={b} p={p} removeBookmarked={this.removeBookmarked} newPlayers={this.newPlayers}/>
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
        bookmarked: state.bookmarked,
        players: state.players
    }
}

const mapDispatchToProps = {
    currentScout: currentScout
}


export default connect(mapStateToProps, mapDispatchToProps)(Bookmarked);