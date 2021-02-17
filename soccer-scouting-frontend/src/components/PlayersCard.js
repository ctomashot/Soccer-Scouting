import React from 'react'

class PlayersCard extends React.Component {

    render(){
        return(
            
            <tr>
                <td>{this.props.name}</td>
                <td>{this.props.age}</td>
                <td>{this.props.position}</td>
                <td>{this.props.goals}</td>
                <td>{this.props.assists}</td>
                <td>{this.props.appearances}</td>
            
            <button id={this.props.id} onClick={(e) => this.props.bookmarkPlayer(e)}>Bookmark Player</button>
            </tr>
        )
    }
}

export default PlayersCard