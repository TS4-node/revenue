import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import limitOfCombosReducer from './limitOfCombosReducer';
import comboDataReducer from './comboDataReducer';
import exclusionsAndInclusionsReducer from './exclusionsAndInclusionsReducer';
import searchMaterialsReducer from './searchMaterialsReducer';
import tabsViewCreateComboReducer from './tabsViewCreateComboReducer';
import combosListReducer from './combosListReducer';

const whitelist = [
    'limitOfCombos',
    'comboData',
    'exclusionsAndInclusions',
    'materials',
    'currentViewIndexCreateCombo',
    'listOfCombos',
];

const persistConfig = {
    key: 'root',
    storage,
    whitelist,
};

const rootReducer = combineReducers({
    limitOfCombos: limitOfCombosReducer,
    comboData: comboDataReducer,
    exclusionsAndInclusions: exclusionsAndInclusionsReducer,
    materials: searchMaterialsReducer,
    currentViewIndexCreateCombo: tabsViewCreateComboReducer,
    listOfCombos: combosListReducer,
});

export default persistReducer(persistConfig, rootReducer);
