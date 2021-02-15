const currentScout = (state=null, action) => {
    switch(action.type){
        case 'LOGIN_SUCCESS':
            return {
                id: action.scout.id,
                username: action.user.username
            }
        case 'LOGOUT_SCOUT':
            return null
        default:
            return state
    }
}

export default currentScout