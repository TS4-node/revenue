import { combineReducers } from 'redux'
import limitOfCombosReducer from './limitOfCombosReducer'
import comboDataReducer from './comboDataReducer';

export default combineReducers({
    limitOfCombos: limitOfCombosReducer,
    comboData: comboDataReducer
});