import {
    GET_LIST_OF_COMBOS,
    GET_LIST_OF_COMBOS_SUCCESS,
    GET_LIST_OF_COMBOS_ERROR,
} from '../types';

import { _getCombos } from '../../services/combosGenerator';

/*
 * Get all list of combos
 */

export function getAllListOfCombosAction() {
    return async dispatch => {
        dispatch(getAllListOfCombos());
        try {
            const listOfCombos = await _getCombos();
            dispatch(getAllLimitOfCombosSuccess(listOfCombos));
        } catch (error) {
            console.log('this is the error: ', error);
            dispatch(getAllListOfCombosError(error));
        }
    };
}

const getAllListOfCombos = () => ({
    type: GET_LIST_OF_COMBOS,
    payload: true,
});

const getAllLimitOfCombosSuccess = listOfCombos => ({
    type: GET_LIST_OF_COMBOS_SUCCESS,
    payload: listOfCombos,
});

const getAllListOfCombosError = error => ({
    type: GET_LIST_OF_COMBOS_ERROR,
    payload: error,
});
