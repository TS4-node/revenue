import React from 'react';
import './LimiteCombos.css';
import { Col, Row } from 'reactstrap';

import CombosTable from './CombosTable/CombosTable'

const LimiteCombos = () => {
	return (
        <>
		<Row>
			<Col xs='10' sm='10'>
				<h3 className='encabezado text-center mt-4'>
					Límite de Combos
				</h3>
			</Col>

			<Col xs='2' sm='2' className='d-flex'>
				<button className='add-combo mt-3'>
					<img
						src='images/header/add.png'
						alt='Add logo'
						className='py-2 mr-3'
					/>
				</button>
				<h3 className='encabezado text-center pt-4'>Crear un Combo</h3>
			</Col>
		</Row>

        <Row>
            <Col sm='12' md='12'>
                <CombosTable />
            </Col>

        </Row>
        </>
	);
};

export default LimiteCombos;
