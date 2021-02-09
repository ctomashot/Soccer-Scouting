export const fetchPlayersStart = () => {
    return{
        type: 'FETCH_PLAYERS_START'
    }
}

export const fetchPlayersSuccess = (playersArr) => {
    return{
        type: 'FETCH_PLAYERS_SUCCESS',
        players: playersArr
    }
}