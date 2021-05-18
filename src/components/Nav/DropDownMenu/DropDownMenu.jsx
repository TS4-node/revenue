/*	COMBOS HEROKU
 *  March 2021
 *
 *  Author: Alejandro Montes de Oca TS4
 *  Description: it's the submenu for de navigation in the app, each option have your self item for the configuration his links
 *  =========================================================================
 *  Information about changes:
 *
 *  No.         Date.        Author.      		Description.
 *
 *
 */
import React from 'react';
import { Nav } from 'reactstrap';

import { Clientes, LimiteCombos, Combos, AprobacionesMasivas, Productos, Informes, Paneles } from '.';

const DropDownMenu = () => {
	return (
		<div>
			<Nav>
				<LimiteCombos />
				<Combos />
				<Clientes />
				<AprobacionesMasivas />
				<Productos />
				{/* <Informes /> */}
				<Paneles />
			</Nav>
		</div>
	);
};

export default DropDownMenu;
