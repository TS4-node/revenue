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
                if (item.id.toString().includes(searchItem)) {
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
                if (item.id.toString().includes(searchItem) ||
                    item.nombre.toLowerCase().includes(searchItem.toLocaleLowerCase()) ||
                    item.direccionRegionalVentas.toLowerCase().includes(searchItem.toLocaleLowerCase())
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
                    item.nombre.toLowerCase().includes(searchItem.toLocaleLowerCase()) ||
                    item.direccionRegionalVentas.toLowerCase().includes(searchItem.toLocaleLowerCase())
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
                if (item.id.toString().toLowerCase().includes(searchItem.toLocaleLowerCase())) {
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
                if (item.id.toString().toLocaleLowerCase().includes(searchItem.toLocaleLowerCase()) ||
                    item.nombre.toLowerCase().includes(searchItem.toLocaleLowerCase()) ||
                    item.direccionRegionalVentas.toLowerCase().includes(searchItem.toLocaleLowerCase())
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
                if (item.id.toString().toLocaleLowerCase().includes(searchItem) ||
                    item.nombre.toLowerCase().includes(searchItem.toLocaleLowerCase()) ||
                    item.oficinaVentas.toLowerCase().includes(searchItem.toLocaleLowerCase()) ||
                    item.agrupadorPrecios.toLowerCase().includes(searchItem.toLocaleLowerCase())
                ) {
                    return item;
                }
            });
            setFoundItem(searchResult);
        }
    }
}