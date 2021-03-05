import React, { useState } from 'react';
import { Col, Row } from 'reactstrap';
import { useHistory } from 'react-router-dom';

import './LimitOfCombos.css';
import addImage from '../../assets/images/header/add.png';
import CombosTable from './CombosTable/CombosTable';
import { ModalCreateLimit } from '../index';

const LimitsOfCombos = () => {
	const history = useHistory();

	const [modal, setModal] = useState(true);

	const toggle = () => setModal(!modal);

	const createComboPush = () => history.push('/crear-combo');

	return (
		<>
			<Row>
				<Col xs='10' sm='10'>
					<h3 className='encabezado text-center mt-4'>Límite de Combos</h3>
				</Col>

				<Col xs='2' sm='2' className='d-flex'>
					<button className='add-combo mt-3'>
						<img src={addImage} alt='Add logo' className='py-2 mr-3' onClick={createComboPush} />
					</button>
					<h3 className='encabezado text-center pt-4'>Crear un Combo</h3>
				</Col>
			</Row>

			<Row className='m-0'>
				<Col sm='12' md='12'>
					<CombosTable />
				</Col>
			</Row>

			<ModalCreateLimit modal={modal} setModal={setModal} toggle={toggle} />
		</>
	);
};

export default LimitsOfCombos;
