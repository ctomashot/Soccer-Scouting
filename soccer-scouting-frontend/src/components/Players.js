import React from 'react'
import { connect } from "react-redux";
import PlayersCard from './PlayersCard'
import { fetchPlayersSuccess } from '../actions/players'


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
        const id = e.target.id
        console.log(id)
        this.props.fetchPlayersSuccess({players: this.props.players.filter(p => p.id === parseInt(id))})


    }

    

    render(){
    return(
        <div>
            <input type="text" placeholder= "Search Player Names" value ={this.state.inputValue} onChange={this.playerFilterOnChange}></input>
            <table>
            <tr>
                <th>Name</th>
                <th>Age</th>
                <th>Position</th>
                <th>Goals</th>
                <th>Assists</th>
                <th>Appearances</th>
            </tr>
            
            {
                this.dynamicSearch().map(player => {
                    return <PlayersCard {...player} key={player.id} bookmarkPlayer={this.bookmarkPlayer}/>
                })
            } 
            
            </table>    
        </div>
    )
    }
}

const mapDispatchToProps = {
    fetchPlayersSuccess: fetchPlayersSuccess
}

const mapStateToProps = (state) => {
    return {
        players: state.players
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (Players);