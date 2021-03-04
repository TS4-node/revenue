import React from 'react';
import SwipeableViews from 'react-swipeable-views';
import { useTheme } from '@material-ui/core/styles';
import {
	GeneralDirectorateSales,
	SalesOrganization,
	SalesOfice,
	Customers,
} from './index';
import { TabPanel } from '../index';
import { Container } from 'reactstrap';

import { useSelector } from 'react-redux';

const ExclusionsAndInclusions = ({ view, setView, setValue }) => {

	const theme = useTheme();

	/*
	* Redux
	*/
	const regionalDirectorateSales = useSelector( state => state.exclusionsAndInclusions.GET_regionalSalesDirectorate);
	const filteredDirectorateSales = useSelector( state => state.exclusionsAndInclusions.FILTERED_regionalSalesDirectorate);
	const filteredSalesOffice = useSelector( state => state.exclusionsAndInclusions.FILTERED_salesOrganization);


	const handleChangeIndex = (index) => {
		setView(index);
	};

	return (
		<Container>
			<SwipeableViews
				axis='x'
				index={view}
				onChangeIndex={handleChangeIndex}

			>
				<TabPanel value={view} index={0} dir={theme.direction}>
					<GeneralDirectorateSales
						setView={setView}
						generalDirectorateSales={regionalDirectorateSales}
						setValue={setValue}
						// loading={loadingGeneralDirectorateSales}
					/>
				</TabPanel>

				<TabPanel value={view} index={1} dir={theme.direction}>
					<SalesOrganization
						setView={setView}
						salesOrganization={filteredDirectorateSales}
						// loading={loadingSalesOrganization}
					/>
				</TabPanel>

				<TabPanel value={view} index={2} dir={theme.direction}>
					<SalesOfice
						setView={setView}
						salesOffice={filteredSalesOffice}
					/>
				</TabPanel>

				<TabPanel value={view} index={3} dir={theme.direction}>
					<Customers setView={setView} />
				</TabPanel>
			</SwipeableViews>
		</Container>
	);
};

export default ExclusionsAndInclusions;
