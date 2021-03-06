/*  COMBOS HEROKU
 *  March 2021
 *
 *  Author: Alejandro Montes de Oca TS4
 *  Description: This document is the main node of the application,
 *  here is a configuration about the routing
 *  =========================================================================
 *  Information about changes:
 *
 *  No.         Date.        Author.      Description.
 *
 *
*/

import { Provider } from 'react-redux'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Head, Nav, TabsCreateCombo, LimitOfCombos } from './components/index'
import store from './redux/store'



function App() {
	return (
		<>
			<Router>
				<Provider store={store}>
					<header>
						<Head />
						<Nav />
					</header>

					<Switch>
						<Route exact path='/' component={LimitOfCombos} />
						<Route exact path='/crear-combo' component={TabsCreateCombo} />
					</Switch>

				</Provider>
			</Router>

		</>

	);
}

export default App;
