import React from 'react';
import { Col, Container, Input, Row } from 'reactstrap';

import idLogo from '../assets/images/assignment_ind.png';

const owner = 'PPM Corporativo'

const CreateLimitOfCombo = () => {
	return (
		<>
			<Container className='text-center'>
				<h2
					className='mt-3 mb-5'
					style={{
						fontFamily: 'Roboto, sans-serif',
						fontWeight: 'bold',
						fontSize: '20px',
						color: 'rgba(0, 0, 0, 0.65)'
					}}
				>
					Nuevo Límite de Combos
				</h2>

				<p
                    className='my-2'
                    style={{
                        fontFamily:'Roboto, sans-serif',
                        fontSize:'14px',
                        color: 'rgba(0, 0, 0, 0.65)'
                    }}
                >
                    Propietario: &nbsp;
                    <span style={{ color: '#1890FF', fontWeight: '700' }} className='ml-1'>
                        <img src={idLogo} alt='id logo'/>
                        {owner}
                    </span>
                </p>

                <Row>
                    <Col sm='6' md='6'>
                        <Input

                        />
                    </Col>
                </Row>
			</Container>
		</>
	);
};

export default CreateLimitOfCombo;
