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
    let selector2 = document.getElementById('selector2');

    let style = 'background-color: #1890ff; height: .22rem; margin-bottom: 0;left: 0px; transition: 1s all ease; width:'
    let style2 = 'background-color: #E6F7FF; height: .22rem; margin-bottom: 0;left: 0px; transition: 1s all ease; width:'

    if (value === 0) {
        selector.setAttribute('style', `${style} 300px`);
        selector2.setAttribute('style', `${style2} 900px`);
    }
    if (value === 1) {
        selector.setAttribute('style', `${style} 600px`);
        selector2.setAttribute('style', `${style2} 600px`);
    }
    if (value === 2) {
        selector.setAttribute('style', `${style} 900px`);
        selector2.setAttribute('style', `${style2} 300px`);
    }
    if (value === 3) {
        selector.setAttribute('style', `${style} 1200px`);
        selector2.setAttribute('style', `${style2} 0px`);
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

//for react-data-table in tabs create combo-> SalesOrganization.jsx / SalesOffice.jsx
export const customStyles = {
    table: {
        style: {
            border: '1px solid rgba(0, 0, 0, 0.15)',
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

//for react-data-table in TableOfExclusions.jsx / TableOfInclusions.jsx
export const customStyles_ = {
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


//DropzoneExclusions.jsx
export const baseStyle = {
	textAlign: 'center',
	margintop: '1rem',
	width: 'auto',
    height: '6.5rem',
	borderStyle: 'dashed',
	borderWidth: 2,
	borderColor: '#eeeeee',
	boxsizing: 'border-box',
	transition: '0.3s ease all',
    background: 'rgba(0, 0, 0, 0.04)'
};

export const baseStyleDrop = {
	textAlign: 'center',
	margintop: '1rem',
	width: 'auto',
	boxsizing: 'border-box',
	transition: '0.3s ease all'
};

export const activeStyle = {
	borderColor: '#1890ff'
};

export const acceptStyle = {
	borderColor: '#008f39',
	background: '#bdecb6'
};

export const rejectStyle = {
	borderColor: '#ff1744'
};