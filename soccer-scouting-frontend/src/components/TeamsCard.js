import React from 'react'

class TeamsCard extends React.Component {

    render(){
        return(
            <div>
            <table >
                <tr>
                <th>Name</th>
                <th>Points</th>
                <th>Wins</th>
                <th>Draws</th>
                <th>Losses</th>
                <th>Matches Played</th>
            </tr>
            <tr>
                <td>{this.props.name}</td>
                <td>{this.props.points}</td>
                <td>{this.props.seasonWins_home + this.props.seasonWins_away}</td>
                <td>{this.props.seasonDraws_home + this.props.seasonDraws_away}</td>
                <td>{this.props.seasonLosses_home + this.props.seasonLosses_away}</td>
                <td>{this.props.matchesPlayed}</td>
            </tr>

            </table>        
        </div>
        )
    }
}

export default TeamsCard