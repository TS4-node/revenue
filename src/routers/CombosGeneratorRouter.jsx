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
import { Switch, Route, Redirect, useLocation } from 'react-router-dom';
import { Head, Nav, LimitOfCombos, TabsCreateCombo } from '../components';
import Home from '../views/combos-generator/Home';
import CreateLimitOfCombo from '../views/combos-generator/CreateLimitOfCombo';
import AllCombos from '../views/combos-generator/AllCombos';

const CombosGeneratorRouter = () => {

	const location = useLocation();

	const Header = location.pathname === '/combos-generator'
	? (
		<header>
			<Head />
		</header>
	)
	: (
		<header>
			<Head />
			<Nav />
		</header>
	)


	return (
		<>

			{ Header }

			<Switch>
				<Route exact path='/combos-generator' component={Home}/>
				<Route exact path='/combos-generator/crear-limite-combo' component={CreateLimitOfCombo}/>
				<Route exact path='/combos-generator/crear-combo' component={TabsCreateCombo}/>
				<Route exact path='/combos-generator/limite-combos' component={LimitOfCombos}/>
				<Route exact path='/combos-generator/todos-los-combos' component={AllCombos}/>
				<Redirect to='/combos-generator' />
			</Switch>
		</>
	);
};

export default CombosGeneratorRouter;
