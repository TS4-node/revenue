/*	COMBOS HEROKU
 *  March 2021
 *
 *  Author: Alejandro Montes de Oca TS4
 *  Description: handler for content capture in the tabs for exclusions and inclusions
 *  =========================================================================
 *  Information about changes:
 *
 *  No.         Date.        Author.      		Description.
 *
 *
 */
import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Alert } from 'reactstrap';
import { useSelector, useDispatch } from 'react-redux';

import Products from './Products/Products';
import Quota from './Quota/Quota';
import { setTabViewAction } from '../../redux/actions/tabsViewCreateComboActions';

const SearchMaterials = ({ view, setView, setValue }) => {
	/*	Redux	*/
	const dispatch = useDispatch();
	const setCurrentViewTab = currentViewIndex => dispatch( setTabViewAction(currentViewIndex) );

	const products = useSelector(state => state.materials.GET_products);

	/*	State Local	*/
	const [buttonProductsActive, setButtonProductsActive] = useState(false);
	const [buttonQuotaActive, setButtonQuotaActive] = useState(false);

	useEffect(() => {
		setCurrentViewTab(2);
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	const handleButtonActiveProducts = () => {
		setButtonProductsActive(true);
		setButtonQuotaActive(false);
	};
	const handleButtonActiveQuota = () => {
		setButtonQuotaActive(true);
		setButtonProductsActive(false);
	};

	return (
		<Container className='py-0 my-0'>
			<Container className='px-5 mt-3'>
				<Row className='text-center px-5'>
					<Col sm='6' md='6' className='pl-4'>
						<div
							className={buttonProductsActive ? 'pseudo-btn pseudo-btn-active' : 'pseudo-btn'}
							onClick={handleButtonActiveProducts}>
							<p className='m-0'>Producto</p>
						</div>
					</Col>

					<Col sm='6' md='6' className='pr-4'>
						<div
							className={buttonQuotaActive ? 'pseudo-btn pseudo-btn-active' : 'pseudo-btn'}
							onClick={handleButtonActiveQuota}>
							<p className='m-0'>Cupo</p>
						</div>
					</Col>
				</Row>
			</Container>

			<Container className='my-3'>
				{!buttonProductsActive && !buttonQuotaActive && (
					<Alert color='light' className='text-center mt-5 pt-5'>
						Selecciona tus materiales
					</Alert>
				)}
				{buttonProductsActive && (
					<Products
						setView={setView}
						setValue={setValue}
						products={products}
						handleButtonActiveQuota={handleButtonActiveQuota}
					/>
				)}
				{buttonQuotaActive && (
					<Quota
						setView={setView}
						setValue={setValue}
						products={products}
					/>
				)}
			</Container>
		</Container>
	);
};

export default SearchMaterials;
