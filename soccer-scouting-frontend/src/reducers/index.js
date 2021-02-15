import { combineReducers } from 'redux'
import playersReducer from './players'
import teamsReducer from './teams'
import currentScoutReducer from './currentScout'
import bookmarkedReducer from './bookmarked'

export default combineReducers({
    players: playersReducer,
    teams: teamsReducer,
    currentScout: currentScoutReducer,
    bookmarked: bookmarkedReducer
})