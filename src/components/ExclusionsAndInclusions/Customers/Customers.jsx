import React, { useState } from 'react';
import { Button, Col, Container, Row } from 'reactstrap';
import { FormControlLabel, Checkbox, Radio } from '@material-ui/core';
// import DataTable from 'react-data-table-component';

// import { filterSalesOrganization } from '../../../helpers/validationForms';
// import { /*Spinner,*/ AlertGeneric } from '../../index';
import TableFilter from '../TableFilter';
import TabsTable from './TabsTable';

///this is the view #3 for the Exclusions and Inclusions
const Customers = ({ setView, customers }) => {




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
						<h3 className='encabezado text-center mt-3 '>Clientes</h3>
					</Col>
				</Row>

				<Row>
					<TabsTable
						customers={customers}
					/>
				</Row>

				{/* {error && (
					<Row className='my-1'>
						<Col sm='8' md='8' className='mx-auto'>
							<AlertGeneric
								severity='warning'
								text='Selecciona al menos una Direccion Regional de Ventas'
							/>
						</Col>
					</Row>
				)} */}
			</Container>

			{/* <Row className='mx-auto' style={{marginTop:'5rem'}}>
				<Col smd='10' md='10' className='d-flex justify-content-around' style={{ marginLeft: '5rem' }}>
					<Button
						className='boton-exclusion'
						// onClick={handleButtonCancel}
					>
						Cancelar
					</Button>
					<Button
						className='boton-exclusion'
						// onClick={handleButtonContinue}
					>
						Continuar
					</Button>
				</Col>
			</Row> */}
		</>
	);
};

export default Customers;
