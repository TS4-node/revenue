/*	COMBOS HEROKU
 *  March 2021
 *
 *  Author: Alejandro Montes de Oca TS4
 *  Description: Here its a popover the submenu for the view "Search for Materials" handler the next view
 *  =========================================================================
 *  Information about changes:
 *
 *  No.         Date.        Author.      		Description.
 *
 */
import React from 'react';
import { Popover, MenuItem } from '@material-ui/core';

import './PopoverSearchMaterials.css';

const PopoverSearchMaterials = ({ anchorEl, setAnchorEL, setView }) => {

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
				Producto
			</MenuItem>
			<MenuItem onClick={() => handleMenuItemClick(1)} className='option'>
				Cupo
			</MenuItem>
		</Popover>
	);
};

export default PopoverSearchMaterials;
