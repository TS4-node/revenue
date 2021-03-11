/*	COMBOS HEROKU
 *  March 2021
 *
 *  Author: Alejandro Montes de Oca TS4
 *  Description: This is a form for the capture initial of combo "DATA OF COMBO"
 *  =========================================================================
 *  Information about changes:
 *
 *  No.         Date.        Author.      		Description.
 *
 *
*/

import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container, Row, Col, Label, Input, Button } from 'reactstrap';
import { TextField, Checkbox, FormControlLabel } from '@material-ui/core';
import { PropTypes } from 'prop-types';

import './ComboData.css';
import assignment_ind from '../../assets/images/assignment_ind.png';
import { optionsListCD } from '../../helpers/selectsOption';
import { AlertGeneric } from '../index';
import { useSelect } from '../../hooks';
import { createDataComboAction, clearDataComboAction } from '../../redux/actions/comboDataActions';

//Simulate DB
const owner = 'PPM Corporativo';
const salesStructure = 'Grupo Modelo';
const numberData = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];
const coinData = ['USD', 'EUR', 'MXN', 'CAD', 'CNY'];

const initialCombo = {
	fechaIni: '',
	fechaFin: '',
	descripcionCorta: '',
	descripcionLarga: '',
	agrupadorPrecios: [],
	maxCombosVentas: 0,
	maxCombosCliente: 0,
	moneda: '',
	aplicaciones: { allmobile: false, televenta: false, b2b: false, dbr: false }
};

const ComboData = ({ setValue }) => {

	/*    Redux     */
	const dispatch = useDispatch();
	const createDataCombo = dataCombo => dispatch(createDataComboAction(dataCombo));
	const clearDataCombo = () => dispatch(clearDataComboAction());
	const dataCombo = useSelector(state => state.comboData.comboData);

	/*
	 * State Local
	 */
	const [combo, setCombo] = useState(dataCombo);
	const [priceGrouper, setPriceGrouper, SelectPrices] = useSelect('', optionsListCD, 'Agrupador de Precios', true);
	const [check, setCheck] = useState({});
	const [error, setError] = useState(false);
	// const [saved, setSaved] = useState(false);

	useEffect(() => {
		setCombo({
			...combo,
			aplicaciones: check
		});
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [check]);

	useEffect(() => {
		if (priceGrouper) {
			const group = priceGrouper.map(item => item.value);
			setCombo({
				...combo,
				agrupadorPrecios: group
			});
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [priceGrouper]);

	const handleChangeCheckbox = e => {
		setCheck({
			...check,
			[e.target.name]: e.target.checked
		});
	};

	const handleChange = e => {
		setCombo({
			...combo,
			[e.target.name]: e.target.value
		});
		createDataCombo({
			...combo,
			[e.target.name]: e.target.value
		});
	};

	const clearForm = () => {
		document.getElementById('startDate').value = '';
		document.getElementById('endDate').value = '';
		document.getElementById('descripcionCorta').value = '';
		document.getElementById('descripcionLarga').value = '';
		document.getElementById('maximoCombosVentas').value = '';
		document.getElementById('maximoCombosCliente').value = '';
		document.getElementById('moneda').value = '';
		setPriceGrouper('');
		setCheck({});
		setCombo(initialCombo);
		clearDataCombo();
	};

	const saveCombo = e => {
		if (
			dataCombo.fechaIni === '' ||
			dataCombo.fechaFin === '' ||
			dataCombo.descripcionCorta.trim() === '' ||
			dataCombo.descripcionLarga.trim() === '' ||
			dataCombo.agrupadorPrecios === [] ||
			dataCombo.maxCombosCliente === 0 ||
			dataCombo.maxCombosVentas === 0 ||
			dataCombo.moneda === ''
		) {
			setError(true);
		} else {
			setError(false);
			createDataCombo(combo);
			setCombo(combo);
			setValue(1);
			// setSaved(true);
		}
	};

	return (
		<Container style={{ fontSize: '14px', width: '30rem', height: '34rem' }} className='mt-3'>
			<div className='d-flex justify-content-between'>
				<p className='label mr-1 '>
					Propietario:
					<span style={{ color: '#1890FF', fontWeight: '700' }} className='ml-1'>
						<img src={assignment_ind} alt='id logo' />
						{owner}
					</span>
				</p>
				<p className='label mr-1 '>
					Estructura de Ventas:
					<span style={{ color: '#1890FF', fontWeight: '700' }} className='ml-1'>
						{salesStructure}
					</span>
				</p>
			</div>

			<Row className='mt-1'>
				<Col sm='6' md='6'>
					<TextField
						id='startDate'
						label='Fecha de Inicio'
						type='date'
						InputLabelProps={{ shrink: true }}
						fullWidth
						variant='outlined'
						size='small'
						name='fechaIni'
						onChange={handleChange}
						value={dataCombo.fechaIni ? dataCombo.fechaIni : null}
					/>
				</Col>
				<Col sm='6' md='6'>
					<TextField
						id='endDate'
						label='Fecha Fin'
						type='date'
						placeholder='Fecha Fin'
						InputLabelProps={{
							shrink: true
						}}
						fullWidth
						variant='outlined'
						size='small'
						onChange={handleChange}
						name='fechaFin'
						value={dataCombo.fechaFin ? dataCombo.fechaFin : null}
					/>
				</Col>
			</Row>

			<Row className='mt-2' style={{}}>
				<Col sm='12' md='12'>
					<TextField
						label='Descripción Corta'
						variant='outlined'
						fullWidth
						size='small'
						onChange={handleChange}
						name='descripcionCorta'
						id='descripcionCorta'
						value={dataCombo.descripcionCorta ? dataCombo.descripcionCorta : null}
					/>
				</Col>
			</Row>

			<Row className='mt-2'>
				<Col sm='12' md='12'>
					<TextField
						label='Descripción Larga'
						variant='outlined'
						fullWidth
						multiline
						rows={2}
						onChange={handleChange}
						name='descripcionLarga'
						id='descripcionLarga'
						value={dataCombo.descripcionLarga ? dataCombo.descripcionLarga : null}
					/>
				</Col>
			</Row>

			<Row className='mt-2'>
				<Col sm='12' md='12'>
					<SelectPrices />
				</Col>
			</Row>

			<Row className='mt-2 d-flex align-items-center'>
				<Col sm='9' md='9' style={{ height: '1rem' }}>
					<Label for='maximoCombosVentas' className='text-left'>
						Máximo combos por estructura de ventas
					</Label>
				</Col>
				<Col sm='3' md='3' style={{ height: '1rem' }}>
					<Input
						type='select'
						id='maximoCombosVentas'
						style={{ height: '1.8rem', fontSize: '13px' }}
						onChange={handleChange}
						name='maxCombosVentas'
						value={dataCombo.maxCombosVentas ? dataCombo.maxCombosVentas : null}>
						<option value='0' disabled selected>
							-
						</option>
						{numberData.map(number => (
							<option key={number} value={number}>
								{number}
							</option>
						))}
					</Input>
				</Col>
			</Row>
			<Row className='mt-4 d-flex align-items-center'>
				<Col sm='9' md='9' style={{ height: '1rem' }}>
					<Label for='maximoCombosCliente' className='text-left'>
						Máximo combos por cliente
					</Label>
				</Col>
				<Col sm='3' md='3' style={{ height: '1rem' }}>
					<Input
						type='select'
						id='maximoCombosCliente'
						style={{ height: '1.8rem', fontSize: '13px' }}
						onChange={handleChange}
						name='maxCombosCliente'
						value={dataCombo.maxCombosCliente ? dataCombo.maxCombosCliente : null}>
						<option value='0' disabled selected>
							-
						</option>
						{numberData.map(number => (
							<option key={number} value={number}>
								{number}
							</option>
						))}
					</Input>
				</Col>
			</Row>
			<Row className='mt-4 d-flex align-items-center'>
				<Col sm='9' md='9' style={{ height: '1rem' }}>
					<Label for='moneda' className='text-left'>
						Moneda
					</Label>
				</Col>
				<Col sm='3' md='3' style={{ height: '1rem' }}>
					<Input
						type='select'
						id='moneda'
						style={{ height: '1.8rem', fontSize: '13px' }}
						onChange={handleChange}
						name='moneda'
						value={dataCombo.moneda ? dataCombo.moneda : null}>
						<option value='0' disabled selected>
							-
						</option>
						{coinData.map(coin => (
							<option key={coin} value={coin}>
								{coin}
							</option>
						))}
					</Input>
				</Col>
			</Row>

			<Row className='mt-3 d-flex align-items-center'>
				<Col sm='9' md='9' style={{ height: '1rem' }}>
					<Label for='aplicaciones' className='text-left my-0'>
						Aplicaciones:
					</Label>
				</Col>
			</Row>

			<Row className='mt-2 ml-1'>
				<FormControlLabel
					control={
						<Checkbox
							checked={check.allmobile ? check.allmobile : false}
							onChange={handleChangeCheckbox}
							name='allmobile'
							color='primary'
							id='check1'
						/>
					}
					label='Allmobile'
				/>

				<FormControlLabel
					control={
						<Checkbox
							checked={check.televenta ? check.televenta : false}
							onChange={handleChangeCheckbox}
							name='televenta'
							color='primary'
						/>
					}
					label='Televenta'
				/>

				<FormControlLabel
					control={
						<Checkbox
							checked={check.b2b ? check.b2b : false}
							onChange={handleChangeCheckbox}
							name='b2b'
							color='primary'
						/>
					}
					label='B2B'
				/>

				<FormControlLabel
					control={
						<Checkbox
							checked={check.bdr ? check.bdr : false}
							onChange={handleChangeCheckbox}
							name='bdr'
							color='primary'
						/>
					}
					label='BDR'
				/>
			</Row>
			<Row className='my-1 px-3'>
				{error && <AlertGeneric severity='warning' text='Todos los campos son obligatorios.' />}
				{/* {saved &&  <AlertGeneric severity="success" text="Se ha guardado el Limite de Combo" />} */}
			</Row>
			<Row className='mt-1 px-3'>
				<Button className=' boton-gris boton-combo' type='submit' onClick={saveCombo}>
					Continuar
				</Button>
			</Row>

			<Row className='mt-2 d-flex justify-content-end'>
				<Label className='eliminar-datos mr-4' onClick={clearForm}>
					Borrar todos los datos
				</Label>
			</Row>
		</Container>
	);
};

ComboData.propTypes = {
	setValue: PropTypes.func.isRequired
}

export default ComboData;
