/*	COMBOS HEROKU
 *  March 2021
 *
 *  Author: Alejandro Montes de Oca TS4
 *  Description: handler for table of selection sales office
 *  =========================================================================
 *  Information about changes:
 *
 *  No.         Date.        Author.      		Description.
 *
 *
*/
import React, { useEffect, useState } from 'react';
import { Button, Col, Container, Row } from 'reactstrap';
import { FormControlLabel, Checkbox, Radio } from '@material-ui/core';
import DataTable from 'react-data-table-component';

import { optionsPagination, columnsSalesOffice } from '../../../helpers/reactDataTable';
import { customStyles } from '../../../helpers/styles';
import { filterSalesOffice } from '../../../helpers/tableSearchRules';
import { /*Spinner,*/ AlertGeneric } from '../../index';
import TableFilter from '../TableFilter';

import { useDispatch } from 'react-redux';
import { setSalesOfficeAction } from '../../../redux/actions/exclusionsAndInclusionsActions';



///this is the view #2 for the Exclusions and Inclusions
const SalesOffice = ({ setView, salesOffice, setCurrentViewTab, setCurrentNestedViewTab  }) => {
	const dispatch = useDispatch();

	const setSalesOffice = salesOffice => dispatch(setSalesOfficeAction(salesOffice));

	const newSalesOffice =
		salesOffice &&
		salesOffice.map(item => {
			let obj = {};

			obj['id'] = item.id;
			obj['nombre'] = item.nombre;
			obj['direccionRegionalVentas'] = `${item.IdOV} ${item.nombreOV}`;
			return obj;
		});

	const [searchItem, setSearchItem] = useState('');
	const [foundItem, setFoundItem] = useState(newSalesOffice);
	const [idSAP, setIdSAP] = useState(false);
	const [rowSelect, setRowSelect] = useState([]);
	const [clear, setClear] = useState(false);
	const [error, setError] = useState(false);

	useEffect(() => {
        setCurrentViewTab(1);
        setCurrentNestedViewTab(2);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [rowSelect])

	const handleChangeCheckbox = () => setIdSAP(!idSAP);

	const handleChangeInputSearch = e => {
		e.persist();
		setSearchItem(e.target.value);
	};

	useEffect(() => {
		filterSalesOffice(searchItem, idSAP, setFoundItem, newSalesOffice);
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [searchItem])

	const handleRowSelect = state => setRowSelect(state.selectedRows);

	const handleButtonCancel = () => {
		setClear(!clear);
		setRowSelect({});
		setView(1);
	};

	const handleButtonContinue = () => {
		if (rowSelect.length === 0) {
			setError(true);
			return;
		}
		setSalesOffice(rowSelect);
		setView(3);
	};

	return (
		<>
			<Container
				style={{
					fontSize: '14px',
					width: '60rem',
					height: '28rem',
					paddingLeft: '8rem'
				}}
				className='pt-0 mt-0'>
				<Row>
					<Col sm='10' md='10' className='text-center'>
						<h3 className='encabezado text-center mt-2'>Oficina de Ventas</h3>
					</Col>
				</Row>

				<Row>
					<TableFilter name={'search'} value={searchItem} onChange={handleChangeInputSearch} />
					<FormControlLabel
						value='idSAP'
						control={<Checkbox color='primary' onChange={handleChangeCheckbox} />}
						label='Buscar por lista de ID de SAP de la oficina de ventas'
						labelPlacement='end'
					/>
					<DataTable
						columns={columnsSalesOffice}
						data={foundItem}
						customStyles={customStyles}
						noDataComponent={<span>No se encontr?? ning??n elemento</span>}
						paginationComponentOptions={optionsPagination}
						selectableRows
						onSelectedRowsChange={handleRowSelect}
						selectableRowsComponent={Radio}
						clearSelectedRows={clear}
						selectableRowSelected={row => row}
						dense
						striped
						fixedHeader
						responsive
						highlightOnHover
						pagination
					/>
				</Row>

				{error && (
					<Row className='my-1'>
						<Col sm='10' md='10' className='pl-4'>
							<AlertGeneric
								severity='warning'
								text='Selecciona al menos una Direccion Regional de Ventas'
							/>
						</Col>
					</Row>
				)}
			</Container>

			<Row className='mt-4 mx-auto' style={{ paddingTop: '3.5rem' }}>
				<Col smd='10' md='10' className='d-flex justify-content-around' style={{ marginLeft: '5rem' }}>
					<Button className='boton-exclusion' onClick={handleButtonCancel}>
						Cancelar
					</Button>
					<Button className='boton-exclusion' onClick={handleButtonContinue}>
						Continuar
					</Button>
				</Col>
			</Row>
		</>
	);
};
export default SalesOffice;
