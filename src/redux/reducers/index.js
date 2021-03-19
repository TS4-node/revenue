import { combineReducers } from 'redux';
import limitOfCombosReducer from './limitOfCombosReducer';
import comboDataReducer from './comboDataReducer';
import exclusionsAndInclusionsReducer from './exclusionsAndInclusionsReducer';
import searchMaterialsReducer from './searchMaterialsReducer';



export default combineReducers({
    limitOfCombos: limitOfCombosReducer,
    comboData: comboDataReducer,
    exclusionsAndInclusions: exclusionsAndInclusionsReducer,
    materials: searchMaterialsReducer
});