import {
    GET_GENERAL_REGIONAL_SALES,
    GET_SALES_ORGANIZATION,

    FILTER_REGIONAL_SALES_DIRECTORATE,
    SET_REGIONAL_SALES_DIRECTORATE,
    SET_SALES_ORGANIZATION
} from '../types'

import axiosClient from '../../config/axios'

/*
 * Get data
*/

export function getAllData(){
    return async(dispatch) => {

        try {
            const regionalDirectorateSales = await axiosClient.get('/direccionRegionalVentas');
            const salesOrganization = await axiosClient.get('/organizacionVentas');

            dispatch( getGeneralRegionalSales(regionalDirectorateSales.data) );
            dispatch( getSalesOrganization(salesOrganization.data) );

        } catch (error) {
            console.log('this is the error: ', error);
        }
    }
}

const getGeneralRegionalSales = regionalDirectorateSales => ({
    type: GET_GENERAL_REGIONAL_SALES,
    payload: regionalDirectorateSales
})

const getSalesOrganization = salesOrganization => ({
    type: GET_SALES_ORGANIZATION,
    payload: salesOrganization
})

/*
 * Set regional sales directorate
*/

export function setRegionalSalesDirectorate(RSD){
    return (dispatch) => {
        dispatch( setRSD( RSD ) );

        dispatch( filteredRSD(RSD) )

    }
}



const setRSD = RSD => ({
    type: SET_REGIONAL_SALES_DIRECTORATE,
    payload: RSD
})

const filteredRSD = RSD => ({
    type: FILTER_REGIONAL_SALES_DIRECTORATE,
    payload: RSD
})

/*
 * Set sales organization
*/
export function setSalesOrganization(SO){
    return (dispatch) => {
        dispatch( setSO(  ) );
    }
}

const setSO = SO => ({
    type: SET_REGIONAL_SALES_DIRECTORATE,
    payload: SO
})