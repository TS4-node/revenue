/*  COMBOS HEROKU
 *  March 2021
 *
 *  Author: Alejandro Montes de Oca TS4
 *  Description: Reducer for the view create combo -> Tab #1 "DATA OF COMBO"
 *  =========================================================================
 *  Information about changes:
 *
 *  No.         Date.        Author.      Description.
 *
 *
*/
import {
    CREATE_DATA_COMBO,
    CLEAR_DATA_COMBO
} from '../types'

const initialState = {
    comboData: {
        fechaIni: '',
        fechaFin: '',
        descripcionCorta: '',
        descripcionLarga: '',
        agrupadorPrecios: [],
        maxCombosVentas: 0,
        maxCombosCliente: 0,
        moneda: '',
        aplicaciones: { allmobile: false, televenta: false, b2b: false, dbr: false }
    }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = initialState, { type, payload }) {
    switch (type) {

        case CREATE_DATA_COMBO:
            return {
                ...state,
                comboData: payload
            }

        case CLEAR_DATA_COMBO:
            return {
                ...state,
                comboData: initialState.comboData
            }

        default:
            return state;
    }
}