import React, { useEffect, useState } from 'react';
import { Button, Col, Container, Modal, ModalBody, Row } from 'reactstrap';
import { Radio, Checkbox } from '@material-ui/core';
import DataTable from 'react-data-table-component'

import { TableFilter, AlertGeneric } from '../../index';
import { filterItems } from '../../../helpers/tableSearchRules';
import addIcon from '../../../assets/images/add.png';
import LeftArrowIcon from '../../../assets/images/LeftArrow.png';
import RightArrowIcon from '../../../assets/images/RightArrow.png';

const optionList = [
	{ value: 'Familiar', label: '01 Familiar', sku: '01' },
	{ value: 'Media', label: '02 Media', sku: '02' },
	{ value: 'Cuarto', label: '03 Cuarto', sku: '03' },
	{ value: 'Barril', label: '04 Barril', sku: '04' },
	{ value: 'Mega', label: '05 Mega', sku: '05' },
	{ value: 'Bote', label: '06 Bote', sku: '06' },
	{ value: 'Media Importado', label: '07 Media Importado', sku: '07' },
	{ value: 'Bote Importado', label: '08 Bote Importado', sku: '08' },
	{ value: 'Litro Importado', label: '09 Litro Importado', sku: '09' },
	{ value: 'Agua', label: '10 Agua', sku: '10' },
	{ value: 'Refresco', label: '11 Refresco', sku: '11' },
	{ value: 'Jugos', label: '12 Jugos', sku: '12' },
	{ value: 'Agua natural', label: '13 Agua natural', sku: '13' },
	{ value: 'Agua sabor', label: '14 Agua sabor', sku: '14' },
	{ value: 'Agua mineralizada', label: '15 Agua mineralizada', sku: '15' },
	{ value: 'Té', label: '16 Té', sku: '16' },
	{ value: '710', label: '17 710', sku: '17' },
	{ value: 'Latón', label: '18 Latón', sku: '18' },
];

const columns = [
	{ name: 'sku', selector: 'sku', width: '4.5rem' },
	{ name: 'material', selector: 'material', cell: row => <p className='m-0' style={{fontWeight:'bold'}}>{ row.material }</p> }
];


const customStyles = {
	rows: {
	  style: {
		minHeight: '72px',
		border: 'none!important',
		color: 'rgba(0, 0, 0, 0.65)'
	  }
	},
	cells: {
		style: {
		  paddingLeft: '2px',
		  paddingRight: '2px',
		}
	}
};


const ModalSelectionQuota = ({ toggle, modal, selectedCategory, setSelectedCategory, categoryList, familyCategoryList, handleQuotaItems, selectableRowsQuota,setSelectableRowsQuota }) => {


	//filter items
	const [searchItem, setSearchItem] = useState('');
	const [foundItem, setFoundItem] = useState('');

	//for the selection on table
	const [rowSelected, setRowSelected] = useState([]);
	const [rowDeselected, setRowDeselected] = useState([]);

	//for the final quota list
	const [quotaList, setQuotaList] = useState([]);

	//for quota list void
	const [error, setError] = useState(false);

	const handleCategoryListFiltered = () => {
		if(quotaList.length === 0) filterItems(searchItem, setFoundItem, categoryList);
		if(quotaList.length > 0){
			const newCatergoryList = categoryList.filter(item => {
				let ok = true;
				for (let i = 0; i < quotaList.length && ok; i++) {
					let quota = quotaList[i];
					if (quota.sku === item.sku)ok = false;
				}
				return ok;
			});
			setFoundItem(newCatergoryList);
			filterItems(searchItem, setFoundItem, newCatergoryList);
		}
	}

	useEffect(() => {
		if(selectableRowsQuota.length > 0){
			setQuotaList(selectableRowsQuota);
			setSelectableRowsQuota([]);
		}
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	useEffect(() => {
		handleCategoryListFiltered();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [searchItem, quotaList]);

	const handleChangeInputSearch = e => {
		e.persist();
		setSearchItem(e.target.value);
	};

	const handleRowSelected = state => setRowSelected(state.selectedRows);

	const handleRowDeselected = state => setRowDeselected(state.selectedRows);

	const handleAddItems = () =>  setQuotaList([...quotaList, rowSelected].flat());

	const handleDeleteItems = () => {
		if(!rowDeselected) return;

		setFoundItem([ ...foundItem, rowDeselected ].sort())

		const newQuotaList = quotaList.filter(item => {
			let ok = true;
			for (let i = 0; i < rowDeselected.length && ok; i++) {
				let quota = rowDeselected[i];
				if (quota.sku === item.sku)ok = false;
			}
			return ok;
		});
		setQuotaList(newQuotaList);
	}

	const handleGroupListFamily = e => {
		const { id } = e.target;
		const familyListItems = categoryList.filter(item => item.familia === id);
		const updateQuotaList = [ ...quotaList, familyListItems].flat();
		setQuotaList([...new Set(updateQuotaList)]);
	}

	const handleAddQuotaItems = () => {
		if(quotaList.length === 0) {
			setError(true);
			setTimeout(() => setError(false), 1500);
			return;
		}
		const skuFiltered = optionList.filter( item => item.value === selectedCategory);
		const sku = skuFiltered[0].sku;
		const quotaWhitSku = {
			'sku': sku,
			'material': quotaList,
			'cantidad': 0,
			'precioUnitarioImpuestos': 0,
			'precioUnitario': 0,
			'total': 0,
			'totalImpuestos': 0
		}

		handleQuotaItems(quotaWhitSku);
		setQuotaList([]);
		setSelectedCategory('');
		toggle();
	}

	return (
		<Modal centered size='lg' isOpen={modal} toggle={toggle} backdrop={'static'}>
			<Container>
				<p
					className='m-0 pl-2 pt-2'
					style={{
						fontFamily: 'Inter, sans-serif',
						fontSize: '14px',
						color: 'rgba(0, 0, 0, 0.65)',
						fontWeight: '600'
					}}>
					Selecciona productos de Cupo "{ selectedCategory }":
				</p>
				<ModalBody className='pt-1 pb-1'>
					<Row>
						<Col sm='5' md='5' className='pr-2'>
							<TableFilter name={'search'} value={searchItem} onChange={handleChangeInputSearch} />
						</Col>
					</Row>
					<div className='pt-2 d-flex justify-content-between' style={{marginLeft:'-15px'}}>
						<Col sm='6' md='6'>
							<div
								style={{
									border: '1px solid rgba(0, 0, 0, 0.15)',
									borderRadius: '4px',
									height: '14rem',
									overflow: 'auto'
								}}
								className='p-1'
							>
								<DataTable
									columns={columns}
									data={foundItem}
									noDataComponent={
										<span
											style={{color:'rgba(0, 0, 0, 0.65)', fontSize:'14px', paddingTop:'5.5rem'}}
										> No se encontró ningún elemento
										</span>
									}
									selectableRows
									selectableRowsComponent={Radio}
									onSelectedRowsChange={handleRowSelected}
									customStyles={customStyles}
									dense
									noHeader
									noTableHead
								/>

							</div>
							<p className='mt-1 mb-0 ml-2' style={{ fontSize: '13px', color: 'rgba(0, 0, 0, 0.65)' }}>
								Disponibles: {foundItem.length !== 0 ? foundItem.length : categoryList.length}
							</p>
						</Col>

						<div className='d-flex flex-column pt-3' style={{width:'1rem'}}>
							<img
								src={ RightArrowIcon }
								alt='Left Arrow Icon'
								style={{width:'12.35px', height:'20px', cursor:'pointer'}}
								className='mb-2'
								onClick={ handleAddItems }
							/>
							<img
								src={ LeftArrowIcon }
								alt='Right Arrow Icon'
								style={{width:'12.35px', height:'20px', cursor:'pointer'}}
								className='mt-2'
								onClick={  handleDeleteItems }
							/>
						</div>

						<Col sm='6' md='6'>
							<div
								style={{
									border: '1px solid rgba(0, 0, 0, 0.15)',
									borderRadius: '4px',
									height: '14rem',
									overflow: 'auto'
								}}
								className='p-1'
							>
								<DataTable
									columns={columns}
									data={quotaList}
									noDataComponent={<span></span>}
									selectableRows
									selectableRowsComponent={Radio}
									onSelectedRowsChange={handleRowDeselected}
									customStyles={customStyles}
									dense
									noHeader
									noTableHead
									selectableRowSelected={row => row}
								/>
							</div>
							<p className='mt-1 mb-0 ml-2' style={{ fontSize: '13px', color: 'rgba(0, 0, 0, 0.65)' }}>
								Seleccionados: { quotaList.length }
							</p>
						</Col>
					</div>
				</ModalBody>

				{
					error && (
						<Row className='d-flex justify-content-center my-1'>
							<Col sm='6' md='6'>
								<AlertGeneric severity='warning' text='Selecciona productos para tu cupo'/>
							</Col>
						</Row>
					)
				}

				<Row className='d-flex pb-4 mt-2'>
					<Col sm='6' md='6' className='d-flex flex-wrap' style={{marginLeft:'15px',paddingRight:'2rem'}}>
						{familyCategoryList.map(item => (
							<div
								key={item}
								className='d-flex align-items-center p-2 m-1'
								style={{
									fontSize: '9.5px',
									backgroundColor: '#E6F7FF',
									borderRadius: '4px',
									cursor: 'pointer'
								}}
							>
								<img src={addIcon} alt='add logo' style={{ width: '10px', height: '10pxs' }} />
								<p
									className='m-0 pl-1'
									style={{ color: '#1890ff', fontWeight: '600' }}
									id={item}
									onClick={handleGroupListFamily}
								>
									{item}
								</p>
							</div>
						))}
					</Col>
					<Col sm='3' md='3' style={{marginLeft:'4rem'}}>
						<Button className='boton-exclusion' onClick={handleAddQuotaItems}>
							Agregar
						</Button>
					</Col>
					{/* <Button className='boton-exclusion' onClick={toggle}>
							cancelar
					</Button> */}
				</Row>
			</Container>
		</Modal>
	);
};

export default ModalSelectionQuota;
