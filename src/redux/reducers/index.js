import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'

import limitOfCombosReducer from './limitOfCombosReducer';
import comboDataReducer from './comboDataReducer';
import exclusionsAndInclusionsReducer from './exclusionsAndInclusionsReducer';
import searchMaterialsReducer from './searchMaterialsReducer';

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['limitOfCombos', 'comboData', 'exclusionsAndInclusions', 'materials']
}

const rootReducer = combineReducers({
    limitOfCombos: limitOfCombosReducer,
    comboData: comboDataReducer,
    exclusionsAndInclusions: exclusionsAndInclusionsReducer,
    materials: searchMaterialsReducer
});

export default persistReducer(persistConfig, rootReducer);