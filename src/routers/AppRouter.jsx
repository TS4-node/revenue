/*  COMBOS HEROKU
 *  March 2021
 *
 *  Author: Alejandro Montes de Oca TS4
 *  Description: here is a configuration about the routing
 *  =========================================================================
 *  Information about changes:
 *
 *  No.         Date.        Author.      Description.
 *
 *
*/
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { Head, Nav } from '../components';
import { CombosGeneratorRouter } from './index';

const AppRouter = () => {
	return (
		<Router>
			<header>
				<Head />
				<Nav />
			</header>

			<Switch>
				<Route path='/' component={CombosGeneratorRouter} />
			</Switch>
		</Router>
	);
};

export default AppRouter;
