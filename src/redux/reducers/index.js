import { combineReducers } from 'redux'
import limitOfCombosReducer from './limitOfCombosReducer'
import comboDataReducer from './comboDataReducer';
import generalDirectorateSalesReducer from './generalDirectorateSalesReducer';
import exclusiosnAndInclusionsReducer from './exclusiosnAndInclusionsReducer'

export default combineReducers({
    limitOfCombos: limitOfCombosReducer,
    comboData: comboDataReducer,
    generalDirectorateSales: generalDirectorateSalesReducer,
    exclusionAndInclusion: exclusiosnAndInclusionsReducer
});