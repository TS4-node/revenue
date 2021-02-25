import {
    GET_LIMIT_OF_COMBOS,
    GET_LIMIT_OF_COMBOS_SUCCESS,
    GET_LIMIT_OF_COMBOS_ERROR,
    ADD_LIMIT_OF_COMBO,
    ADD_LIMIT_OF_COMBO_SUCCESS,
    ADD_LIMIT_OF_COMBO_ERROR
} from '../types'
import axiosClient from '../../config/axios'


/*
 * Get all limit of combos
 */

export function getAllLimitOfCombosAction(){
    return async (dispatch) => {
        dispatch(getAllLimitOfCombos());
        try {
            const limitOfCombos = await axiosClient.get('/limiteCombos');
            console.log(limitOfCombos.data)
            dispatch( getAllLimitOfCombosSuccess(limitOfCombos.data));
        } catch (error) {
            console.log('this is the error: ', error);
            dispatch( getAllLimitOfCombosError() );
        }
    }
}

const getAllLimitOfCombos = () => ({
    type: GET_LIMIT_OF_COMBOS,
    payload: true
})


const getAllLimitOfCombosSuccess = limitOfCombos => ({
    type: GET_LIMIT_OF_COMBOS_SUCCESS,
    payload:limitOfCombos
})

const getAllLimitOfCombosError = () => ({
    type: GET_LIMIT_OF_COMBOS_ERROR,
    payload: true
})


/*
 * create limit of combo
 */

export function createLimitOfComboAction(limitOfCombo){
    return async (dispatch) => {
        dispatch( addLimitOfCombo());
        try {
            await axiosClient.post('/limiteCombos', limitOfCombo);
            dispatch( addLimitOfComboSuccess(limitOfCombo));
        } catch (error) {
            console.log(error)
            dispatch( addLimitOfComboError());
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
    type:ADD_LIMIT_OF_COMBO_ERROR,
    payload: true
})