import React, { useEffect, useState } from 'react';
import { Button, Col, Input, Label, Row } from 'reactstrap';


import { formatterPesos } from '../../helpers/materials';
import CurrencyInput from 'react-currency-input-field';
import ModalSendCombo from './ModalSendCombo';

const DetalMaterials = ({ idCombo, setValue, allProducts }) => {
	const [totalAmount, setTotalAmount] = useState(0);
	const [modal, setModal] = useState(false);

	useEffect(() => {
		const total = allProducts.reduce((acc, el) => acc + el.totalImpuestos, 0);
		setTotalAmount(total);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const toggle = () => setModal(!modal);

	const handleSendCombo = () => toggle();

	return (
		<>
			<div className='mt-4' style={{ border: '1px solid rgba(0, 0, 0, 0.15)' }}>
				<Row className=' text-center mx-0'>
					<Col sm='2' md='2' className='column-header d-flex align-items-center justify-content-center'>
						<p>Tipo</p>
					</Col>
					<Col sm='2' md='2' className='column-header d-flex align-items-center justify-content-center'>
						<p>SKU / Código</p>
					</Col>
					<Col sm='3' md='3' className='column-header d-flex align-items-center justify-content-center'>
						<p>Material / Cupo</p>
					</Col>
					<Col sm='1' md='1' className='column-header d-flex align-items-center justify-content-center'>
						<p>Cantidad</p>
					</Col>
					<Col sm='1' md='1' className='column-header d-flex align-items-center justify-content-center'>
						<p>
							Precio Unitario <hr className='m-0 p-0 border-0' />
							c/Impuestos
						</p>
					</Col>
					<Col sm='1' md='1' className='column-header d-flex align-items-center justify-content-center'>
						<p>Precio Unitario</p>
					</Col>
					<Col sm='1' md='1' className='column-header d-flex align-items-center justify-content-center'>
						<p>Total</p>
					</Col>
					<Col sm='1' md='1' className='column-header d-flex align-items-center justify-content-center'>
						<p>Total con Impuestos</p>
					</Col>
				</Row>
				{allProducts.map(item => (
					<Row key={'item.sku'} className='text-center py-2'>
						<Col sm='2' md='2' className='d-flex align-items-center justify-content-center py-1'>
							<p className='m-0 text-summary pl-4'>{item.tipo}</p>
						</Col>
						<Col sm='2' md='2' className='d-flex align-items-center justify-content-center py-1'>
							<p className='m-0 text-summary'>{item.sku}</p>
						</Col>
						<Col sm='3' md='3' className='d-flex align-items-center justify-content-center py-1 px-0'>
							<p className='m-0 text-summary' style={{ fontWeight: 'bold', fontSize: '12px' }}>
								{typeof item.material === 'string' ? item.material : item.material[0].categoria}
							</p>
						</Col>
						<Col sm='1' md='1' className='d-flex align-items-center justify-content-center py-1'>
							<Input
								id={item.sku}
								type='number'
								min='1'
								style={{ height: '28px', fontSize: '14px' }}
								className='text-center'
								name='cantidad'
								placeholder='0'
								value={item.cantidad}
								fixedDecimalLength={2}
								disabled
							/>
						</Col>
						<Col sm='1' md='1' className='d-flex align-items-center justify-content-center'>
							<CurrencyInput
								id={item.sku}
								name='precioUnitarioImpuestos'
								placeholder={'0.00'}
								decimalsLimit={2}
								style={{ height: '28px', fontSize: '14px', width: '79px' }}
								className='text-center form-control'
								value={item.precioUnitarioImpuestos}
								disabled
							/>
						</Col>
						<Col sm='1' md='1' className='d-flex align-items-center justify-content-center '>
							<CurrencyInput
								id={item.sku}
								name='precioUnitario'
								placeholder={item.precioUnitario}
								decimalsLimit={2}
								style={{ height: '28px', fontSize: '14px', width: '79px' }}
								className='text-center form-control'
								value={item.precioUnitario}
								disabled
							/>
						</Col>
						<Col sm='1' md='1' className='d-flex align-items-center justify-content-center py-1'>
							<p className='m-0 text-summary'>{formatterPesos.format(item.total)}</p>
						</Col>
						<Col sm='1' md='1' className='d-flex align-items-center justify-content-center py-1'>
							<p className='m-0 text-summary pr-3'>{formatterPesos.format(item.totalImpuestos)}</p>
						</Col>
					</Row>
				))}
				<Row className='d-flex justify-content-end pr-2 pt-3'>
					<Col sm='3' md='3' className='text-right '>
						<p className='text-total'>Total {formatterPesos.format(totalAmount)}</p>
					</Col>
				</Row>
			</div>

			<Row className='mt-2 d-flex justify-content-end'>
				<Label
					className='eliminar-datos mr-4'
					style={{ fontSize: '14px', textDecoration: 'underline' }}
					onClick={() => setValue(0)}
				>
					Editar Combo
				</Label>
			</Row>

			<Row className='mt-3 d-flex justify-content-center'>
				<Button className='boton-exclusion mx-4' onClick={handleSendCombo}>
					Enviar Aprobación
				</Button>
			</Row>
			<ModalSendCombo idCombo={idCombo} toggle={toggle} modal={modal} />
		</>
	);
};

export default DetalMaterials;
