/*	COMBOS HEROKU
 *  March 2021
 *
 *  Author: Alejandro Montes de Oca TS4
 *  Description: this component is a helper for TabsCreateCombo.jsx encapsulates
 * 	the content of each tab in a generic panel
 *  =========================================================================
 *  Information about changes:
 *
 *  No.         Date.        Author.      		Description.
 *
 *
 */
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
			className={'py-0'}
			{...other}
		>
			{value === index && <Box p={1}>{children}</Box>}

		</div>
	);
};

export default TabPanel;
