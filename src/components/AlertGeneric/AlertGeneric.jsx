/*	COMBOS HEROKU
 *  March 2021
 *
 *  Author: Alejandro Montes de Oca TS4
 *  Description: This is a alert generic for messages with severity "error, warning, success"
 *  =========================================================================
 *  Information about changes:
 *
 *  No.         Date.        Author.      Description.
 *
 *
*/


import React from 'react';
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles';
import Alert from '@material-ui/lab/Alert';

const useStyles = makeStyles(theme => ({
	root: {
		width: '100%',
		'& > * + *': {
			marginTop: theme.spacing(2)
		}
	}
}));

const AlertGeneric = ({ severity, text }) => {
	const classes = useStyles();
	return (
		<div className={classes.root}>
			<Alert severity={severity}>{text}</Alert>
		</div>
	);
};

AlertGeneric.propTypes = {
	severity: PropTypes.string.isRequired,
	text: PropTypes.string.isRequired
}

AlertGeneric.defaultProps = {
	severity: 'success',
	text: 'Simple Alert'
}

export default AlertGeneric;
