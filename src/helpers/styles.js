/*	COMBOS HEROKU
 *  March 2021
 *
 *  Author: Alejandro Montes de Oca TS4
 *  Description: In this document it extracts the various configurations for some styles
 *  in external library components (material ui, react-data-table) and leaves the functional
 *  components cleaner and easier to read, each "export" has a comment of the place
 *  where it is consumed that configuration
 *  =========================================================================
 *  Information about changes:
 *
 *  No.         Date.        Author.      		Description.
 *
*/


//for TabsCreateCombo.jsx : div for selector tab active
export const handleDivIndicator = (value) => {
    let selector = document.getElementById('selector');

    let style = 'background-color: #1890ff; height: .22rem; left: 0px; transition: 1s all ease; width:'

    if (value === 0) {
        selector.setAttribute('style', `${style} 300px`);
    }
    if (value === 1) {
        selector.setAttribute('style', `${style} 600px`);
    }
    if (value === 2) {
        selector.setAttribute('style', `${style} 900px`);
    }
    if (value === 3) {
        selector.setAttribute('style', `${style} 1200px`);
    }
}

//for react-data-table in CombosTable.jsx
export const customStylesCT = {
    table: {
        style: {
            border: '1px solid rgba(0, 0, 0, 0.15)',
            height: '24rem'
        }
    },
    headCells: {
        style: {
            backgroundColor: '#E6F7FF',
            color: '#1890FF',
            fontWeight: 'bold',
            textAlign: 'center',
            height: '3.2rem'
        }
    }
}

//for react-data-table in tabs create combo-> SalesOrganization.jsx / SalesOffice.jsx / Customers.jsx
export const customStyles = {
    table: {
        style: {
            border: '1px solid rgba(0, 0, 0, 0.15)',
            borderTop: 'none',
            height: '18rem',
            width: '45rem'
        }
    },
    headCells: {
        style: {
            backgroundColor: '#E6F7FF',
            color: '#1890FF',
            fontWeight: 'bold',
            textAlign: 'center',
            height: '3.2rem'
        }
    }
};

//for react-data-table in GeneralDirectorateSales.jsx
export const customStylesGDS = {
    table: {
        style: {
            border: '1px solid rgba(0, 0, 0, 0.15)',
            height: '12rem',
            width: '45rem'
        }
    },
    headCells: {
        style: {
            backgroundColor: '#E6F7FF',
            color: '#1890FF',
            fontWeight: 'bold',
            textAlign: 'center',
            height: '3.2rem'
        }
    }
}

//for TabsCreateCombo.jsx
export const a11yProps = index => {
    return {
        id: `full-width-tab-${index}`,
        'aria-controls': `full-width-tabpanel-${index}`
    };
}