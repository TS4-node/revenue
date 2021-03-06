/*	COMBOS HEROKU
 *  March 2021
 *
 *  Author: Alejandro Montes de Oca TS4
 *  Description: configuration to create an axios client and make HTTP requests with a specific domain
 *  =========================================================================
 *  Information about changes:
 *
 *  No.         Date.        Author.      		Description.
 *
 */
import axios from 'axios';

const axiosClient = axios.create({
    baseURL: 'http://localhost:4000'
});

export default axiosClient;