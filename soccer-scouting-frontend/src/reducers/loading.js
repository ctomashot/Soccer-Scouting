const loading = (state=false, action) => {
    switch(action.type) {
        case 'FETCH_PLAYERS_SUCCESS':
            return false
        case 'FETCH_PLAYERS_START':
            return true
        default:
            return state
    }
}

export default loading