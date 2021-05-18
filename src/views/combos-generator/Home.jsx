import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import { useHistory } from 'react-router-dom';

import { /*Head,*/ MainCard } from '../../components';
import mainLogo01 from '../../assets/images/main/main01.png';
import mainLogo02 from '../../assets/images/main/main02.png';
import mainLogo03 from '../../assets/images/main/main03.png';

const Home = () => {

    const history = useHistory();

	return (
		<>

			<Container>
				<h1
					className='mt-4 pt-2 text-center'
					style={{
						color: '#1890ff',
						fontFamily: 'Inter, sans-serif',
						fontWeight: 'bold',
						fontSize: '32px'
					}}
				>
					¿Qué quieres hacer?
				</h1>
				<Row className='pt-1'>
					<Col sm='4' md='4'>
						<MainCard
							image={mainLogo01}
							text={'Crear Límite y Combo'}
							description={'Configura el ID límite y sus materiales desde cero'}
							classNameHover={'main-card-green'}
                            onClick={ () => history.push('combos-generator/crear-limite-combo') }
						/>
					</Col>
					<Col sm='4' md='4'>
						<MainCard
							image={mainLogo02}
							text={'Crear combo con límite existente'}
							description={'Podrás usar un mismo ID límite pero con diferentes materiales'}
							classNameHover={'main-card-magenta'}
							onClick={ () => history.push('combos-generator/limite-combos') }
						/>
					</Col>
					<Col sm='4' md='4'>
						<MainCard
							image={mainLogo03}
							text={'Clonar combo existente'}
							description={'Podrás modificar la estructura de ventas con los mismos materiales'}
							classNameHover={'main-card-purple'}
						/>
					</Col>
				</Row>
				<Row className='mt-5 pt-3'>
					<Container className='text-center pr-5 mt-5'>
						<p
							className='mt-5'
							style={{
								fontFamily: 'Robot, sans-serif',
								fontWeight: '600',
								fontSize: '14px',
								textDecoration: 'underline',
                                color: '#1890FF'
							}}
						>
							Consultar límites y combos
						</p>
					</Container>
				</Row>
			</Container>
		</>
	);
};

export default Home;
