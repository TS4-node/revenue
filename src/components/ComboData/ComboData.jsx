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

import React, { useEffect } from 'react';
import { Container, Row, Col, Label, Input, Button } from 'reactstrap';
import { TextField, Checkbox, FormControlLabel } from '@material-ui/core';
import { PropTypes } from 'prop-types';

import './ComboData.css';
import assignment_ind from '../../assets/images/assignment_ind.png';
import { AlertGeneric } from '../index';
import useComboData from '../../hooks/useComboData';
import { useDispatch } from 'react-redux';
import { setTabViewAction } from '../../redux/actions/tabsViewCreateComboActions';

//Simulate DB
const owner = 'PPM Corporativo';
// const salesStructure = 'Grupo Modelo';
const coinData = ['USD', 'EUR', 'MXN', 'CAD', 'CNY'];

const ComboData = ({ setValue, setView }) => {
	const {
		dataCombo,
		currentLimitOfCombo:{IdLimite, estructuraVenta},
		error,
		check,
		msgError,
		errorDate,
		errorMaxCombosVentas,
		errorMaxCombosCliente,
		handleChange,
		handleChangeCheckbox,
		SelectPrices,
		saveCombo,
		clearForm,
	} = useComboData(setValue, setView);

	const dispatch = useDispatch();
	const setCurrentViewTab = currentViewIndex => dispatch( setTabViewAction(currentViewIndex) );

	useEffect(() => {
		setCurrentViewTab(0);
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	return (
		<Container style={styles.container} className='mt-3'>
			<p className='label mr-1 text-center '>
				Propietario:
				<span style={styles.subtitle} className='ml-1'>
					<img src={assignment_ind} alt='id logo' />
					{owner}
				</span>
			</p>
			<Row className='d-flex justify-content-between my-3 pt-2 px-3'>
				<p className='label mr-1 ' style={styles.mainSubtitle}>
					ID limite:
					<span style={styles.subtitle} className='ml-1'>
						{IdLimite}
					</span>
				</p>
				<p className='label mr-1 'style={styles.mainSubtitle}>
					Estructura de Ventas:
					<span style={styles.subtitle} className='ml-1'>
						{estructuraVenta}
					</span>
				</p>
			</Row>

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
							shrink: true,
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

			{errorDate && (
				<Row className='my-1 px-3'>
					<AlertGeneric severity='warning' text={msgError} />
				</Row>
			)}

			<Row className='pt-2'>
				<Col sm='12' md='12'>
					<TextField
						label='Descripción Corta'
						variant='outlined'
						id='descripcionCorta'
						name='descripcionCorta'
						size='small'
						onChange={handleChange}
						value={
							dataCombo.descripcionCorta ? dataCombo.descripcionCorta : null
						}
						style={ styles.description }
						fullWidth
					/>
				</Col>
			</Row>

			<Row className='mt-2'>
				<Col sm='12' md='12'>
					<TextField
						id='descripcionLarga'
						name='descripcionLarga'
						label='Descripción Larga'
						variant='outlined'
						rows={2}
						onChange={handleChange}
						value={
							dataCombo.descripcionLarga ? dataCombo.descripcionLarga : null
						}
						style={ styles.description }
						fullWidth
						multiline
					/>
				</Col>
			</Row>

			<Row className='mt-2'>
				<Col sm='12' md='12'>
					<SelectPrices />
				</Col>
			</Row>

			<Row className='mt-2 d-flex align-items-center'>
				<Col sm='9' md='9' style={styles.heightColumn} he>
					<Label for='maximoCombosVentas' className='text-left' style={styles.label}>
						Máximo combos por estructura de ventas
					</Label>
				</Col>
				<Col sm='3' md='3' style={styles.heightColumn}>
					<Input
						type='number'
						min='1'
						placeholder='0'
						id='maximoCombosVentas'
						style={styles.input}
						onChange={handleChange}
						name='maxCombosVentas'
						value={
							dataCombo.maxCombosVentas ? dataCombo.maxCombosVentas : null
						}
					/>
				</Col>
			</Row>
			{errorMaxCombosVentas && (
				<Row className='my-1 px-3'>
					<AlertGeneric severity='warning' text={msgError} />
				</Row>
			)}
			<Row className='mt-4 d-flex align-items-center'>
				<Col sm='9' md='9' style={styles.heightColumn}>
					<Label for='maximoCombosCliente' className='text-left' style={styles.label}>
						Máximo combos por cliente
					</Label>
				</Col>
				<Col sm='3' md='3' style={styles.heightColumn}>
					<Input
						type='number'
						min='1'
						placeholder='0'
						id='maximoCombosCliente'
						style={styles.input}
						onChange={handleChange}
						name='maxCombosCliente'
						value={
							dataCombo.maxCombosCliente ? dataCombo.maxCombosCliente : null
						}
					></Input>
				</Col>
			</Row>
			{errorMaxCombosCliente && (
				<Row className='my-1 px-3'>
					<AlertGeneric severity='warning' text={msgError} />
				</Row>
			)}
			<Row className='mt-4 d-flex align-items-center'>
				<Col sm='9' md='9' style={styles.heightColumn}>
					<Label for='moneda' className='text-left' style={styles.label}>
						Moneda
					</Label>
				</Col>
				<Col sm='3' md='3' style={styles.heightColumn}>
					<Input
						type='select'
						id='moneda'
						style={styles.input}
						onChange={handleChange}
						name='moneda'
						value={dataCombo.moneda ? dataCombo.moneda : null}
					>
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
				<Col sm='9' md='9' style={styles.heightColumn}>
					<Label for='aplicaciones' className='text-left my-0' style={styles.labelBold}>
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
				{error && (
					<AlertGeneric
						severity='warning'
						text='Todos los campos son obligatorios.'
					/>
				)}
			</Row>
			<Row className='mt-1 px-3'>
				<Button className='boton-combo' type='submit' onClick={saveCombo}>
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
	setValue: PropTypes.func.isRequired,
};

const styles = {
	container: {
		fontSize: '14px',
		width: '30rem',
		height: '34rem',
	},
	mainSubtitle:{
		fontFamily: 'Inter, sans-serif',
		fontSize: '12px',
		fontWeight: '700',
		color: '#686868'
	},
	subtitle: {
		fontFamily: 'Inter, sans-serif',
		fontSize: '12px',
		fontWeight: '700',
		color: '#1890FF',
	},
	input: {
		height: '1.8rem',
		fontSize: '13px',
	},
	label:{
		fontFamily: 'Inter, sans-serif',
		fontSize: '14px',
		color: '#686868',
		fontWeight: 400
	},
	labelBold:{
		fontFamily: 'Inter, sans-serif',
		fontSize:'14px',
		fontWeight: 700
	},
	heightColumn: {
		height: '1rem',
	},
	description:{
		background: '#fff'
	}
};

export default ComboData;
