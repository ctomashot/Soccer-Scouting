export const loginSuccess = (scout) => {
    return {
        type: 'LOGIN_SUCCESS',
        scout: scout
    }
}

export const currentScout = (scout) => {
    return {
        type: 'CURRENT_SCOUT',
        scout: scout
    }
}

export const logoutScout = () => {
    return {
        type: 'LOGOUT_SCOUT'
    }
}