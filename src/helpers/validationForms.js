
export const filterLimitOfCombos = (searchItem, setFoundItem, limitsOfCombos) => {
    if (searchItem.length === 1) {
        setFoundItem(limitsOfCombos);
    }else{
        let searchResult = limitsOfCombos.filter( item => {
            if (item.numeroSAP.toString().includes(searchItem) ) {
                return item;
            }
        });
        setFoundItem(searchResult);
    }
}

export const filterGeneralDirectorateSales = (searchItem, idSAP,setFoundItem, generalDirectorateSales) => {

    if(idSAP){
        if (searchItem.length === 1) {
            setFoundItem(generalDirectorateSales)
        }else{
            let searchResult = generalDirectorateSales.filter( item => {
                if (item.numeroSAP.toString().includes(searchItem) ) {
                    return item;
                }
            });
            setFoundItem(searchResult);
        }
    } else {
        if (searchItem.length === 1) {
            setFoundItem(generalDirectorateSales)
        } else {
            let searchResult = generalDirectorateSales.filter( item => {
                    if (item.numeroSAP.toString().includes(searchItem) ||
                        item.nombre.toLowerCase().includes(searchItem.toLocaleLowerCase()) ||
                        item.direccionGeneralVentas.toLowerCase().includes(searchItem.toLocaleLowerCase())
                    ){
                        return item;
                    }
            });
            setFoundItem(searchResult);
        }
    }
}

