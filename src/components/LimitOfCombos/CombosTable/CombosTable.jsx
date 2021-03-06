/*	COMBOS HEROKU
 *  March 2021
 *
 *  Author: Alejandro Montes de Oca TS4
 *  Description: handler first table in the limits of combo
 *  =========================================================================
 *  Information about changes:
 *
 *  No.         Date.        Author.      		Description.
 *
 *
*/
import React, { useState, useMemo, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import DataTable from 'react-data-table-component';

import { optionsPagination, columnsCombosTable } from '../../../helpers/reactDataTable';
import { customStylesCT } from '../../../helpers/styles';
import TableFilter from './TableFilter';
import { Spinner } from '../../index';
import { getAllLimitOfCombosAction } from '../../../redux/actions/limitOfCombosActions';



const CombosTable = () => {

	/*    Redux     */
    const dispatch = useDispatch();
	const limitsOfCombos = useSelector(state => state.limitOfCombos.limitsOfCombos);
	const loading = useSelector(state => state.limitOfCombos.loading);
    const getLimitsCombos = () => dispatch(getAllLimitOfCombosAction());

	/*    Local State     */
	const [filterText, setFilterText] = useState('');
	const [resetPaginationToggle, setResetPaginationToggle] = useState(false);

	useEffect(() => {
		getLimitsCombos();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const subHeaderComponentMemo = useMemo(() => {
		const handleClear = () => {
			if (filterText) {
				setResetPaginationToggle(!resetPaginationToggle);
				setFilterText('');
			}
		};

		return (
			<TableFilter onFilter={e => setFilterText(e.target.value)} onClear={handleClear} filterText={filterText} />
		);
	}, [filterText, resetPaginationToggle]);

	const component = loading ? (
		<Spinner />
	) : (
		<>
			<DataTable
				columns={columnsCombosTable}
				data={limitsOfCombos}
				customStyles={customStylesCT}
				paginationComponentOptions={optionsPagination}
				noDataComponent={<span>No se encontró ningún elemento</span>}
				paginationResetDefaultPage={resetPaginationToggle}
				subHeaderComponent={subHeaderComponentMemo}
				dense
				striped
				fixedHeader
				responsive
				subHeader
				highlightOnHover
				pagination
			/>
			{/* <p className='total'>{limitsOfCombos.length} Elementos.</p> */}
		</>
	);

	return <div style={{ marginTop: '-.55rem' }}>{component}</div>;
};

export default CombosTable;
