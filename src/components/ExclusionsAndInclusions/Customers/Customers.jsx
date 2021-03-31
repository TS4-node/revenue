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
import { Col, Container, Row } from 'reactstrap';

import TabsTable from './TabsTable';

///this is the view #3 for the Exclusions and Inclusions
const Customers = ({ setView, setValue, customers, setCurrentViewTab, setCurrentNestedViewTab }) => {
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
						setCurrentViewTab={setCurrentViewTab}
						setCurrentNestedViewTab={setCurrentNestedViewTab}
					/>
				</Row>
			</Container>
		</>
	);
};

export default Customers;
