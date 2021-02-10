import { combineReducers } from 'redux'
import playersReducer from './players'
import loadingReducer from './loading'

export default combineReducers({
    players: playersReducer
})