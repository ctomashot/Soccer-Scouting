const bookmarked = (state=[], action) => {
    switch(action.type){
        case 'LOGIN_SUCCESS':
            return action.scout.bookmarked
        default:
            return state
    }
}

export default bookmarked