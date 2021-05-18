/*	COMBOS HEROKU
 *  March 2021
 *
 *  Author: Alejandro Montes de Oca TS4
 *  Description: here is the configuration of the items to use the list of options with
 *  help of useSelect, comes with comment in the document in which it is used
 *  =========================================================================
 *  Information about changes:
 *
 *  No.         Date.        Author.      		Description.
 *
*/

//ComboData.jsx
export const optionsListCD = [
	{ value: 'Foco (Tradicional)', label: '42 - Foco (Tradicional)' },
	{ value: 'Distribuidor Modelo', label: '43 - Distribuidor Modelo' }
];

//CreateLimitOfCombo.jsx
export const optionsListComboNivel = [
	// { value: '', label: '' },
	{ value: 'Ninguno', label: 'Ninguno' },
	{ value: 'Oficina de Ventas', label: 'Oficina de Ventas' },
	{ value: 'Organización de Ventas', label: 'Organización de Ventas' },
	{ value: 'Dirección Regional de Ventas', label: 'Dirección Regional de Ventas' },
	{ value: 'Nacional', label: 'Nacional' }
];

export const optionsListSaleStructure = [
	// { value: '', label: '' },
	{ value: 'CMM Metropolitan', label: 'CMM Metropolitan' },
	{ value: 'CMM Michoacana', label: 'CMM Michoacana' },
	{ value: 'CMM Morelos', label: 'CMM Morelos' },
	{ value: 'CMM Macfe', label: 'CMM Macfe' },
	{ value: 'Crear Cliente', label: '+ Crear Cliente' },
];