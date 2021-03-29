import React from 'react';
import { Col, Row } from 'reactstrap';
import { useSelector } from 'react-redux';

const owner = 'PPM Corporativo';
const salesStructure = 'Grupo Modelo';

const DetailComboData = () => {
	const comboData = useSelector(state => state.comboData.comboData);

	const {
		fechaIni,
		fechaFin,
		// descripcionCorta,
		// descripcionLarga,
		// agrupadorPrecios,
		maxCombosVentas,
		maxCombosCliente,
		moneda,
		aplicaciones
	} = comboData;

	const fechaIniFormatted = fechaIni.split('-').reverse().join('/');
	const fechaFinFormatted = fechaFin.split('-').reverse().join('/');
	const aplicacionesKeys = Object.keys(aplicaciones);

	return (
		<>
			<div className='mt-4'>
				<Row className=' text-center mx-0'>
					<Col sm='2' md='2' className='column-header d-flex align-items-center justify-content-center px-2'>
						<p className='m-0'>Propietario:</p>
					</Col>
					<Col sm='2' md='2' className='column-header d-flex align-items-center justify-content-center px-2'>
						<p className='m-0'>Estructura de Ventas:</p>
					</Col>
					<Col sm='2' md='2' className='column-header d-flex align-items-center justify-content-center px-2'>
						<p className='m-0'>Periodo de Combo:</p>
					</Col>
					<Col sm='2' md='2' className='column-header d-flex align-items-center justify-content-center px-2'>
						<p className='m-0'>Máx. combo por estructura de ventas:</p>
					</Col>
					<Col sm='2' md='2' className='column-header d-flex align-items-center justify-content-center px-2'>
						<p className='m-0'>Máximo combo por cliente:</p>
					</Col>
					<Col sm='1' md='1' className='column-header d-flex align-items-center justify-content-center px-2'>
						<p className='m-0'>Aplicaciones:</p>
					</Col>
					<Col sm='1' md='1' className='column-header d-flex align-items-center justify-content-center px-2'>
						<p className='m-0'>Moneda:</p>
					</Col>
				</Row>
				<Row
					className=' text-center mx-0'
					style={{
						color: 'rgba(0, 0, 0, 0.78)',
						fontFamily: 'Roboto, sans-serif',
						fontSize: '14px',
						fontWeight: 'bold'
					}}>
					<Col sm='2' md='2' className='d-flex align-items-center justify-content-center px-2'>
						<p className='m-0 py-2'>{owner}</p>
					</Col>
					<Col sm='2' md='2' className='d-flex align-items-center justify-content-center px-2'>
						<p className='m-0 py-2'>{salesStructure}</p>
					</Col>
					<Col sm='2' md='2' className='d-flex align-items-center justify-content-center px-2'>
						<p className='m-0 py-2'>
							{`${fechaIniFormatted}`}
							&nbsp;&nbsp;
							<span className='m-0 p-0' style={{ fontWeight: 'normal' }}>
								al
							</span>
							&nbsp;&nbsp;
							{`${fechaFinFormatted}`}
						</p>
					</Col>
					<Col sm='2' md='2' className='d-flex align-items-center justify-content-center px-2'>
						<p className='m-0 py-2'>{maxCombosVentas}</p>
					</Col>
					<Col sm='2' md='2' className='d-flex align-items-center justify-content-center px-2'>
						<p className='m-0 py-2'>{maxCombosCliente}</p>
					</Col>
					<Col sm='1' md='1' className='d-flex align-items-center justify-content-center px-2 text-center'>
						<p className='m-0 py-2 d-flex flex-wrap justify-content-center'>
							{aplicacionesKeys.map(item => (
								<span
									className='p-0 m-0 mr-1'
									key={item}
									style={{ fontSize: '11px', fontWeight: 'bold' }}>
									{item.toUpperCase()},&nbsp;
								</span>
							))}
						</p>
					</Col>
					<Col sm='1' md='1' className='d-flex align-items-center justify-content-center px-2'>
						<p className='m-0 py-2'>{moneda.toUpperCase()}</p>
					</Col>
				</Row>
			</div>
		</>
	);
};

export default DetailComboData;
