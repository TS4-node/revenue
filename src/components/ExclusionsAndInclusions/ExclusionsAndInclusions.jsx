import React,{ useEffect } from 'react';
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

const ExclusionsAndInclusions = ({ view, setView }) => {
	const theme = useTheme();

	const handleChangeIndex = (index) => {
		setView(index);
	};


	const loading = useSelector( state => state.generalDirectorateSales.loading );
	const generalDirectorateSales = useSelector ( state => state.generalDirectorateSales.generalDirectorateSales );

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
						generalDirectorateSales={generalDirectorateSales}
						loading={loading}
					/>
				</TabPanel>

				<TabPanel value={view} index={1} dir={theme.direction}>
					<SalesOrganization setView={setView} />
				</TabPanel>

				<TabPanel value={view} index={2} dir={theme.direction}>
					<SalesOfice setView={setView} />
				</TabPanel>

				<TabPanel value={view} index={3} dir={theme.direction}>
					<Customers setView={setView} />
				</TabPanel>
			</SwipeableViews>
		</Container>
	);
};

export default ExclusionsAndInclusions;
