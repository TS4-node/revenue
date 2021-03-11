/*	COMBOS HEROKU
 *  March 2021
 *
 *  Author: Alejandro Montes de Oca TS4
 *  Description: This is a handler of tabs for the section with tables in exclusions and inclusions
 *  =========================================================================
 *  Information about changes:
 *
 *  No.         Date.        Author.      		Description.
 *
 *
*/
import React from 'react';
import { Button, Col, Container, Row } from 'reactstrap';

import TabsTable from './TabsTable';

///this is the view #3 for the Exclusions and Inclusions
const Customers = ({ setView, setValue, customers }) => {




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
						<h3 className='encabezado text-center mt-1 '>Clientes</h3>
					</Col>
				</Row>

				<Row>
					<TabsTable
						customers={customers}
						setView={setView}
						setValue={setValue}
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

			{/* <Row className='mx-auto' style={{marginTop:'12rem'}}>
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
