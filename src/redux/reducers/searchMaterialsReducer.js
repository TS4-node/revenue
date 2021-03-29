import {
    GET_PRODUCTS,
    SET_PRODUCTS,
    CLEAR_PRODUCTS,
    SET_QUOTA
} from '../types';

const initialState = {
    GET_products: [],
    SET_products: [],
    SET_quota: []
}

// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = initialState, { type, payload }) {

    switch (type) {

        case GET_PRODUCTS:
            return {
                ...state,
                GET_products: payload
            }

        case SET_PRODUCTS:
            return{
                ...state,
                SET_products: payload
            }

        case CLEAR_PRODUCTS:
            return{
                ...state,
                SET_products: []
            }

        case SET_QUOTA:
            return{
                ...state,
                SET_quota: payload
            }

        default:
            return state;
    }
}