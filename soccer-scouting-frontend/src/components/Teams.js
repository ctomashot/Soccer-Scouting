import React from 'react'
import { connect } from "react-redux";
import TeamsCard from './TeamsCard'

class Teams extends React.Component {
    render(){
    return(
        <div>
            {
                this.props.teams.map(team => {
                    return <TeamsCard {...team} key={team.id} />
                })
            }     
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