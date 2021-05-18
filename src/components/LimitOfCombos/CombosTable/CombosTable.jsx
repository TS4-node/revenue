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
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import DataTable from 'react-data-table-component';

import TrashIcon from '../../../assets/images/Trash.png';
import { optionsPagination } from '../../../helpers/reactDataTable';
import { customStylesCT } from '../../../helpers/styles';
import { Spinner } from '../../index';
import { getAllLimitOfCombosAction, createCurrentLimitOfComboAction, selectLimitOfComboAction } from '../../../redux/actions/limitOfCombosActions';
import { useHistory } from 'react-router';



const CombosTable = () => {
	const history = useHistory();

	/*    Redux     */
	const dispatch = useDispatch();
	const limitsOfCombos = useSelector(state => state.limitOfCombos.limitsOfCombos);
	const loading = useSelector(state => state.limitOfCombos.loading);
	const getLimitsCombos = () => dispatch(getAllLimitOfCombosAction());
	const createCurrentlimitOfCombo = limitOfcombo => dispatch(createCurrentLimitOfComboAction(limitOfcombo));
	const selectLimitOfCombo = limitOfCombo => dispatch(selectLimitOfComboAction(limitOfCombo));

	/*    Local State     */

	useEffect(() => {
		getLimitsCombos();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const createCombo = idLimitOfCombo => {
		createCurrentlimitOfCombo(idLimitOfCombo);
		history.push('/combos-generator/crear-combo');
	};

	const detailLimitOfCombo = row => {
		selectLimitOfCombo(row);
		history.push('/combos-generator/editar-limite-combo');
	}

	const Detail = row => (
		<p
			className='m-0 link-table'
			value={row.IdLimite}
			name={row.IdLimite}
			onClick={() => detailLimitOfCombo(row)}
		>
			Ver Detalle
		</p>
	);

	const CreateCombo = row => (
		<p
			className='m-0 link-table'
			value={row.IdLimite}
			name={row.IdLimite}
			onClick={() => createCombo(row)}
		>
			Crear Combo
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
		{ name: '', selector: 'id', sortable: true, width: '3rem', center: true },
		{ name: 'ID Límite', selector: 'IdLimite', sortable: true, width: '8rem' },
		{
			name: 'Nivel del Combo',
			selector: 'nivelCombo',
			sortable: true,
			width: '14rem'
		},
		{
			name: 'Estructura de Ventas',
			selector: 'estructuraVenta',
			sortable: true,
			width: '11rem'
		},
		{
			name: 'Combos Permitidos',
			selector: 'combosPermitidos',
			wrap: true,
			sortable: true,
			center: true,
			width: '10rem'
		},
		{
			name: 'Combos Disponibles',
			selector: 'CombosDisponibles',
			sortable: true,
			center: true,
			width: '11rem'
		},
		{
			name: 'ID Combo',
			selector: 'idCombo',
			sortable: true,
			center: true,
			width: '7rem'
		},
		{
			name: '',
			selector: '',
			center: true,
			width: '6.1rem',
			cell: Detail
		},
		{
			name: '',
			selector: '',
			center: true,
			width: '6.9rem',
			cell: CreateCombo
		},
		{
			name: '',
			selector: '',
			center: true,
			width: '2rem',
			cell: TrashImage
		}
	];



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

export default CombosTable;
