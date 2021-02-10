import React from 'react'
import { connect } from "react-redux";
import PlayersCard from './PlayersCard'

class Players extends React.Component {
    render(){
    return(
        <div>
            {
                this.props.players.map(player => {
                    return <PlayersCard {...player} key={player.id} />
                })
            }     
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