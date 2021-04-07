import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Login from '../views/main/Login';
import SelectCountrys from '../views/main/SelectCountrys';
import GettingStart from '../views/main/GettingStart';

const currentYear = new Date().getFullYear();

const RevenueRouter = () => {
	return (
		<>

			<Switch>
				<Route exact path='/main/login' component={Login} />
				<Route exact path='/main/country' component={SelectCountrys} />
				<Route exact path='/main/start' component={GettingStart} />
				<Redirect to='/main/login' />
			</Switch>

			<footer className='px-4 py-1' style={{ height: '24px' }}>
				<div className='d-flex justify-content-between'>
					<p className='m-0 text-footer'>AB-INVEV</p>
					<p className='m-0 text-footer'>{currentYear}</p>
				</div>
			</footer>
		</>
	);
};

export default RevenueRouter;
