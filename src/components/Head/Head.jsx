import React from 'react';
import { Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';

import './Head.css';
import ABILogo from '../../assets/images/header/ABInBev-logo.png';
import HeadMenu from './HeadMenu';

const Head = () => {
	return (
		<>
			<Row className='mt-1 nav d-flex flex-nowrap justify-content-center' style={{ height: '55px' }}>
				<Col xs='4' sm='4'>
					<Link to={'/'} style={{ textDecoration: 'none' }}>
						<h1 className='combos-generator text-center mb-0 mt-3'>Combos Generator</h1>
					</Link>
				</Col>
				<Col xs='4' sm='4' className='text-center'>
					<img src={ABILogo} alt='ABInBev Logo' />
				</Col>
				<Col xs='4' sm='4' className='mt-3'>
					<HeadMenu />
				</Col>
			</Row>
			<hr className='my-0' />
		</>
	);
};

export default Head;
