/*	COMBOS HEROKU
 *  March 2021
 *
 *  Author: Alejandro Montes de Oca TS4
 *  Description: main view for limit of combos, here is the table and the modal
 *  to create limit of combo and also to create a combo
 *  =========================================================================
 *  Information about changes:
 *
 *  No.         Date.        Author.      		Description.
 *
 *
 */
import React, { useState } from 'react';
import { Col, Row } from 'reactstrap';
import { Link, useHistory } from 'react-router-dom';

// import './LimitOfCombos.css';
import addImage from '../../assets/images/header/add.png';
import { ModalCreateCombo, AllCombosTable } from '../../components';


const AllCombos = () => {
	const history = useHistory();

    const [modal, setModal] = useState(false);

	const toggleModal = () => setModal(!modal);

	const createComboPush = () => history.push('/combos-generator/crear-limite-combo');

	return (
		<>
			<Row>
				<Col sm='9' md='9'>
					<h3
						className='encabezado mt-4 text-left pl-5'
						style={{color: '#1890ff' }}
					>
						Todos los Combos
					</h3>
				</Col>

				<Col sm='3' md='3' className='d-flex'>
					<button className='add-combo mt-3'>
						<img
							src={addImage}
							alt='Add logo'
							className='py-2 mr-3'
							onClick={toggleModal}
						/>
					</button>
                    <h3 className='encabezado text-center pt-4' onClick={toggleModal} style={{cursor:'pointer'}}>
                        Crear un Combo
                    </h3>
				</Col>
			</Row>

			<Row className='m-0'>
				<Col sm='10.5' md='10.5' className='px-5 d-flex justify-content-center'>
					<AllCombosTable />
				</Col>
			</Row>
            <ModalCreateCombo toggle={toggleModal} modal={modal} />
		</>
	);
};

export default AllCombos;
