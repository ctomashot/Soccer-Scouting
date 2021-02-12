import React from 'react'
import { connect } from "react-redux";
import PlayersCard from './PlayersCard'

class Players extends React.Component {
    render(){
    return(
        <div>
            <input type="text" placeholder="Search"></input>
            <table>
            <tr>
                <th>Name</th>
                <th>Age</th>
                <th>Position</th>
                <th>Goals</th>
                <th>Assists</th>
                <th>Appearances</th>
            </tr>
            <tr>
            {
                this.props.players.map(player => {
                    return <PlayersCard {...player} key={player.id} />
                })
            } 
            </tr>
            </table>    
        </div>
    )
    }
}

const mapStateToProps = (state) => {
    return {
        players: state.players
    }
}

export default connect(mapStateToProps, null) (Players);