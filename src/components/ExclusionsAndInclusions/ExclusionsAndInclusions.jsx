import React from 'react';
import SwipeableViews from 'react-swipeable-views';
import { useTheme } from '@material-ui/core/styles';
import {
	RegionalSalesDepartment,
	SalesOrganization,
	SalesOfice,
	Customers,
} from './index';
import { TabPanel } from '../index';

const ExclusionsAndInclusions = ({ view, setView }) => {
	const theme = useTheme();

	const handleChangeIndex = (index) => {
		setView(index);
	};

	return (
		<SwipeableViews
			axis='x'
			index={view}
			onChangeIndex={handleChangeIndex}
		>
			<TabPanel value={view} index={0} dir={theme.direction}>
				<RegionalSalesDepartment setView={setView} />
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
	);
};

export default ExclusionsAndInclusions;
