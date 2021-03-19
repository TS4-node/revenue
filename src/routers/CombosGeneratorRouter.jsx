/*  COMBOS HEROKU
 *  March 2021
 *
 *  Author: Alejandro Montes de Oca TS4
 *  Description: here is a configuration about the routing for module in the app "Combos Generator"
 *  =========================================================================
 *  Information about changes:
 *
 *  No.         Date.        Author.      Description.
 *
 *
*/
import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { LimitOfCombos, TabsCreateCombo } from '../components';

const CombosGeneratorRouter = () => {
	return (
		<>
			<Switch>
				<Route exact path='/' component={LimitOfCombos} />
				<Route exact path='/crear-combo' component={TabsCreateCombo} />

				<Redirect to='/' />
			</Switch>
		</>
	);
};

export default CombosGeneratorRouter;
