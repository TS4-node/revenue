import React, { useState } from 'react';
import './LimiteCombos.css';
import addImage from '../../assets/images/header/add.png';

import { Col, Row } from 'reactstrap';
import CombosTable from './CombosTable/CombosTable';
import ModalCreateLimit from './ModalCreateLimit/ModalCreateLimit'

const LimiteCombos = () => {
	const [modal, setModal] = useState(false);

	const toggle = () => setModal(!modal);

	return (
		<>
			<Row>
				<Col xs='10' sm='10'>
					<h3 className='encabezado text-center mt-4'>
						Límite de Combos
					</h3>
				</Col>

				<Col xs='2' sm='2' className='d-flex'>
					<button className='add-combo mt-3' onClick={toggle}>
						<img
							src={addImage}
							alt='Add logo'
							className='py-2 mr-3'
						/>
					</button>
					<h3 className='encabezado text-center pt-4'>
						Crear un Combo
					</h3>
				</Col>
			</Row>

			<Row>
				<Col sm='12' md='12'>
					<CombosTable />
				</Col>
			</Row>

			<ModalCreateLimit
				modal={modal}
				toggle={toggle}
			/>
		</>
	);
};

export default LimiteCombos;
