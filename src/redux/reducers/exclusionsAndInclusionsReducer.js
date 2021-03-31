/*  COMBOS HEROKU
 *  March 2021
 *
 *  Author: Alejandro Montes de Oca TS4
 *  Description: Reducer for the view create combo -> Tab #2 "EXCLUSIONS AND INCLUSIONS"
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
	CLEAR_INCLUSION,

	CLEAR_EXCLUSIONS_AND_INCLUSIONS
} from '../types';

const initialState = {
	GET_regionalSalesDirectorate: [],
	GET_salesOrganization: [],
	GET_salesOffice: [],
	GET_clients: [],

	SET_regionalSalesDirectorate: [],
	SET_salesOrganization: [],
	SET_salesOffice: [],
	SET_clientsExclusion: [],
	SET_clientsInclusion: [],

	fileNamesExclusions: [],
	fileNamesInclusions: [],

	FILTERED_regionalSalesDirectorate: [],
	FILTERED_salesOrganization: [],
	FILTERED_salesOffice: []
};

// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = initialState, { type, payload }) {
	switch (type) {
		/*
		 * CLEAR ALL STATE
		*/
		case CLEAR_EXCLUSIONS_AND_INCLUSIONS:
			return {
				GET_regionalSalesDirectorate: [],
				GET_salesOrganization: [],
				GET_salesOffice: [],
				GET_clients: [],
				SET_regionalSalesDirectorate: [],
				SET_salesOrganization: [],
				SET_salesOffice: [],
				SET_clientsExclusion: [],
				SET_clientsInclusion: [],
				fileNamesExclusions: [],
				fileNamesInclusions: [],
				FILTERED_regionalSalesDirectorate: [],
				FILTERED_salesOrganization: [],
				FILTERED_salesOffice: []
			}


		/*
		 *  GET
		*/
		case GET_GENERAL_REGIONAL_SALES:
			return {
				...state,
				GET_regionalSalesDirectorate: payload
			};

		case GET_SALES_ORGANIZATION:
			return {
				...state,
				GET_salesOrganization: payload
			};

		case GET_SALES_OFFICE:
			return {
				...state,
				GET_salesOffice: payload
			};

		case GET_CLIENTS:
			return {
				...state,
				GET_clients: payload
			};

		/*
		 *  SET
		*/
		case SET_REGIONAL_SALES_DIRECTORATE:
			return {
				...state,
				SET_regionalSalesDirectorate: payload
			};

		case SET_SALES_ORGANIZATION:
			return {
				...state,
				SET_salesOrganization: payload
			};

		case SET_SALES_OFFICE:
			return {
				...state,
				SET_salesOffice: payload
			};

		/* Clients Exclusion */
		case SET_CLIENTS_EXCLUSION:
		    return {
		        ...state,
		        SET_clientsExclusion: state.SET_clientsExclusion.concat(payload)
		    };

		case SET_CLIENTS_EXCLUSION_CSV:
			return {
				...state,
				SET_clientsExclusion: state.SET_clientsExclusion.concat(payload)
			};

		case SET_FILENAME_EXCLUSION:
			return{
				...state,
				fileNamesExclusions: state.fileNamesExclusions.concat(payload)
			}

		case CLEAR_EXCLUSION:
			return{
				...state,
				fileNamesExclusions: [],
				SET_clientsExclusion: []
			}

		/* Clients Inclusion */
		case SET_CLIENTS_INCLUSION:
			return {
				...state,
				SET_clientsInclusion: state.SET_clientsInclusion.concat(payload)
			};

		case SET_CLIENTS_INCLUSION_CSV:
			return{
				...state,
				SET_clientsInclusion: state.SET_clientsInclusion.concat(payload)
			}

		case SET_FILENAME_INCLUSION:
			return{
				...state,
				fileNamesInclusions: state.fileNamesInclusions.concat(payload)
			}

		case CLEAR_INCLUSION:
			return{
				...state,
				fileNamesInclusions: [],
				SET_clientsInclusion: []
			}
		/*
		 *  FILTER
		*/
		case FILTER_REGIONAL_SALES_DIRECTORATE:
			return {
				...state,
				FILTERED_salesOrganization: state.GET_salesOrganization.filter(
					organization => {
						let ok = false;
						for (let i = 0; i < payload.length && !ok; i++) {
							let direction = payload[i];
							if (direction['id'] == organization['idDGR']) {
								ok = true;
							}
						}
						return ok;
					})
			};

		case FILTER_SALES_ORGANIZATION:
			return {
				...state,
				FILTERED_salesOffice: state.GET_salesOffice.filter(
					office => {
						let ok = false;
						for (let i = 0; i < payload.length && !ok; i++) {
							let organization = payload[i];
							if (organization['id'] == office['IdOV']) {
								ok = true;
							}
						}
						return ok;
					})
			};

		case FILTER_SALES_OFFICE:
			return {
				...state,
				FILTERED_clients: state.GET_clients.filter(
					client => {
						let ok = false;
						for (let i = 0; i < payload.length && !ok; i++) {
							let office = payload[i];
							if (office['id'] == client['idOV']) {
								ok = true;
							}
						}
						return ok;
					})
			};

		default:
			return state;
	}
}

function getUniqueListBy(arr, key) {
    return [...new Map(arr.map(item => [item[key], item])).values()]
}

// state.fileNamesExclusions.length === 0 ?state.fileNamesExclusions.concat(payload) : getUniqueListBy(state.fileNamesExclusions.concat(payload), 'id')