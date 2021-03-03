import {
    GET_GENERAL_DIRECTORATE_SALES,
    GET_GENERAL_DIRECTORATE_SALES_SUCCES,
    GET_GENERAL_DIRECTORATE_SALES_ERROR
} from '../types'

const initialState = {
    generalDirectorateSales: [],
    loading: false,
    error: false
}

// eslint-disable-next-line import/no-anonymous-default-export
export default function ( state = initialState, { type, payload }){
    switch (type) {

        case GET_GENERAL_DIRECTORATE_SALES:
            return{
                ...state,
                loading: payload //true
            }

            case GET_GENERAL_DIRECTORATE_SALES_SUCCES:
                return{
                    ...state,
                    loading: false,
                    generalDirectorateSales: payload
                }

            case GET_GENERAL_DIRECTORATE_SALES_ERROR:
                return{
                    ...state,
                    loading: false,
                    error: payload
                }
        default:
            return state;
    }
}