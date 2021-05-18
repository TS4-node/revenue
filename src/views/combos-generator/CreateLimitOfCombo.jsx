import React from 'react';
import { Button, Col, Container, Form, FormGroup, Input, Label, Row } from 'reactstrap';
import EmojiIcon from '@atlaskit/icon/glyph/search';
import Select, { components } from 'react-select';

import idLogo from '../../assets/images/assignment_ind.png';
import {
	optionsListSaleStructure,
	optionsListComboNivel,
} from '../../helpers/selectsOption.js';
import { AlertGeneric, ModalCreateLimit } from '../../components';
import useCreateLimitOfCombo from '../../hooks/useCreateLimitOfCombo';

const owner = 'PPM Corporativo';

const DropdownIndicator = props => (
	<components.DropdownIndicator {...props}>
		<EmojiIcon primaryColor={'#666666'} />
	</components.DropdownIndicator>
);

const ErrorAlert = () => (
	<Row>
		<Col sm='6' md='6' className='mx-auto'>
			<AlertGeneric
				severity='warning'
				text='Nivel del Combo, Estructura de Ventas y Combos Permitidos son obligatorios.'
			/>
		</Col>
	</Row>
);

const SavedAlert = () => (
	<Row>
		<Col sm='6' md='6' className='mx-auto'>
			<AlertGeneric severity='success' text='Se ha guardado el Limite de Combo' />
		</Col>
	</Row>
);

const CreateLimitOfCombo = () => {
	const {
		limitOfCombo,
		error,
		saved,
		selectedOptionSS,
		selectedOptionCN,
		modal,
		setModal,
		toggle,
		handleChange,
		handleChangeSelectComboNivel,
		handleChangeSelectSaleStructure,
		saveLimitOfCombo,
		saveAndNewLimitOfCombo,
		saveLimitOfComboAndCreateCombo,
	} = useCreateLimitOfCombo();


	return (
		<>
			<Container className='text-center'>
				<h2 className='mt-3 mb-4' style={styles.title}>
					Nuevo Límite de Combos
				</h2>

				<p className='my-2' style={styles.subtitle}>
					Propietario: &nbsp;
					<span style={styles.owner} className='ml-1'>
						<img src={idLogo} alt='id logo' />
						{owner}
					</span>
				</p>

				<Row>
					<Col sm='6' md='6' className='mx-auto'>
						<Form>
							<FormGroup>
								<div style={{ height: '2rem' }} className='mt-4 mb-3'>
									<Select
										value={selectedOptionCN}
										onChange={handleChangeSelectComboNivel}
										options={optionsListComboNivel}
										components={<DropdownIndicator label={''} />}
										placeholder='Nivel del Combo'
										styles={styles.select}
									/>
								</div>

								<div style={{ height: '2rem' }} className='mt-0 mb-3'>
									<Select
										value={selectedOptionSS}
										onChange={handleChangeSelectSaleStructure}
										options={optionsListSaleStructure}
										components={<DropdownIndicator label={''} />}
										placeholder='Estructura de Ventas'
										styles={styles.select}
									/>
								</div>

								<Row>
									<Col
										sm='9'
										md='9'
										className='d-flex align-items-center'
									>
										<label
											className='label my-0'
											style={styles.label}
										>
											Combos Permitidos &nbsp;
											<span style={styles.span}>!</span>
										</label>
										<Input
											type='number'
											min='1'
											placeholder='0'
											style={styles.inputCombos}
											className='mr-2 text-center'
											name='combosPermitidos'
											onChange={handleChange}
											id='combosPermitidos'
										/>

										<FormGroup
											check
											className='d-flex align-items-center justify-content-center'
										>
											<Label check className='mt-1 id'>
												<Input
													id='radio'
													type='radio'
													name='activo'
													value={true}
													className='mt-0'
													onChange={handleChange}
												/>
												Activo
											</Label>
										</FormGroup>
									</Col>
								</Row>
							</FormGroup>
						</Form>
					</Col>
				</Row>

				{error && <ErrorAlert />}

				{saved && <SavedAlert />}

				<Row
					className='mx-auto d-flex justify-content-around mt-5 pt-5'
					style={{ width: '58rem' }}
				>
					<Col md='4' className='p-0 m-0 font-weight-light'>
						<Button
							className='modal-button'
							onClick={saveAndNewLimitOfCombo}
							style={{ width: '300px' }}
						>
							Guardar y Nuevo
						</Button>
					</Col>
					<Col md='4' className='p-0 m-0 font-weight-light'>
						<Button
							className='modal-button'
							onClick={saveLimitOfCombo}
							style={{ width: '300px' }}
						>
							Guardar
						</Button>
					</Col>
					<Col md='4' className='p-0 m-0 font-weight-light'>
						<Button
							className='modal-button'
							onClick={saveLimitOfComboAndCreateCombo}
							style={{ width: '300px' }}
						>
							Guardar y Crear Combo
						</Button>
					</Col>
				</Row>
			</Container>

			<ModalCreateLimit
				modal={modal}
				setModal={setModal}
				toggle={toggle}
				id={limitOfCombo.IdLimite}
			/>
		</>
	);
};

export default CreateLimitOfCombo;

const styles = {
	select: {
		control: css => ({
			...css,
			fontFamily: 'Inter, sans-serif',
			fontSize: '14px',
		}),
		valueContainer: css => ({
			fontFamily: 'Inter, sans-serif',
			fontSize: '12px',
			fontWeight: 500,
			color: '#9a9a9a',
			paddingLeft: 10,
		}),
		option: (css, state) => ({
			...css,
			fontFamily: 'Inter, sans-serif',
			fontWeight: 700,
			fontSize: '14px',
			color: state.isSelected ? '#ffffff' : '#686868',
			backgroundColor: state.isSelected ? '#1890ff' : '#fafafa',
			textAlign: 'left',
			':hover': {
				...css,
				fontFamily: 'Inter, sans-serif',
				fontWeight: 700,
				fontSize: '14px',
				backgroundColor: '#E6F7FF',
				color: '#1890ff',
			},
		}),
	},
	title: {
		fontFamily: 'Inter, sans-serif',
		fontWeight: 700,
		fontSize: '24px',
		color: '#686868',
	},
	subtitle: {
		fontFamily: 'Inter, sans-serif',
		fontWeight: 700,
		fontSize: '14px',
		color: '#686868',
	},
	owner: {
		fontFamily: 'Inter,sans-serif',
		color: '#1890FF',
		fontWeight: 700,
	},
	inputCombos: {
		width: '82px',
		fontFamily: 'Inter, sans-serif',
		fontSize: '16px',
		color: '#9a9a9a',
		borderColor: '#CDCDCD',
		height: '30px',
	},
	label: {
		width: '18rem',
		marginLeft: '-5rem',
	},
	span: {
		fontWeight: 'bold',
		color: 'black',
	},
};
