/*	COMBOS HEROKU
 *  March 2021
 *
 *  Author: Alejandro Montes de Oca TS4
 *  Description: it is option of "Combos" for the navigation in the application,
 * 	inside it has the configuration to url that will be sent
 *  =========================================================================
 *  Information about changes:
 *
 *  No.         Date.        Author.      		Description.
 *
 *
 */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Dropdown, DropdownItem, DropdownToggle, DropdownMenu } from 'reactstrap';

const Combos = () => {
	const [dropdownOpen, setDropdownOpen] = useState(false);

	const toggle = () => setDropdownOpen(!dropdownOpen);

	return (
		<div>
			<Dropdown nav isOpen={dropdownOpen} toggle={toggle}>
				<DropdownToggle nav caret className='text pl-1'>
					Combos
				</DropdownToggle>
				<DropdownMenu className='submenu'>
					<DropdownItem className='option'>
						<Link to={'/crear-combo'}>Crear Combo</Link>
					</DropdownItem>
					<DropdownItem className='option'>Detalle</DropdownItem>
					<DropdownItem className='option'>Relacionado</DropdownItem>
				</DropdownMenu>
			</Dropdown>
		</div>
	);
};

export default Combos;
