/*	COMBOS HEROKU
 *  March 2021
 *
 *  Author: Alejandro Montes de Oca TS4
 *  Description: handler for table of selection sales organization
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

import { optionsPagination, columnsSalesOrganziation } from '../../../helpers/reactDataTable';
import { customStyles } from '../../../helpers/styles';
import { filterSalesOrganization } from '../../../helpers/tableSearchRules';
import { /*Spinner,*/ AlertGeneric } from '../../index';
import TableFilter from '../TableFilter';

import { useDispatch } from 'react-redux';
import { setSalesOrganizationAction } from '../../../redux/actions/exclusionsAndInclusionsActions';



///this is the view #1 for the Exclusions and Inclusions
const SalesOrganization = ({ setView, salesOrganization, setCurrentViewTab, setCurrentNestedViewTab }) => {
	const dispatch = useDispatch();

	const setSalesOrganizations = DGR => dispatch(setSalesOrganizationAction(DGR));

	const newSalesOrganization = salesOrganization.map(item => {
		let obj = {};

		obj['id'] = item.id;
		obj['nombre'] = item.nombre;
		obj['direccionRegionalVentas'] = `${item.idDGR} ${item.nombreDGR}`;
		return obj;
	});

	const [searchItem, setSearchItem] = useState('');
	const [foundItem, setFoundItem] = useState(newSalesOrganization);
	const [idSAP, setIdSAP] = useState(false);
	const [rowSelect, setRowSelect] = useState([]);
	const [clear, setClear] = useState(false);
	const [error, setError] = useState(false);

	useEffect(() => {
        setCurrentViewTab(1);
        setCurrentNestedViewTab(1);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [rowSelect])

	const handleChangeCheckbox = () => setIdSAP(!idSAP);

	const handleChangeInputSearch = e => {
		e.persist();
		setSearchItem(e.target.value);
	};

	useEffect(() => {
		filterSalesOrganization(searchItem, idSAP, setFoundItem, newSalesOrganization);
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [searchItem])

	const handleRowSelect = state => {
		setRowSelect(state.selectedRows);
	};

	const handleButtonCancel = () => {
		setClear(!clear);
		setRowSelect({});
		setView(0);
	};

	const handleButtonContinue = () => {
		if (rowSelect.length === 0) {
			setError(true);
			return;
		}
		setSalesOrganizations(rowSelect);
		setView(2);
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
						<h3 className='encabezado text-center mt-2 '>Organizacion de Ventas</h3>
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
						columns={columnsSalesOrganziation}
						data={foundItem}
						customStyles={customStyles}
						noDataComponent={<span>No se encontró ningún elemento</span>}
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

			<Row className='mt-3 mx-auto' style={{ paddingTop: '4rem' }}>
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

export default SalesOrganization;
