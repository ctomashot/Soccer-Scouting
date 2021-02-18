import React from 'react'
import { connect } from "react-redux";
import PlayersCard from './PlayersCard'
import { fetchPlayersSuccess } from '../actions/players'
import { currentScout } from '../actions/auth';


class Players extends React.Component {
    state = {
        inputValue: ''
    }

    playerFilterOnChange = (e) => {
        this.setState({
            inputValue: e.target.value
        })
    }

    dynamicSearch = () => {
        return this.props.players.filter(player => player.name.toLowerCase().includes(this.state.inputValue.toLowerCase()))
    }

    bookmarkPlayer = (e) =>{
        e.preventDefault()
        const id = e.target.id
        console.log(this.props)
        fetch('http://localhost:4000/bookmarked_players', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                bookmarked_player: {
                    player_id: id,
                    scout_id: this.props.scout.id
                }
            })
        })
        .then(resp => resp.json())
        .then(data => {
            this.props.currentScout({bookmarked_players: [...this.props.bookmarked, data]})       
        })            




    }

    

    render(){
    return(
        <div class="topnav">
            <input type="text" placeholder= "Search Player Names" value ={this.state.inputValue} onChange={this.playerFilterOnChange}></input>
            <table>
            <tr>
                <th>Name</th>
                <th>Age</th>
                <th>Position</th>
                <th>Goals</th>
                <th>Assists</th>
                <th>Appearances</th>
                <th>Clean Sheets</th>
            </tr>
            
            {
                this.dynamicSearch().map(player => {
                    let bm
                    if(this.props.bookmarked.filter(b => b.player_id === player.id).length > 0){
                        bm = true
                    }else{
                        bm = false
                    }
                    return <PlayersCard {...player} key={player.id} bookmarkPlayer={this.bookmarkPlayer} bm={bm}/>
                })
            } 
            
            </table>    
        </div>
    )
    }
}

const mapDispatchToProps = {
    fetchPlayersSuccess: fetchPlayersSuccess,
    currentScout: currentScout
}

const mapStateToProps = (state) => {
    return {
        players: state.players,
        scout: state.currentScout,
        bookmarked: state.bookmarked
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (Players);