import {
    GET_GENERAL_REGIONAL_SALES,
    GET_SALES_ORGANIZATION,
    GET_SALES_OFFICE,

    SET_REGIONAL_SALES_DIRECTORATE,
    SET_SALES_ORGANIZATION,
    SET_SALES_OFFICE,

    FILTER_REGIONAL_SALES_DIRECTORATE,
    FILTER_SALES_ORGANIZATION,
    FILTER_SALES_OFFICE
} from '../types'

const initialState = {
    GET_regionalSalesDirectorate: [],
    GET_salesOrganization: [],
    GET_salesOffice: [],

    SET_regionalSalesDirectorate: [],
    SET_salesOrganization: [],
    SET_salesOffice: [],

    FILTERED_regionalSalesDirectorate: [],
    FILTERED_salesOrganization: [],
    FILTERED_salesOffice: []
}

// eslint-disable-next-line import/no-anonymous-default-export
export default function( state = initialState, { type, payload }){
    switch (type) {

        //GET
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

        case GET_SALES_OFFICE:
            return {
                ...state,
                GET_salesOffice: payload
            }

        //SET
        case SET_REGIONAL_SALES_DIRECTORATE:
            return{
                ...state,
                SET_regionalSalesDirectorate: payload
            }

        case SET_SALES_ORGANIZATION:
            return{
                ...state,
                SET_salesOrganization: payload
            }

        case SET_SALES_OFFICE:
            return{
                ...state,
                SET_salesOffice: payload
            }

        //FILTER
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

        case FILTER_SALES_ORGANIZATION:
            return{
                ...state,
                FILTERED_salesOrganization: state.GET_salesOffice.filter(
                                                (office) => {
                                                let ok = false;
                                                for (let i = 0; i < payload.length && !ok; i++) {
                                                // Corta cuando no hay mas following o cuando ya se encontró uno
                                                let organization = payload[i];
                                                if (organization["id"] == office["IdOV"]) {
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
