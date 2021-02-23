import React,{ useState } from 'react';
import EmojiIcon from '@atlaskit/icon/glyph/search';
import Select, { components } from 'react-select'
import assignment_ind from '../../../assets/images/assignment_ind.png';
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


const propietario = 'PPM Corporativo';

const optionsList = [
    {value:'CMM Metropolitan', label: 'CMM Metropolitan'},
    {value:'CMM Michoacana', label: 'CMM Michoacana'},
    {value:'CMM Morelos', label: 'CMM Morelos'},
    {value:'CMM Macfe', label: 'CMM Macfe'}
];

const DropdownIndicator = (props) => {
    return (
        <components.DropdownIndicator { ...props }>
            <EmojiIcon primaryColor={'#666666'} />
        </components.DropdownIndicator>
    );
};

const ModalCreateLimit = ({ modal, toggle }) => {

	const [selectedOption, setSelectedOption] = useState(null);

    const handleChange = option => setSelectedOption(option); console.log(selectedOption);


	return (
		<div>
			<Modal isOpen={modal} toggle={toggle} centered={true}>
				<ModalHeader toggle={toggle} className='encabezado ml-5 pl-5 border-0'>
                    <div className='ml-5'>
					    Crear Límite de Combo
                    </div>
				</ModalHeader>
				<ModalBody>
					<div className='container'>
						<p className='id'>ID Límite</p>
						<p className='label mr-1'> Propietario:{' '} 
                            <span style={{ color: '#1890FF', fontWeight: '700', }} >
                                <img src={assignment_ind} alt='id logo' />
								{propietario}
							</span>
						</p>

						<Form>
							<FormGroup>
								<Input type='select' className='selector'>
									<option
										className='option-select'
										disabled
										selected
									>
										Nivel del Combo
									</option>
									<option
										className='option-select'
										value='ninguno'
									>
										Ninguno
									</option>
									<option
										className='option-select'
										value='Oficina de Ventas'
									>
										Oficina de Ventas
									</option>
									<option
										className='option-select'
										value='Organizacion de Ventas'
									>
										Organzación de Ventas
									</option>
									<option
										className='option-select'
										value='Direccion Regional de Ventas'
									>
										Dirección Regional de Ventas
									</option>
									<option
										className='option-select'
										value='Nacional'
									>
										Nacional
									</option>
								</Input>

								<div style={{ height: '4rem' }} className='mt-4'>

									<Select
										value={selectedOption}
										onChange={handleChange}
										options={optionsList}
										components={{ DropdownIndicator }}
										placeholder='Busca aquí'
										styles={{
											control: css => ({ ...css, paddingLeft: '.5rem'})
										}}
									/>
								</div>

								<Row>
									<Col
										sm='8'
										xs='8'
										className='d-flex align-items-center'
									>
										<label
											className='label my-0'
											style={{ width: '18rem' }}
										>
											Combos Permitidos{' '}
											<span style={{ fontWeight: 'bold', color:'black' }} >
												!
											</span>
										</label>
										<Input
											type='select'
											style={{ width: '4rem' }}
											className='mr-2'
										>
											<option value='1'>1</option>
											<option value='2'>2</option>
											<option value='3'>3</option>
											<option value='4'>4</option>
											<option value='5'>5</option>
										</Input>

										<FormGroup check>
											<Label check className='mt-1 id'>
												<Input type='radio' value='activo' className='mt-0'/> Activo
                                                <span style={{ fontWeight: 'bold', color:'#1890ff' }} className='ml-1'>
                                                    !
                                                </span>
											</Label>
										</FormGroup>
									</Col>
								</Row>
							</FormGroup>
						</Form>
					</div>
				</ModalBody>
				<ModalFooter className='border-0 mt-5 pt-2'>
                    <Row className='container d-flex justify-content-around'>
                        <Col md='6' className='p-0 m-0 font-weight-light'>
                            <Button className='modal-button boton-gris' onClick={toggle} >
                                Guardar y Nuevo
                            </Button>
                        </Col>
                        <Col md='6' className='p-0 m-0 font-weight-light'>
                            <Button className='modal-button boton-gris' onClick={toggle}>
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
