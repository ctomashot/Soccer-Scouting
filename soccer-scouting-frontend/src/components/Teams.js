import React from 'react'
import { connect } from "react-redux";
import TeamsCard from './TeamsCard'

class Teams extends React.Component {
    render(){
    return(
        <div>
            <input type="text" placeholder="Search"></input>
            <table >
                <tr>
                <th>Name</th>
                <th>Points</th>
                <th>Wins</th>
                <th>Draws</th>
                <th>Losses</th>
                <th>Matches Played</th>
            </tr>
            {
                this.props.teams.map(team => {
                    return <TeamsCard {...team} key={team.id} />
                })
            }  
            </table>   
        </div>
    )
    }
}

const mapStateToProps = (state) => {
    return {
        teams: state.teams
    }
}

export default connect(mapStateToProps, null) (Teams);