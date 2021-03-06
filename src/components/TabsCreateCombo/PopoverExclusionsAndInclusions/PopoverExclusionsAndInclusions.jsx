/*	COMBOS HEROKU
 *  March 2021
 *
 *  Author: Alejandro Montes de Oca TS4
 *  Description: Here its a popover the submenu for the view "Exclusion and Inclusions" handler the next view
 *  =========================================================================
 *  Information about changes:
 *
 *  No.         Date.        Author.      		Description.
 *
 */
import React from 'react';
import { Popover, MenuItem } from '@material-ui/core';

import './PopoverExclusionsAndInclusions.css';

const PopoverExclusionsAndInclusions = ({ anchorEl, setAnchorEL, setView }) => {

	const handleMenuItemClick = viewNumber => {
		setView(viewNumber);
		handleClose();
	};

	const handleClose = () => setAnchorEL(null);

	const open = Boolean(anchorEl);

	return (
		<Popover
			open={open}
			anchorEl={anchorEl}
			onClose={handleClose}
			anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
			transformOrigin={{ vertical: 'down', horizontal: 'rigth' }}>
			<MenuItem onClick={() => handleMenuItemClick(0)} className='option'>
				Direccion Regional de Ventas
			</MenuItem>
			<MenuItem onClick={() => handleMenuItemClick(1)} className='option'>
				Organizacion de Ventas
			</MenuItem>
			<MenuItem onClick={() => handleMenuItemClick(2)} className='option'>
				Oficina de Ventas
			</MenuItem>
			<MenuItem onClick={() => handleMenuItemClick(3)} className='option'>
				Clientes
			</MenuItem>
		</Popover>
	);
};

export default PopoverExclusionsAndInclusions;
