/*  COMBOS HEROKU
 *  March 2021
 *
 *  Author: Alejandro Montes de Oca TS4
 *  Description: Actions for the view create combo -> Tab #2 "EXCLUSIONS AND INCLUSIONS"
 *  =========================================================================
 *  Information about changes:
 *
 *  No.         Date.        Author.      Description.
 *
 *
*/
import {
	GET_GENERAL_REGIONAL_SALES,
	GET_SALES_ORGANIZATION,
	GET_SALES_OFFICE,
	GET_CLIENTS,
	SET_REGIONAL_SALES_DIRECTORATE,
	SET_SALES_ORGANIZATION,
	SET_SALES_OFFICE,
	SET_CLIENTS,
	FILTER_REGIONAL_SALES_DIRECTORATE,
	FILTER_SALES_ORGANIZATION,
	FILTER_SALES_OFFICE,
	FILTER_CLIENTS
} from '../types';
import { _getRegionalDirectorateSales, _getsalesOrganization, _getsalesOffice, _getCustomers } from '../../services/combosGenerator'

/*
 * GET ALL DATA !!
 */

export function getAllDataAction() {
	return async dispatch => {
		try {
			const regionalDirectorateSales = await _getRegionalDirectorateSales();
			const salesOrganization = await _getsalesOrganization();
			const salesOffice = await _getsalesOffice();
			const clients = await _getCustomers();

			dispatch(getGeneralRegionalSales(regionalDirectorateSales));
			dispatch(getSalesOrganization(salesOrganization));
			dispatch(getSalesOffice(salesOffice));
			dispatch(getClients(clients));
		} catch (error) {
			console.log('this is the error: ', error);
		}
	};
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

const getClients = clients => ({
	type: GET_CLIENTS,
	payload: clients
});
/*
 * Set regional sales directorate
 */
export function setRegionalSalesDirectorateAction(RSD) {
	return dispatch => {
		dispatch(setRegionalSalesDirectorate(RSD));
		dispatch(filteredRegionalSalesDirectorate(RSD));
	};
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
export function setSalesOrganizationAction(salesOrganization) {
	return dispatch => {
		dispatch(setSalesOrganization(salesOrganization));

		dispatch(filteredSalesOrganization(salesOrganization));
	};
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
export function setSalesOfficeAction(salesOffice) {
	return dispatch => {
		dispatch(setSalesOffice(salesOffice));
		dispatch(filteredSalesOffice(salesOffice));
	};
}

const setSalesOffice = salesOffice => ({
	type: SET_SALES_OFFICE,
	payload: salesOffice
});

const filteredSalesOffice = salesOffice => ({
	type: FILTER_SALES_OFFICE,
	payload: salesOffice
});

/*
 * Set clients
 */
export function setClientsAction(clients) {
	return dispatch => {
		dispatch(setClients(clients));
		dispatch(filteredClients(clients));
	};
}

const setClients = salesOffice => ({
	type: SET_SALES_OFFICE,
	payload: salesOffice
});

const filteredClients = salesOffice => ({
	type: FILTER_SALES_OFFICE,
	payload: salesOffice
});
