/*	COMBOS HEROKU
 *  March 2021
 *
 *  Author: Alejandro Montes de Oca TS4
 *  Description: Component for uploading csv files with react-drop-zone
 *  =========================================================================
 *  Information about changes:
 *
 *  No.         Date.        Author.      		Description.
 *
 *
 */
import React, { useCallback, useState, useMemo, useEffect } from 'react';
import { Button, Col, Container, Row } from 'reactstrap';
import { useDropzone } from 'react-dropzone';
import { useDispatch, useSelector } from 'react-redux';

import shapeImage from '../../../assets/images/Shape.png';
import excelImage from '../../../assets/images/excel.png';
import { baseStyle, baseStyleDrop, activeStyle, acceptStyle, rejectStyle } from '../../../helpers/styles';
import { readCSV } from '../../../helpers/dropzone';
import { setClientsExclusionCSVAction, setFileNameExclusionsAction } from '../../../redux/actions/exclusionsAndInclusionsActions';

const DropzoneExclusions = () => {

	const dispatch = useDispatch();

	const setCustomerExclusionCSV = customers => dispatch( setClientsExclusionCSVAction(customers) );
	const setFileNamesExclusion = fileNames => dispatch( setFileNameExclusionsAction(fileNames) );

	const exclusions = useSelector(state => state.exclusionsAndInclusions.fileNamesExclusions);


	/*	 Local Estate	*/
	const [dataCSV, setDataCSV] = useState(exclusions);


	// eslint-disable-next-line react-hooks/exhaustive-deps
	const onDrop = useCallback(acceptedFiles => {
		const file = acceptedFiles;
		readCSV(file, setDataCSV);
	});

	useEffect(() => {
		setCustomerExclusionCSV(dataCSV);
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [dataCSV])


	const { getRootProps, getInputProps, open, acceptedFiles, isDragActive, isDragAccept, isDragReject } = useDropzone({
		noClick: true,
		noKeyboard: true,
		accept: 'text/csv',
		onDrop
	});

	useEffect(() =>{
		const fileNames = acceptedFiles.map(file => file.path);
		setFileNamesExclusion(fileNames);
	// eslint-disable-next-line react-hooks/exhaustive-deps
	},[acceptedFiles]);

	const style = useMemo(
		() => ({
			...(exclusions.length !== 0 ? baseStyleDrop : baseStyle),
			...(isDragActive ? activeStyle : {}),
			...(isDragAccept ? acceptStyle : {}),
			...(isDragReject ? rejectStyle : {})
		}),
		[isDragActive, isDragAccept, isDragReject, exclusions]
	);


	const fileList = acceptedFiles.map(file => (
		<li key={file.lastModified} className='d-flex' style={{ listStyle: 'none' }}>
			<img src={excelImage} alt='excel logo' style={{ height: '21px', width: '29px' }} />
			<p className='ml-2 mb-0 upload-item'>{file.path}</p>
		</li>
	));

	return (
		<>
		<div style={{ marginTop: '.3rem', width:'45rem' }}>
			<div
				{...getRootProps({ style })}
				className={acceptedFiles.length === 0 ? 'd-flex flex-column align-items-center pt-1 mt-0' : 'd-flex flex-column align-items-center pt-1 mt-0'}>
				<input {...getInputProps()} />

				{exclusions.length === 0
					? (
					<>
						<img
							src={shapeImage}
							alt='Shape logo'
							className='pb-1'
							style={{ height: '39px', width: '39px' }}
						/>
						<Button onClick={open} className='file-select'>
							Cargar
						</Button>
						<p className='text-upload mt-2'>
							{isDragActive ? 'Suelta tu archivo' : 'Arrastra aquí tus archivos extensión '}
							<strong>.csv</strong>
						</p>
					</>
				) : (
					<>
						<Container>
							<Row className='mb-2 d-flex justify-content-between'>
								<div>
									<p className='text-upload-success'>Clientes Totales: { dataCSV.length }</p>
								</div>
								<div className='d-flex justify-content-between'>
									{/* TODO: validate this criteria */}
									<p className='text-upload-success-blue mr-3'>Clientes Incluidos: { dataCSV.length }</p>
									<p className='text-upload-error ml-3'>Clientes con Error: 0</p>
								</div>
							</Row>
							<Row>
								<p className='text-upload-success'>Carga tus archivos para excluir clientes</p>
							</Row>
							<Row className='d-flex align-items-center'>
								<Col sm='8' md='8' className='upload-success m-1'>
									<ul className='p-2 mb-0'>{fileList}</ul>
								</Col>

								<Col sm='1' md='1'>
									<img src={shapeImage} alt='shape logo' style={{ height: '29px', width: '29px' }} />
								</Col>
								<Col sm='1' md='1'>
									<Button
										onClick={open}
										className='file-select '
										style={{ width: '9rem', height: '2rem', fontSize: '14px' }}>
										Añadir Otro Archivo
									</Button>
								</Col>
							</Row>
						</Container>
					</>
				)}
			</div>
		</div>
	</>
	);
};

export default DropzoneExclusions;
