/*	COMBOS HEROKU
 *  March 2021
 *
 *  Author: Alejandro Montes de Oca TS4
 *  Description: handler for content capture in the tabs for exclusions and inclusions
 *  =========================================================================
 *  Information about changes:
 *
 *  No.         Date.        Author.      		Description.
 *
 *
*/
import React, { useEffect } from 'react';
import SwipeableViews from 'react-swipeable-views';
import { useTheme } from '@material-ui/core/styles';
import { Container } from 'reactstrap';
import { useSelector, useDispatch } from 'react-redux';

import { GeneralDirectorateSales, SalesOrganization, SalesOffice, Customers } from './index';
import { TabPanel } from '../index';
import { setTabViewAction, setTabNestedViewAction } from '../../redux/actions/tabsViewCreateComboActions';



const ExclusionsAndInclusions = ({ view, setView, setValue }) => {
	const theme = useTheme();

	/*    Redux     */
	const dispatch = useDispatch();
	const setCurrentViewTab = currentViewIndex => dispatch( setTabViewAction(currentViewIndex) );
	const setCurrentNestedViewTab = currentNestedViewIndex => dispatch( setTabNestedViewAction(currentNestedViewIndex) );

	const regionalDirectorateSales = useSelector(state => state.exclusionsAndInclusions.GET_regionalSalesDirectorate);
	const filteredsalesOrganization = useSelector(state => state.exclusionsAndInclusions.FILTERED_salesOrganization);
	const filteredSalesOffice = useSelector(state => state.exclusionsAndInclusions.FILTERED_salesOffice);
	const filteredCustomers = useSelector(state => state.exclusionsAndInclusions.FILTERED_clients);

	const handleChangeIndex = index => {
		setView(index);
	};

	useEffect(() => {
		setCurrentViewTab(1);
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	return (
		<Container className='py-0 my-0'>
			<SwipeableViews axis='x' index={view} onChangeIndex={handleChangeIndex} className='my-0 py-0'>
				<TabPanel value={view} index={0} dir={theme.direction}>
					<GeneralDirectorateSales
						setView={setView}
						generalDirectorateSales={regionalDirectorateSales}
						setValue={setValue}
						setCurrentViewTab={setCurrentViewTab}
						setCurrentNestedViewTab={setCurrentNestedViewTab}
					/>
				</TabPanel>

				<TabPanel value={view} index={1} dir={theme.direction}>
					<SalesOrganization
						setView={setView}
						salesOrganization={filteredsalesOrganization}
						setCurrentViewTab={setCurrentViewTab}
						setCurrentNestedViewTab={setCurrentNestedViewTab}
					/>
				</TabPanel>

				<TabPanel value={view} index={2} dir={theme.direction}>
					<SalesOffice
						setView={setView}
						salesOffice={filteredSalesOffice}
						setCurrentViewTab={setCurrentViewTab}
						setCurrentNestedViewTab={setCurrentNestedViewTab}
					/>
				</TabPanel>

				<TabPanel value={view} index={3} dir={theme.direction}>
					<Customers
						setView={setView}
						setValue={setValue}
						customers={filteredCustomers}
						setCurrentViewTab={setCurrentViewTab}
						setCurrentNestedViewTab={setCurrentNestedViewTab}
					/>
				</TabPanel>
			</SwipeableViews>
		</Container>
	);
};

export default ExclusionsAndInclusions;
