const players = (state=[], action) => {
    switch(action.type) {
        case 'FETCH_PLAYERS_SUCCESS':
            return action.players
        case 'CREATE_PLAYERS_SUCCESS':
            return [...state, action.players]
        default:
            return state
    }
}

export default players