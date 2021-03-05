import React, { useState } from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Row, Col } from 'reactstrap';
import { FormControlLabel, Checkbox, Radio } from '@material-ui/core';
import classnames from 'classnames';

import './Customers.css';
import TableFilter from '../TableFilter';
import { filterCustomers } from '../../../helpers/validationForms';
import TableOfExclusions from './TableOfExclusions';
import TableOfInclusions from './TableOfInclusions';

const TabsTable = ({ customers }) => {

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



	const toggle = tab => activeTab !== tab && setActiveTab(tab);

	const handleChangeCheckbox = () => setIdSAP(!idSAP);

	const handleChangeInputSearch = e => {
		e.persist();
		setSearchItem(e.target.value);
		filterCustomers(searchItem, idSAP, setFoundItem, newCustomers);
	};

	const handleRowSelectExclusions = state => setRowSelectExclusions(state.selectedRows);

	const handleRowSelectInclusions = state => setRowSelectInclusions(state.selectedRows);


	return (
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
	);
};

export default TabsTable;
