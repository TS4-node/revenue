import {
    GET_LIST_OF_COMBOS,
    GET_LIST_OF_COMBOS_SUCCESS,
    GET_LIST_OF_COMBOS_ERROR
} from '../types'


const initialState = {
    listOfCombos: [],
    loading: false,
    error: false,
}

// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = initialState, { type, payload }) {

    switch (type) {
        case GET_LIST_OF_COMBOS:
            return {
                ...state,
                loading: payload,//true
            }

        case GET_LIST_OF_COMBOS_SUCCESS:
            return {
                ...state,
                loading: false,
                listOfCombos: payload,
            }

        case GET_LIST_OF_COMBOS_ERROR:
            return {
                ...state,
                loading: false,
                error: payload,
            }

        default:
            return state;
    }
}