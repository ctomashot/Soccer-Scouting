const bookmarked = (state=[], action) => {
    switch(action.type){
        case 'LOGIN_SUCCESS':
        case 'CURRENT_SCOUT':
            return action.scout.bookmarked_players
        default:
            return state
    }
}

export default bookmarked