import React from 'react'

class PlayersCard extends React.Component {

    render(){
        return(
            <div>
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
                <td>{this.props.name}</td>
                <td>{this.props.age}</td>
                <td>{this.props.position}</td>
                <td>{this.props.goals}</td>
                <td>{this.props.assists}</td>
                <td>{this.props.appearances}</td>
            </tr>

            </table>        
        </div>
        )
    }
}

export default PlayersCard