import React from "react";
import './PopoverExclusionsAndInclusions.css'
import { Popover, MenuItem } from "@material-ui/core";

const PopoverExclusionsAndInclusions = ({ anchorEl, setAnchorEL, setView }) => {


	const handleMenuItemClick = (viewNumber) => {
		setView(viewNumber);
		handleClose();
	};

	const handleClose = () => {
		setAnchorEL(null);
	};

	const open = Boolean(anchorEl);

	return (
		<Popover
			open={open}
			anchorEl={anchorEl}
			onClose={handleClose}
			anchorOrigin={{ vertical: "bottom", horizontal: "center", }}
			transformOrigin={{ vertical: "down", horizontal: "rigth"}}
		>
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
