import axiosClient from '../config/axios';
import {
    URL_limitOfCombos,
    URL_regionalDirectorateSales,
    URL_salesOrganization,
    URL_salesOffice,
    URL_customers
} from './endpoints'


/* Limit of combos */

export const _getLimitsOfCombos = async () => {
    const { data } = await axiosClient.get(URL_limitOfCombos);
    return data;
}

export const _postLimitOfCombo = async limitOfCombo => {
    axiosClient.post(URL_limitOfCombos, limitOfCombo);
}


/* Create Combo */

export const _getRegionalDirectorateSales = async () => {
    const { data } = await axiosClient.get(URL_regionalDirectorateSales);
    return data;
}

export const _getsalesOrganization = async () => {
    const { data } = await axiosClient.get(URL_salesOrganization);
    return data;
}

export const _getsalesOffice = async () => {
    const { data } = await axiosClient.get(URL_salesOffice);
    return data;
}

export const _getCustomers = async () => {
    const { data } = await axiosClient.get(URL_customers);
    return data;
}