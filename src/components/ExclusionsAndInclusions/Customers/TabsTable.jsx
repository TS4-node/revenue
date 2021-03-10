/*	COMBOS HEROKU
 *  March 2021
 *
 *  Author: Alejandro Montes de Oca TS4
 *  Description: handler of tab for the tables inclusions and exclusion in customers
 *  =========================================================================
 *  Information about changes:
 *
 *  No.         Date.        Author.      		Description.
 *
 *
*/
import React, { useState } from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Button } from 'reactstrap';
import { FormControlLabel, Checkbox } from '@material-ui/core';
import classnames from 'classnames';
import { useDispatch } from 'react-redux';

import './Customers.css';
import TableFilter from '../TableFilter';
import { filterCustomers } from '../../../helpers/tableSearchRules';
import TableOfExclusions from './TableOfExclusions';
import TableOfInclusions from './TableOfInclusions';
import ModalExclusions from './ModalExclusions';
import { setClientsExclusionAction } from '../../../redux/actions/exclusionsAndInclusionsActions';


const TabsTable = ({ customers }) =>{

	const dispatch = useDispatch();

	const setCostumersExclusion = customers => dispatch(setClientsExclusionAction(customers) );

	const newCustomers = customers && customers.map( item => {
		let obj = {};
		obj['id'] = item.id;
		obj['nombre'] = item.nombre;
		obj['oficinaVentas'] = `${item.idOV} ${item.oficinaVentas}`;
		obj['agrupadorPrecios'] = item.agrupadorPrecios;
		return obj;
	});

	//for Tabs
	const [activeTab, setActiveTab] = useState('1');
	//for the TableFilter
	const [searchItem, setSearchItem] = useState('');
	const [idSAP, setIdSAP] = useState(false);
	//for Data on DataTable
	const [foundItem, setFoundItem] = useState(newCustomers);
	const [clear, setClear] = useState(false);
	//for DataTable -> Exclusions
	const [rowSelectExclusions, setRowSelectExclusions] = useState([]);
	//for DataTable -> Inclusions
	const [rowSelectInclusions, setRowSelectInclusions] = useState([]);
	const [error, setError] = useState(false);



	const toggle = tab => activeTab !== tab && setActiveTab(tab);

	const handleChangeCheckbox = () => setIdSAP(!idSAP);

	const handleChangeInputSearch = e => {
		e.persist();
		setSearchItem(e.target.value);
		filterCustomers(searchItem, idSAP, setFoundItem, newCustomers);
	};

	const handleRowSelectExclusions = state => {
		setRowSelectExclusions(state.selectedRows);
	};

	const handleRowSelectInclusions = state => setRowSelectInclusions(state.selectedRows);

	const handleClickExclusions = () => {

		setCostumersExclusion(rowSelectExclusions);
		setModalExclusion(true);

	}

	//Modals
	const [modalExclusion, setModalExclusion] = useState(false);

	const toggleExclusions = () => setModalExclusion(!modalExclusion);


	return (
		<>
		<div>
			<TableFilter name={'search'} value={searchItem} onChange={handleChangeInputSearch} />
			<FormControlLabel
				value='idSAP'
				control={<Checkbox color='primary' onChange={handleChangeCheckbox} />}
				label='Buscar por lista de ID de SAP de la oficina de ventas'
				labelPlacement='end'
			/>
			<Nav tabs>
				<NavItem>
					<NavLink
						className={classnames({ active: activeTab === '1' })}
						onClick={() => {
							toggle('1');
						}}>
						Exclusiones
					</NavLink>
				</NavItem>
				<NavItem>
					<NavLink
						className={classnames({ active: activeTab === '2' })}
						onClick={() => {
							toggle('2');
						}}>
						Inclusiones
					</NavLink>
				</NavItem>
			</Nav>
			<TabContent activeTab={activeTab}>

				<TabPane tabId='1'>
					<TableOfExclusions
						foundItem={foundItem}
						handleRowSelect={handleRowSelectExclusions}
						clear={clear}
					/>


				</TabPane>
				<TabPane tabId='2'>
					<TableOfInclusions
						foundItem={foundItem}
						handleRowSelect={handleRowSelectInclusions}
						clear={clear}
					/>
				</TabPane>

			</TabContent>
		</div>

		{ activeTab === '1' &&
			(
				<div className='mt-4 d-flex justify-content-beetwen' style={{position:'relative', left:'-6%'}}>
					<Button
						className='boton-exclusion mr-2'
					>
						Cancelar
					</Button>
					<Button
						className='boton-exclusion ml-2'
						onClick={handleClickExclusions}
					>
						{rowSelectExclusions.length === 0 ?'Continuar' :'Excluir'}
					</Button>
				</div>

			)
		}
		<ModalExclusions toggleExclusions={toggleExclusions} modal={modalExclusion} setActiveTab={setActiveTab}/>
		</>
	);
};

export default TabsTable;
