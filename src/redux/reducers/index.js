import { combineReducers } from 'redux'
import limitOfCombosReducer from './limitOfCombosReducer'

export default combineReducers({
    limitOfCombos: limitOfCombosReducer
});