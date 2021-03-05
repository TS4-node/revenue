import { Box } from '@material-ui/core';

//this component it's a helper for SwipeableViews
const TabPanel = props => {
	const { children, value, index, ...other } = props;

	return (
		<div
			role='tabpanel'
			hidden={value !== index}
			id={`full-width-tabpanel-${index}`}
			aria-labelledby={`full-width-tab-${index}`}
			style={{ height: '55rem', overflow: 'hidden' }}
			{...other}>
			{value === index && <Box p={1}>{children}</Box>}
		</div>
	);
};

export default TabPanel;
