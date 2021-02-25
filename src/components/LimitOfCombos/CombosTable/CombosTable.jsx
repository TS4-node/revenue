import React, { useState, useMemo, useEffect } from 'react'
import DataTable from 'react-data-table-component'
import TableFilter from './TableFilter'
import { Spinner } from '../../index'

import { useDispatch, useSelector } from 'react-redux';
import { getAllLimitOfCombosAction } from '../../../redux/actions/limitOfCombosActions'

const columns = [
    { name: '', selector: 'id', sortable: true, width: '5rem' },
    { name: 'ID Límite', selector: 'IdLimite', sortable: true },
    { name: 'Nivel del Combo', selector: 'nivelCombo', sortable: true },
    { name: 'Estructura de Ventas', selector: 'estructuraVenta', sortable: true },
    { name: 'Combos Permitidos', selector: 'combosPermitidos', sortable: true },
    { name: 'Combos Disponibles', selector: 'CombosDisponibles', sortable: true }
]

const customStyles = {
    table:{
        style: {
            border: '1px solid rgba(0, 0, 0, 0.15)',
            height: '20rem'
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

const CombosTable = () => {

    const [filterText, setFilterText] = useState('');
	const [resetPaginationToggle, setResetPaginationToggle] = useState(false);

    /*
     * Redux
    */

    const dispatch = useDispatch();

    useEffect(() => {
        const getLimitsCombos = () => dispatch( getAllLimitOfCombosAction() );
        getLimitsCombos();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const limitsOfCombos = useSelector( state => state.limitOfCombos.limitsOfCombos);
    const loading = useSelector ( state => state.limitOfCombos.loading );


    // //filtrar elementos
    // const filteredItems = limitsOfCombos.filter(
    //     (item) =>
    //         item.Idlimite &&
    //         item.Idlimite.toLowerCase().includes(filterText.toLowerCase())
    // );

    const subHeaderComponentMemo = useMemo(() => {

		const handleClear = () => {
			if (filterText) {
				setResetPaginationToggle(!resetPaginationToggle);
				setFilterText('');
			}
		};

		return (
			<TableFilter
				onFilter={(e) => setFilterText(e.target.value)}
				onClear={handleClear}
				filterText={filterText}
			/>
		);
	}, [filterText, resetPaginationToggle]);

    const component = loading
        ?<Spinner />
        : (
        <>
            <DataTable
                columns={columns}
                data={limitsOfCombos}
                customStyles={customStyles}
                dense={true}
                striped={true}
                fixedHeader={true}
                responsive={true}
                paginationResetDefaultPage={resetPaginationToggle}
                subHeaderComponent={subHeaderComponentMemo}
                subHeader
                highlightOnHover
                pagination
            />
            {/* <p className='total'>{limitsOfCombos.length} Elementos.</p> */}
            </>
        )

    return (

            <div style={{marginTop: '-.55rem'}}>
                { component }
            </div>

    )
}

export default CombosTable
