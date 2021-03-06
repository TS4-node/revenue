/*  COMBOS HEROKU
 *  March 2021
 *
 *  Author: Alejandro Montes de Oca TS4
 *  Description: Reducer for the view modal create a limit of combo
 *  =========================================================================
 *  Information about changes:
 *
 *  No.         Date.        Author.      Description.
 *
 *
*/
import {
    GET_LIMIT_OF_COMBOS,
    GET_LIMIT_OF_COMBOS_ERROR,
    GET_LIMIT_OF_COMBOS_SUCCESS,
    ADD_LIMIT_OF_COMBO,
    ADD_LIMIT_OF_COMBO_SUCCESS,
    ADD_LIMIT_OF_COMBO_ERROR
} from '../types'

const initialState = {
    limitsOfCombos: [],
    loading: false,
    error: false
}

// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = initialState, { type, payload }) {
    switch (type) {

        case GET_LIMIT_OF_COMBOS:
            return {
                ...state,
                loading: payload,//true
            }

        case GET_LIMIT_OF_COMBOS_SUCCESS:
            return {
                ...state,
                loading: false,
                limitsOfCombos: payload
            }

        case GET_LIMIT_OF_COMBOS_ERROR:
        case ADD_LIMIT_OF_COMBO_ERROR:
            return {
                ...state,
                loading: false,
                error: payload
            }

        case ADD_LIMIT_OF_COMBO:
            return {
                ...state,
                loading: payload
            }

        case ADD_LIMIT_OF_COMBO_SUCCESS:
            return {
                ...state,
                loading: false,
                limitsOfCombos: [...state.limitsOfCombos, payload]
            }

        default:
            return state;
    }
}