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
