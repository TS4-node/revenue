import {
    GET_GENERAL_DIRECTORATE_SALES,
    GET_GENERAL_DIRECTORATE_SALES_SUCCES,
    GET_GENERAL_DIRECTORATE_SALES_ERROR
} from '../types'
import axiosClient from '../../config/axios';

/*
 * Get all regional sales departments
 */

export function getAllGeneralDirectorateSalesAction(){
    return async (dispatch) => {
        dispatch(getGeneralDirectorateSales())
        try {
            const generalDirectorateSales = await axiosClient.get('/direccionGeneralVentas');
            dispatch( getGeneralDirectorateSalesSuccess(generalDirectorateSales.data) );
        } catch (error) {
            console.log('this is the error: ', error);
            dispatch( getGeneralDirectorateSalesError() );
        }
    }
}

const getGeneralDirectorateSales = () => ({
    type: GET_GENERAL_DIRECTORATE_SALES,
    payload: true
})

const getGeneralDirectorateSalesSuccess = generalDirectorateSales => ({
    type: GET_GENERAL_DIRECTORATE_SALES_SUCCES,
    payload: generalDirectorateSales
})

const getGeneralDirectorateSalesError = () => ({
    type: GET_GENERAL_DIRECTORATE_SALES_ERROR,
    payload: true
})