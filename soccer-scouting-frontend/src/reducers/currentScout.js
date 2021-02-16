const currentScout = (state=null, action) => {
    switch(action.type){
        case 'LOGIN_SUCCESS':
        case 'CURRENT_SCOUT':
            return {
                id: action.scout.id,
                username: action.scout.username
            }
        case 'LOGOUT_SCOUT':
            return null
        default:
            return state
    }
}

export default currentScout