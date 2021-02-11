const teams = (state=[], action) => {
    switch(action.type) {
        case 'FETCH_TEAMS_SUCCESS':
            return action.teams
        case 'CREATE_TEAMS_SUCCESS':
            return [...state, action.teams]
        default:
            return state
    }
}

export default teams