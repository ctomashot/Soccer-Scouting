import React from 'react'

class TeamsCard extends React.Component {

    render(){
        return(
            <div>
            <tr>
                <td>{this.props.name}</td>
                <td>{this.props.points}</td>
                <td>{this.props.seasonWins_home + this.props.seasonWins_away}</td>
                <td>{this.props.seasonDraws_home + this.props.seasonDraws_away}</td>
                <td>{this.props.seasonLosses_home + this.props.seasonLosses_away}</td>
                <td>{this.props.matchesPlayed}</td>
            </tr>
      
        </div>
        )
    }
}

export default TeamsCard