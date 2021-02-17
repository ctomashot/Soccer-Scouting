import React from 'react'

class TeamsCard extends React.Component {

    render(){
        return(
            <tr>
                <td>{this.props.position}</td>
                <td>{this.props.name}</td>
                <td>{this.props.points}</td>
                <td>{this.props.seasonWins_home + this.props.seasonWins_away}</td>
                <td>{this.props.seasonDraws_home + this.props.seasonDraws_away}</td>
                <td>{this.props.seasonLosses_home + this.props.seasonLosses_away}</td>
                <td>{this.props.matchesPlayed}</td>
      
        </tr>
        )
    }
}

export default TeamsCard