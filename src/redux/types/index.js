/*  COMBOS HEROKU
 *  March 2021
 *
 *  Author: Alejandro Montes de Oca TS4
 *  Description: types to consume in the different reducers in the app, each one 
 *  has a comment in which it is used
 *  =========================================================================
 *  Information about changes:
 *
 *  No.         Date.        Author.      Description.
 *
 *
*/

/*  limit of Combos */
export const GET_LIMIT_OF_COMBOS = 'GET_LIMIT_OF_COMBOS';
export const GET_LIMIT_OF_COMBOS_SUCCESS = 'GET_LIMIT_OF_COMBOS_SUCCESS';
export const GET_LIMIT_OF_COMBOS_ERROR = 'GET_LIMIT_OF_COMBOS_ERROR'; //no action for the error yet
export const ADD_LIMIT_OF_COMBO = 'ADD_LIMIT_OF_COMBO';
export const ADD_LIMIT_OF_COMBO_SUCCESS = 'ADD_LIMIT_OF_COMBO_SUCCESS';
export const ADD_LIMIT_OF_COMBO_ERROR = 'ADD_LIMIT_OF_COMBO_ERROR'; //no action for the error yet

/*  combo data    */
export const CREATE_DATA_COMBO = 'CREATE_DATA_COMBO';
export const CLEAR_DATA_COMBO = 'CLEAR_DATA_COMBO';


/*  exclusion and inclusions    */

//regional sales department
export const GET_GENERAL_REGIONAL_SALES = 'GET_GENERAL_DIRECTORATE_SALES';
export const SET_REGIONAL_SALES_DIRECTORATE = 'SET_REGIONAL_SALES_DIRECTORATE';
export const FILTER_REGIONAL_SALES_DIRECTORATE = 'FILTER_REGIONAL_SALES_DIRECTORATE';

//sales organization
export const GET_SALES_ORGANIZATION = 'GET_SALES_ORGANIZATION';
export const SET_SALES_ORGANIZATION = 'SET_SALES_ORGANIZATION';
export const FILTER_SALES_ORGANIZATION = 'FILTER_SALES_ORGANIZATION';

//sales office
export const GET_SALES_OFFICE = 'GET_SALES_OFFICE';
export const SET_SALES_OFFICE = 'SET_SALES_OFFICE';
export const FILTER_SALES_OFFICE = 'FILTER_SALES_OFFICE';

//clients
export const GET_CLIENTS = 'GET_CLIENTS';
export const SET_CLIENTS_EXCLUSION = 'SET_CLIENTS_EXCLUSION';
export const SET_CLIENTS_INCLUSION = 'SET_CLIENTS_INCLUSION';

//clients -> Exclusions
export const SET_CLIENTS_EXCLUSION_CSV = 'SET_CLIENTS_EXCLUSION_CSV';
export const SET_FILENAME_EXCLUSION = 'SET_FILENAME_EXCLUSION';
export const CLEAR_EXCLUSION = 'CLEAR_EXCLUSION'

//clients -> Inclusions
export const SET_CLIENTS_INCLUSION_CSV = 'SET_CLIENTS_INCLUSION_CSV';
export const SET_FILENAME_INCLUSION = 'SET_FILENAME_INCLUSION';
export const CLEAR_INCLUSION = 'CLEAR_INCLUSION'
