/*	COMBOS HEROKU
 *  March 2021
 *
 *  Author: Alejandro Montes de Oca TS4
 *  Description: In this document I generated the functions to be able to filter elements
 *  in the tables ("limits of combos", "Regional Directorate Sales", "Sales Organziation", etc)
 *  of react-data-table with the help of the TableFilter.jsx component
 *  =========================================================================
 *  Information about changes:
 *
 *  No.         Date.        Author.      		Description.
 *
 */

/* eslint-disable array-callback-return */

export const filterLimitOfCombos = (searchItem, setFoundItem, limitsOfCombos) => {
    if (searchItem.length === 1) {
        setFoundItem(limitsOfCombos);
    } else {
        let searchResult = limitsOfCombos.filter(item => {
            if (item.numeroSAP.toString().includes(searchItem)) {
                return item;
            }
        });
        setFoundItem(searchResult);
    }
}

export const filterGeneralDirectorateSales = (searchItem, idSAP, setFoundItem, generalDirectorateSales) => {

    if (idSAP) {
        if (searchItem.length === 1) {
            setFoundItem(generalDirectorateSales)
        } else {
            let searchResult = generalDirectorateSales.filter(item => {
                if (item.id.toString().toLowerCase().includes(searchItem)) {
                    return item;
                }
            });
            setFoundItem(searchResult);
        }
    } else {
        if (searchItem.length === 1) {
            setFoundItem(generalDirectorateSales)
        } else {
            let searchResult = generalDirectorateSales.filter(item => {
                if (item.id.toString().toLowerCase().includes(searchItem) ||
                    item.nombre.toLowerCase().includes(searchItem.toLowerCase()) ||
                    item.direccionRegionalVentas.toLowerCase().includes(searchItem.toLowerCase())
                ) {
                    return item;
                }
            });
            setFoundItem(searchResult);
        }
    }
}

export const filterSalesOrganization = (searchItem, idSAP, setFoundItem, salesOrganization) => {

    if (idSAP) {
        if (searchItem.length === 1) {
            setFoundItem(salesOrganization)
        } else {
            let searchResult = salesOrganization.filter(item => {
                if (item.id.toString().includes(searchItem)) {
                    return item;
                }
            });
            setFoundItem(searchResult);
        }
    } else {
        if (searchItem.length === 1) {
            setFoundItem(salesOrganization)
        } else {
            let searchResult = salesOrganization.filter(item => {
                if (item.id.toString().includes(searchItem) ||
                    item.nombre.toLowerCase().includes(searchItem.toLowerCase()) ||
                    item.direccionRegionalVentas.toLowerCase().includes(searchItem.toLowerCase())
                ) {
                    return item;
                }
            });
            setFoundItem(searchResult);
        }
    }
}

export const filterSalesOffice = (searchItem, idSAP, setFoundItem, salesOffice) => {

    if (idSAP) {
        if (searchItem.length === 1) {
            setFoundItem(salesOffice)
        } else {
            let searchResult = salesOffice.filter(item => {
                if (item.id.toString().toLowerCase().includes(searchItem.toLowerCase())) {
                    return item;
                }
            });
            setFoundItem(searchResult);
        }
    } else {
        if (searchItem.length === 1) {
            setFoundItem(salesOffice)
        } else {
            let searchResult = salesOffice.filter(item => {
                if (item.id.toString().toLowerCase().includes(searchItem.toLowerCase()) ||
                    item.nombre.toLowerCase().includes(searchItem.toLowerCase()) ||
                    item.direccionRegionalVentas.toLowerCase().includes(searchItem.toLowerCase())
                ) {
                    return item;
                }
            });
            setFoundItem(searchResult);
        }
    }
}

export const filterCustomers = (searchItem, idSAP, setFoundItem, customers) => {

    if (idSAP) {
        if (searchItem.length === 1) {
            setFoundItem(customers)
        } else {
            let searchResult = customers.filter(item => {
                if (item.id.toString().toLowerCase().includes(searchItem)) {
                    return item;
                }
            });
            setFoundItem(searchResult);
        }
    } else {
        if (searchItem.length === 1) {
            setFoundItem(customers)
        } else {
            let searchResult = customers.filter(item => {
                if (item.id.toString().toLowerCase().includes(searchItem) ||
                    item.nombre.toLowerCase().includes(searchItem.toLowerCase()) ||
                    item.oficinaVentas.toLowerCase().includes(searchItem.toLowerCase()) ||
                    item.agrupadorPrecios.toLowerCase().includes(searchItem.toLowerCase())
                ) {
                    return item;
                }
            });
            setFoundItem(searchResult);
        }
    }
}


export const filterItems = (searchItem, setFoundItem, categoryList) => {


    if (searchItem.length === 1) setFoundItem(categoryList);
    else {
        let searchResult = categoryList.filter(item => {
            if (item.sku.toString().toLowerCase().includes(searchItem) ||
                item.material.toLowerCase().includes(searchItem.toLowerCase()) ||
                item.categoria.toLowerCase().includes(searchItem.toLowerCase()) ||
                item.familia.toLowerCase().includes(searchItem.toLowerCase())
            ) {
                return item;
            }
        });
        setFoundItem(searchResult);
    }
}
