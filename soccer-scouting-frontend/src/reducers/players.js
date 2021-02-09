const players = (state=[], action) => {
    switch(action.type) {
        case 'FETCH_PLAYERS_SUCCESS':
            return action.todos
        case 'CREATE_PLAYERS_SUCCESS':
            return [...state, action.todo]
        default:
            return state
    }
}

export default players