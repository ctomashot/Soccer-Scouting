import { combineReducers } from 'redux'
import playersReducer from './players'
import teamsReducer from './teams'

export default combineReducers({
    players: playersReducer,
    teams: teamsReducer
})