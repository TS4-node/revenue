import {
    GET_PRODUCTS,
    SET_PRODUCTS,
    CLEAR_PRODUCTS
} from '../types';

const initialState = {
    GET_products: [],
    SET_products: []
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

        default:
            return state;
    }
}