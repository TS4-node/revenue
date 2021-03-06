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
import store from './redux/store'
import { AppRouter } from './routers'


function App() {
	return (
		<>
			<Provider store={store}>
				<AppRouter />
			</Provider>
		</>

	);
}

export default App;
