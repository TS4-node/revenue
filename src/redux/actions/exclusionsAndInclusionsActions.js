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
	SET_REGIONAL_SALES_DIRECTORATE,
	FILTER_REGIONAL_SALES_DIRECTORATE,

	GET_SALES_ORGANIZATION,
	SET_SALES_ORGANIZATION,
	FILTER_SALES_ORGANIZATION,

	GET_SALES_OFFICE,
	SET_SALES_OFFICE,
	FILTER_SALES_OFFICE,

	GET_CLIENTS,
	SET_CLIENTS_EXCLUSION,
	SET_CLIENTS_INCLUSION,

	SET_CLIENTS_EXCLUSION_CSV,
	SET_FILENAME_EXCLUSION,
	CLEAR_EXCLUSION,

	SET_CLIENTS_INCLUSION_CSV,
	SET_FILENAME_INCLUSION,
	CLEAR_INCLUSION
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
 * Clients | Customers
*/

/* E X C L U S I O N S */

//Exclusion in Select Tables
export function setClientsExclusionAction(clients) {
	return dispatch => {
		dispatch(setClientsExclusion(clients));
		// dispatch(filteredClients(clients));
	};
}

const setClientsExclusion = clients => ({
	type: SET_CLIENTS_EXCLUSION,
	payload: clients
});

//Exclusion from CSV
export function setClientsExclusionCSVAction(clients) {
	return dispatch => {
		dispatch(setClientsExclusionCSV(clients));
		// dispatch(filteredClients(clients));
	};
}

const setClientsExclusionCSV = clients => ({
	type: SET_CLIENTS_EXCLUSION_CSV,
	payload: clients
});

//Exclusion from react-data-table
export function setFileNameExclusionsAction(fileNames) {
	return dispatch => {
		dispatch(setFileNameExclusion(fileNames));
		// dispatch(filteredClients(clients));
	};
}

const setFileNameExclusion = fileNames => ({
	type: SET_FILENAME_EXCLUSION,
	payload: fileNames
});

//Clear Exclusions
export function clearExclusionsAction() {
	return dispatch => {
		dispatch(clearExclusions());
	};
}

const clearExclusions = () => ({
	type: CLEAR_EXCLUSION,
});


/* I N C L U S I O N S */

//Inclusion in Select Tables
export function setClientsInclusionAction(clients) {
	return dispatch => {
		dispatch(setClientsInclusion(clients));
		// dispatch(filteredClients(clients));
	};
}

const setClientsInclusion = clients => ({
	type: SET_CLIENTS_INCLUSION,
	payload: clients
});

//Inclusion from CSV
export function setClientsInclusionCSVAction(clients) {
	return dispatch => {
		dispatch(setClientsInclusionCSV(clients));
		// dispatch(filteredClients(clients));
	};
}

const setClientsInclusionCSV = clients => ({
	type: SET_CLIENTS_INCLUSION_CSV,
	payload: clients
});

//Inclusion from react-data-table
export function setFileNameInclusionsAction(fileNames) {
	return dispatch => {
		dispatch(setFileNameInclusion(fileNames));
		// dispatch(filteredClients(clients));
	};
}

const setFileNameInclusion = fileNames => ({
	type: SET_FILENAME_INCLUSION,
	payload: fileNames
});

//Clear Inclusions
export function clearInclusionsAction() {
	return dispatch => {
		dispatch(clearInclusions());
	};
}

const clearInclusions = () => ({
	type: CLEAR_INCLUSION,
});