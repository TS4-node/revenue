import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import DataTable from 'react-data-table-component';

import TrashIcon from '../../assets/images/Trash.png';
import { optionsPagination } from '../../helpers/reactDataTable';
import { customStylesCT } from '../../helpers/styles';
import { Spinner } from '../index';
import { getAllListOfCombosAction } from '../../redux/actions/combosListAction';

const AllCombosTable = () => {
	/*  Redux   */
	const dispatch = useDispatch();
	const listOfCombos = useSelector(state => state.listOfCombos.listOfCombos);
	const loading = useSelector(state => state.listOfCombos.loading);
	const getListOfCombos = () => dispatch(getAllListOfCombosAction());

	useEffect(() => {
		getListOfCombos();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const Detail = row => <p className='m-0 link-table'>Ver Detalle</p>;

	const ClonateCombo = row => (
		<p
			className='m-0 link-table'
			value={row.IdLimite}
			name={row.IdLimite}
			onClick={'() => createCombo(row.IdLimite)'}
		>
			Clonar Combo
		</p>
	);

	const TrashImage = row => (
		<img
			src={TrashIcon}
			alt='Trash icon'
			style={{ height: '18px', width: '14px', cursor: 'pointer' }}
			value={row.sku}
			name={row.sku}
			onClick={'e => handleDeselectOption(e)'}
		/>
	);

	const columnsCombosTable = [
		{
			name: '',
			selector: 'id',
			sortable: true,
			width: '3rem',
			center: true,
		},
		{
			name: 'ID Combo',
			selector: 'IdCombo',
			sortable: true,
			width: '7.9rem',
		},
		{
			name: 'Descripcion Corta',
			selector: 'descripcionCorta',
			sortable: true,
			width: '9.5rem',
		},
		{
			name: 'Descripcion Larga',
			selector: 'descripcionLarga',
			sortable: true,
			width: '9.5rem',
		},
		{
			name: 'Estructura de Venta',
			selector: 'estructuraVentas',
			wrap: true,
			sortable: true,
			center: true,
			width: '10.5rem',
		},
		{
			name: 'Fecha Inicio',
			selector: 'fechaIni',
			sortable: true,
			center: true,
			width: '9rem',
		},
		{
			name: 'Fecha Fin',
			selector: 'fechaFin',
			sortable: true,
			center: true,
			width: '9rem',
		},
		{
			name: 'Estatus',
			selector: 'estatus',
			sortable: true,
			center: true,
			width: '6rem',
		},
		{
			name: '',
			selector: '',
			center: true,
			width: '6.1rem',
			cell: Detail,
		},
		{
			name: '',
			selector: '',
			center: true,
			width: '7.3rem',
			cell: ClonateCombo,
		},
		{
			name: '',
			selector: '',
			center: true,
			width: '3.3rem',
			cell: TrashImage,
		},
	];

	const component = loading ? (
		<Spinner />
	) : (
		<>
			<DataTable
				columns={columnsCombosTable}
				data={listOfCombos}
				customStyles={customStylesCT}
				paginationComponentOptions={optionsPagination}
				noDataComponent={<span>No se encontró ningún elemento</span>}
				dense
				striped
				fixedHeader
				responsive
				subHeader
				highlightOnHover
				pagination
			/>
		</>
	);

	return <div style={{ marginTop: '-.55rem' }}>{component}</div>;
};

export default AllCombosTable;
