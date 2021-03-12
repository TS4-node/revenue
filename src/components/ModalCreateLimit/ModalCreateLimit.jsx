/*	COMBOS HEROKU
 *  March 2021
 *
 *  Author: Alejandro Montes de Oca TS4
 *  Description: modal for the capture and save information on "limit of combo"
 *  =========================================================================
 *  Information about changes:
 *
 *  No.         Date.        Author.      		Description.
 *
 *
 */
import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {
	Modal,
	ModalHeader,
	ModalBody,
	ModalFooter,
	Form,
	FormGroup,
	Button,
	Input,
	Row,
	Col,
	Label
} from 'reactstrap';

import assignment_ind from '../../assets/images/assignment_ind.png';
import { optionsListMCL } from '../../helpers/selectsOption.js';
import { useSelect } from '../../hooks';
import { AlertGeneric } from '../index';
import { createLimitOfComboAction } from '../../redux/actions/limitOfCombosActions';

//Simulate DB
const propietario = 'PPM Corporativo';

const initialLimitOfCombo = {
	nivelCombo: '',
	estructuraVenta: '',
	combosPermitidos: 0,
	CombosDisponibles: 0,
	activo: false
};

const ModalCreateLimit = ({ modal, setModal, toggle }) => {
	/*    Redux     */
	const dispatch = useDispatch();

	const addLimitOfCombo = limitOfCombo => dispatch(createLimitOfComboAction(limitOfCombo));

	/*    Local State     */
	const [limitOfCombo, setLimitOfCombo] = useState(initialLimitOfCombo);
	const [error, setError] = useState(false);
	const [saved, setSaved] = useState(false);
	const [saleStructure, setSaleStructure, SelectStructure] = useSelect('', optionsListMCL, 'Estructura de Ventas');

	const handleChange = e => {
		setLimitOfCombo({
			...limitOfCombo,
			[e.target.name]: e.target.value
		});
	};

	useEffect(() => {
		setLimitOfCombo({
			...limitOfCombo,
			estructuraVenta: saleStructure
		});
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [saleStructure]);

	const saveLimitOfCombo = e => {
		e.preventDefault();

		if (
			limitOfCombo.nivelCombo.trim() === '' ||
			limitOfCombo.estructuraVenta === '' ||
			parseInt(limitOfCombo.combosPermitidos) === 0 ||
			parseInt(limitOfCombo.combosPermitidos) <= 0
		) {
			setError(true);
		} else {
			setError(false);
			addLimitOfCombo({
				...limitOfCombo,
				CombosDisponibles: limitOfCombo.combosPermitidos
			});
			setSaved(true);

			setTimeout(() => {
				setLimitOfCombo(initialLimitOfCombo);
				setSaved(false);
				setSaleStructure('');
				document.getElementById('combosPermitidos').value = '0';
				document.getElementById('radio').checked = false;
				toggle();
			}, 1200);
		}
	};

	const saveAndNewLimitOfCombo = e => {
		e.preventDefault();

		if (
			limitOfCombo.nivelCombo.trim() === '' ||
			limitOfCombo.estructuraVenta === '' ||
			parseInt(limitOfCombo.combosPermitidos) === 0 ||
			parseInt(limitOfCombo.combosPermitidos) < 0
		) {
			setError(true);
		} else {
			setError(false);
			addLimitOfCombo({
				...limitOfCombo,
				CombosDisponibles: limitOfCombo.combosPermitidos
			});
			setSaved(true);
			setTimeout(() => {
				setLimitOfCombo(initialLimitOfCombo);
				setSaleStructure('');
				document.getElementById('combosPermitidos').value = '';
				document.getElementById('radio').checked = false;
				setSaved(false);
			}, 1200);
		}
	};

	return (
		<div>
			<Modal isOpen={modal} toggle={toggle} centered={true}>
				<ModalHeader toggle={toggle} className='encabezado ml-5 pl-5 border-0'>
					<div className='ml-5'>Crear Límite de Combo</div>
				</ModalHeader>
				<ModalBody>
					<div className='container'>
						<p className='id'>ID Límite</p>
						<p className='label mr-1'>
							{' '}
							Propietario:{' '}
							<span style={{ color: '#1890FF', fontWeight: '700' }}>
								<img src={assignment_ind} alt='id logo' />
								{propietario}
							</span>
						</p>

						<Form>
							<FormGroup>
								<Input type='select' className='selector' name='nivelCombo' onChange={handleChange}>
									<option className='option-select' disabled selected>
										Nivel del Combo
									</option>
									<option className='option-select' value='ninguno'>
										Ninguno
									</option>
									<option className='option-select' value='Oficina de Ventas'>
										Oficina de Ventas
									</option>
									<option className='option-select' value='Organizacion de Ventas'>
										Organización de Ventas
									</option>
									<option className='option-select' value='Direccion Regional de Ventas'>
										Dirección Regional de Ventas
									</option>
									<option className='option-select' value='Nacional'>
										Nacional
									</option>
								</Input>

								<div style={{ height: '4rem' }} className='mt-4'>
									<SelectStructure isMulti={false} />
								</div>

								<Row>
									<Col sm='9' xs='9' className='d-flex align-items-center'>
										<label className='label my-0' style={{ width: '18rem' }}>
											Combos Permitidos{' '}
											<span
												style={{
													fontWeight: 'bold',
													color: 'black'
												}}>
												!
											</span>
										</label>
										<Input
											type='number'
											min='1'
											placeholder='0'
											style={{ width: '5.5rem' }}
											className='mr-2 text-center'
											name='combosPermitidos'
											onChange={handleChange}
											id='combosPermitidos'></Input>

										<FormGroup check>
											<Label check className='mt-1 id'>
												<Input
													id='radio'
													type='radio'
													name='activo'
													value={true}
													className='mt-0'
													onChange={handleChange}
												/>{' '}
												Activo
												<span
													style={{
														fontWeight: 'bold',
														color: '#1890ff'
													}}
													className='ml-1'>
													!
												</span>
											</Label>
										</FormGroup>
									</Col>
								</Row>
							</FormGroup>
						</Form>

						{error && (
							<AlertGeneric
								severity='warning'
								text='Nivel del Combo, Estructura de Ventas y Combos Permitidos son obligatorios.'
							/>
						)}
						{saved && <AlertGeneric severity='success' text='Se ha guardado el Limite de Combo' />}
					</div>
				</ModalBody>
				<ModalFooter className='border-0 mt-5 pt-2'>
					<Row className='container d-flex justify-content-around'>
						<Col md='6' className='p-0 m-0 font-weight-light'>
							<Button className='modal-button' type='submit' onClick={saveAndNewLimitOfCombo}>
								Guardar y Nuevo
							</Button>
						</Col>
						<Col md='6' className='p-0 m-0 font-weight-light'>
							<Button className='modal-button' type='submit' onClick={saveLimitOfCombo}>
								Guardar
							</Button>
						</Col>
					</Row>
				</ModalFooter>
			</Modal>
		</div>
	);
};

export default ModalCreateLimit;
