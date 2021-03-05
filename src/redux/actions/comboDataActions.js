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
    type: CLEAR_DATA_COMBO,
    payload: {}
})