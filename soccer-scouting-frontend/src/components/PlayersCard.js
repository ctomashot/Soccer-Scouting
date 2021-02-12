import React from 'react'

class PlayersCard extends React.Component {

    render(){
        return(
            <div>
            <tr>
                <td>{this.props.name}</td>
                <td>{this.props.age}</td>
                <td>{this.props.position}</td>
                <td>{this.props.goals}</td>
                <td>{this.props.assists}</td>
                <td>{this.props.appearances}</td>
            </tr>
            <button>Bookmark Player</button>
       
        </div>
        )
    }
}

export default PlayersCard