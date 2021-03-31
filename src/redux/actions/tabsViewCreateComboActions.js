import { SET_VIEW, SET_NESTED_VIEW, CLEAR_ALL_INDEX_VIEWS } from '../types'

export function setTabViewAction(indexView) {
    return (dispatch) => {
        dispatch(setTabView(indexView));
    }
}

const setTabView = indexView => ({
    type: SET_VIEW,
    payload: indexView
});



export function setTabNestedViewAction(indexNestedView) {
    return (dispatch) => {
        dispatch(setTabNestedView(indexNestedView));
    }
}

const setTabNestedView = indexNestedView => ({
    type: SET_NESTED_VIEW,
    payload: indexNestedView
});


export function clearAllIndexAction() {
    return (dispatch) => {
        dispatch(clearAllIndex());
    }
}

const clearAllIndex = () => ({
    type: CLEAR_ALL_INDEX_VIEWS
});