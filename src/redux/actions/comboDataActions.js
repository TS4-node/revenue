/*  COMBOS HEROKU
 *  March 2021
 *
 *  Author: Alejandro Montes de Oca TS4
 *  Description: Actions for the view create combo -> Tab #1 "DATA OF COMBO"
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

/*
 *  Create a data combo
 */

export function createDataComboAction(combo) {
    return (dispatch) => {
        dispatch(createDataCombo(combo));
    }
}

const createDataCombo = combo => ({
    type: CREATE_DATA_COMBO,
    payload: combo
})

/*
 * Clear a  data combo
*/

export function clearDataComboAction() {
    return (dispatch) => {
        dispatch(clearDataCombo())
    }
}

const clearDataCombo = () => ({
    type: CLEAR_DATA_COMBO
})