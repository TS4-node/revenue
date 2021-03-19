import {
	GET_PRODUCTS,
	SET_PRODUCTS,
	CLEAR_PRODUCTS
} from '../types';
import { _getProducts } from '../../services/combosGenerator';

/*
 * GET ALL PRODUCTS AND QUOTAS
*/

export function getAllMaterialsAction() {
	return async dispatch => {
		try {
			const products = await _getProducts();
			// const salesOrganization = await _getsalesOrganization();

			dispatch(getProducts(products));
			// dispatch(getSalesOrganization(salesOrganization));

		} catch (error) {
			console.log('this is the error: ', error);
		}
	};
}

const getProducts = products => ({
	type: GET_PRODUCTS,
	payload: products
});
/*
 * HANDLERS PRODUCTS
*/

export function setProductsAction(products) {
	return dispatch => {
		dispatch(setProducts(products));
	}
}

const setProducts = products => ({
	type: SET_PRODUCTS,
	payload: products
})


export function clearProductsAction() {
	return dispatch => {
		dispatch(clearProducts());
	}
}

const clearProducts = () => ({
	type: CLEAR_PRODUCTS
})