export const loginSuccess = (scout) => {
    return {
        type: 'LOGIN_SUCCESS',
        scout: scout
    }
}

export const logoutScout = () => {
    return {
        type: 'LOGOUT_USER'
    }
}