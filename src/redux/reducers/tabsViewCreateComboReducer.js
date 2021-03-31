import { SET_VIEW, SET_NESTED_VIEW, CLEAR_ALL_INDEX_VIEWS } from '../types'

const initialState = {
    currentTabView: 0,
    currentNestedView: 0
}


// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = initialState, { type, payload }) {

    switch (type) {
        case SET_VIEW:
            return {
                ...state,
                currentTabView: payload
            }

        case SET_NESTED_VIEW:
            return {
                ...state,
                currentNestedView: payload
            }

        case CLEAR_ALL_INDEX_VIEWS:
            return{
                currentTabView: 0,
                currentNestedView: 0
            }

        default:
            return state;
    }
}