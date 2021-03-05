import React, { useState } from 'react';
import { Button, Col, Container, Row } from 'reactstrap';
import { FormControlLabel, Checkbox, Radio } from '@material-ui/core';
import DataTable from 'react-data-table-component';

import { filterSalesOrganization } from '../../../helpers/validationForms';
import { /*Spinner,*/ AlertGeneric } from '../../index';
import TableFilter from '../TableFilter';

import { useDispatch } from 'react-redux';
import { setSalesOfficeAction } from '../../../redux/actions/exclusionsAndInclusionsActions';

const columns = [
	{ name: 'Número SAP', selector: 'id', sortable: true },
	{ name: 'Nombre', selector: 'nombre', sortable: true },
	{
		name: 'Organización de Ventas',
		selector: 'direccionRegionalVentas',
		sortable: true
	}
];

const optionsPagination = {
	rowsPerPageText: 'Registros por página',
	rangeSeparatorText: 'de',
	selectAllRowsItem: true,
	selectAllRowsItemText: '*'
};

const customStyles = {
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

///this is the view #2 for the Exclusions and Inclusions
const SalesOffice = ({ setView, salesOffice }) => {
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

	const handleChangeCheckbox = () => setIdSAP(!idSAP);

	const handleChangeInputSearch = e => {
		e.persist();
		setSearchItem(e.target.value);
		filterSalesOrganization(searchItem, idSAP, setFoundItem, newSalesOffice);
	};

	const handleRowSelect = state => {
		setRowSelect(state.selectedRows);
	};

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
				className='pt-2 mt-1'>
				<Row>
					<Col sm='10' md='10' className='text-center'>
						<h3 className='encabezado text-center mt-3 '>Oficina de Ventas</h3>
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
						columns={columns}
						data={foundItem}
						customStyles={customStyles}
						noDataComponent={<span>No se encontró ningún elemento</span>}
						paginationComponentOptions={optionsPagination}
						selectableRows
						onSelectedRowsChange={handleRowSelect}
						selectableRowsComponent={Radio}
						clearSelectedRows={clear}
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

			<Row className='mt-5 mx-auto' style={{ paddingTop: '3.5rem' }}>
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
