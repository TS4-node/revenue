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
    ADD_LIMIT_OF_COMBO_ERROR
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
            dispatch(getAllLimitOfCombosError());
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

const getAllLimitOfCombosError = () => ({
    type: GET_LIMIT_OF_COMBOS_ERROR,
    payload: true
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
            dispatch(addLimitOfComboError());
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

const addLimitOfComboError = () => ({
    type: ADD_LIMIT_OF_COMBO_ERROR,
    payload: true
})