export const fetchTeamsStart = () => {
    return{
        type: 'FETCH_TEAMS_START'
    }
}

export const fetchTeamsSuccess = (teamsArr) => {
    return{
        type: 'FETCH_TEAMS_SUCCESS',
        teams: teamsArr
    }
}