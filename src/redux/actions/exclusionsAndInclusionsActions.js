import {
    GET_GENERAL_REGIONAL_SALES,
    GET_SALES_ORGANIZATION,
    GET_SALES_OFFICE,

    SET_REGIONAL_SALES_DIRECTORATE,
    SET_SALES_ORGANIZATION,
    SET_SALES_OFFICE,

    FILTER_REGIONAL_SALES_DIRECTORATE,
    FILTER_SALES_ORGANIZATION,
    FILTER_SALES_OFFICE
} from '../types'

import axiosClient from '../../config/axios'

/*
 * GET ALL DATA !!
*/

export function getAllDataAction(){
    return async(dispatch) => {

        try {
            const regionalDirectorateSales = await axiosClient.get('/direccionRegionalVentas');
            const salesOrganization = await axiosClient.get('/organizacionVentas');
            const salesOffice = await axiosClient.get('/oficinaVentas');

            dispatch( getGeneralRegionalSales(regionalDirectorateSales.data) );
            dispatch( getSalesOrganization(salesOrganization.data) );
            dispatch( getSalesOffice(salesOffice.data) );

        } catch (error) {
            console.log('this is the error: ', error);
        }
    }
}

const getGeneralRegionalSales = regionalDirectorateSales => ({
    type: GET_GENERAL_REGIONAL_SALES,
    payload: regionalDirectorateSales
});

const getSalesOrganization = salesOrganization => ({
    type: GET_SALES_ORGANIZATION,
    payload: salesOrganization
});

const getSalesOffice = salesOffice => ({
    type: GET_SALES_OFFICE,
    payload: salesOffice
});

/*
 * Set regional sales directorate
*/
export function setRegionalSalesDirectorateAction(RSD){
    return (dispatch) => {
        dispatch( setRegionalSalesDirectorate( RSD ) );

        dispatch( filteredRegionalSalesDirectorate(RSD) );
    }
}

const setRegionalSalesDirectorate = RSD => ({
    type: SET_REGIONAL_SALES_DIRECTORATE,
    payload: RSD
});

const filteredRegionalSalesDirectorate = RSD => ({
    type: FILTER_REGIONAL_SALES_DIRECTORATE,
    payload: RSD
});

/*
 * Set sales organization
*/
export function setSalesOrganizationAction(salesOrganization){
    return (dispatch) => {
        dispatch( setSalesOrganization(salesOrganization) );

        dispatch(filteredSalesOrganization(salesOrganization));
    }
}

const setSalesOrganization = salesOrganization => ({
    type: SET_SALES_ORGANIZATION,
    payload: salesOrganization
});

const filteredSalesOrganization = salesOrganization => ({
    type: FILTER_SALES_ORGANIZATION,
    payload: salesOrganization
});

/*
 * Set sales office
*/
export function setSalesOfficeAction(salesOffice){
    return (dispatch) => {
        dispatch( setSalesOffice(salesOffice) );

        dispatch(filteredSalesOffice(salesOffice));
    }
}

const setSalesOffice = salesOffice => ({
    type: SET_SALES_OFFICE,
    payload: salesOffice
});

const filteredSalesOffice = salesOffice => ({
    type: FILTER_SALES_OFFICE,
    payload: salesOffice
});