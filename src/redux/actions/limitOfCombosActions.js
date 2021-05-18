/*  COMBOS HEROKU
 *  March 2021
 *
 *  Author: Alejandro Montes de Oca TS4
 *  Description: Actions for the view modal create a limit of combo
 *  =========================================================================
 *  Information about changes:
 *
 *  No.         Date.        Author.      Description.
 *
 *
*/
import {
    GET_LIMIT_OF_COMBOS,
    GET_LIMIT_OF_COMBOS_SUCCESS,
    GET_LIMIT_OF_COMBOS_ERROR,
    ADD_LIMIT_OF_COMBO,
    ADD_LIMIT_OF_COMBO_SUCCESS,
    ADD_LIMIT_OF_COMBO_ERROR,
    ID_LIMIT_OF_COMBO_CURRENT,
    CLEAR_ID_LIMIT_OF_COMBO_CURRENT
} from '../types'
import { _getLimitsOfCombos, _postLimitOfCombo } from '../../services/combosGenerator'


/*
 * Get all limit of combos
 */

export function getAllLimitOfCombosAction() {
    return async (dispatch) => {
        dispatch(getAllLimitOfCombos());
        try {
            const limitOfCombos = await _getLimitsOfCombos();
            dispatch(getAllLimitOfCombosSuccess(limitOfCombos));
        } catch (error) {
            console.log('this is the error: ', error);
            dispatch(getAllLimitOfCombosError(error));
        }
    }
}

const getAllLimitOfCombos = () => ({
    type: GET_LIMIT_OF_COMBOS,
    payload: true
})


const getAllLimitOfCombosSuccess = limitOfCombos => ({
    type: GET_LIMIT_OF_COMBOS_SUCCESS,
    payload: limitOfCombos
})

const getAllLimitOfCombosError = error => ({
    type: GET_LIMIT_OF_COMBOS_ERROR,
    payload: error
})


/*
 * create limit of combo
 */

export function createLimitOfComboAction(limitOfCombo) {
    return async (dispatch) => {
        dispatch(addLimitOfCombo());
        try {
            await _postLimitOfCombo(limitOfCombo);
            dispatch(addLimitOfComboSuccess(limitOfCombo));
        } catch (error) {
            console.log('this is the error:', error);
            dispatch(addLimitOfComboError(error));
        }
    }
}

const addLimitOfCombo = () => ({
    type: ADD_LIMIT_OF_COMBO,
    payload: true
})

const addLimitOfComboSuccess = limitOfCombo => ({
    type: ADD_LIMIT_OF_COMBO_SUCCESS,
    payload: limitOfCombo
})

const addLimitOfComboError = error => ({
    type: ADD_LIMIT_OF_COMBO_ERROR,
    payload: error
})

/*
 * create a current id limit of combo
 */

export function createCurrentLimitOfComboAction(limitOfCombo) {
    return (dispatch) => {
        dispatch(createCurrentLimitOfCombo(limitOfCombo));
    }
}

const createCurrentLimitOfCombo = limitOfCombo => ({
    type: ID_LIMIT_OF_COMBO_CURRENT,
    payload: limitOfCombo
})

/*
 * clear a current id limit of combo
 */

export function clearIDLimitOfComboAction() {
    return (dispatch) => {
        dispatch(clearIDLimitOfCombo());
    }
}

const clearIDLimitOfCombo = () => ({
    type: CLEAR_ID_LIMIT_OF_COMBO_CURRENT
})

/*
 * select a current id limit of combo
 */

export function selectLimitOfComboAction(limitOfCombo) {
    return (dispatch) => {
        dispatch(selectLimitOfCombo(limitOfCombo));
    }
}

const selectLimitOfCombo = limitOfCombo => ({
    type: ID_LIMIT_OF_COMBO_CURRENT,
    payload: limitOfCombo
})