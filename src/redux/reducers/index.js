import { combineReducers } from 'redux';
import limitOfCombosReducer from './limitOfCombosReducer';
import comboDataReducer from './comboDataReducer';
import exclusionsAndInclusionsReducer from './exclusionsAndInclusionsReducer';


export default combineReducers({
    limitOfCombos: limitOfCombosReducer,
    comboData: comboDataReducer,
    exclusionsAndInclusions: exclusionsAndInclusionsReducer,
});