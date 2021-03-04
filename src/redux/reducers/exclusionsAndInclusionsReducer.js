import {
    GET_GENERAL_REGIONAL_SALES,
    GET_SALES_ORGANIZATION,
    FILTER_REGIONAL_SALES_DIRECTORATE,

    SET_REGIONAL_SALES_DIRECTORATE,
    SET_SALES_ORGANIZATION
} from '../types'

const initialState = {
    GET_regionalSalesDirectorate: [],
    GET_salesOrganization: [],

    FILTERED_regionalSalesDirectorate: [],

    SET_regionalSalesDirectorate: [],
    SET_salesOrganization: []
}

// eslint-disable-next-line import/no-anonymous-default-export
export default function( state = initialState, { type, payload }){
    switch (type) {

        case GET_GENERAL_REGIONAL_SALES:
            return {
                ...state,
                GET_regionalSalesDirectorate: payload
            }

        case GET_SALES_ORGANIZATION:
            return {
                ...state,
                GET_salesOrganization: payload
            }

        case SET_REGIONAL_SALES_DIRECTORATE:
            return{
                ...state,
                SET_regionalSalesDirectorate: payload
            }

        case FILTER_REGIONAL_SALES_DIRECTORATE:
            return{
                ...state,
                FILTERED_regionalSalesDirectorate: state.GET_salesOrganization.filter(
                                                (organization) => {
                                                        let ok = false;
                                                        for (let i = 0; i < payload.length && !ok; i++) {
                                                            let direction = payload[i];
                                                            if (direction['id'] == organization['idDGR']) {
                                                                ok = true;
                                                            }
                                                        }
                                                        return ok;
                                                })
            }

        default:
            return state;
    }

}
