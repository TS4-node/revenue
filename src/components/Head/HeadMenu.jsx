/*	COMBOS HEROKU
 *  March 2021
 *
 *  Author: Alejandro Montes de Oca TS4
 *  Description: items for the menu profile
 *  =========================================================================
 *  Information about changes:
 *
 *  No.         Date.        Author.      		Description.
 *
 *
 */
import React from 'react';

// import starsImage from '../../assets/images/header/stars.png';
// import helpImage from '../../assets/images/header/help.png';
// import userImage from '../../assets/images/header/Vector.svg';
import notificationImage from '../../assets/images/header/notifications.png';
import mexicoImage from '../../assets/images/countries/mexico.png';
import userImage from '../../assets/images/user.png';
import userStatusOnline from '../../assets/images/statusOnline.png';

const HeaderMenu = () => {
	return (
		<>
			<div className='d-flex align-items-center justify-content-center'>
				<img
					src={notificationImage}
					alt='notifications icon'
					className='mr-3'
					// style={{
					// 	height: '19.5px',
					// 	width: '16px',
					// }}
				/>
				<div className='d-flex align-items-center justify-content-center'>
					<img
						src={mexicoImage}
						alt='Imagen Pais'
						style={{ height: '38px', width: '38px' }}
						className='mr-3'
					/>
					<div
						className='d-flex align-items-center justify-content-center'
						style={{
							height: '40px',
							width: '40px',
							position: 'relative',
						}}
					>
						<img
							src={userImage}
							alt='Imagen Perfil'
							style={{
								height: '40px',
								width: '40px',
							}}
						/>
						<img
							src={userStatusOnline}
							alt='status online'
							style={{
								position: 'absolute',
								bottom: 0,
								right: 0
							}}
						/>
					</div>
				</div>
			</div>
		</>
	);
};

export default HeaderMenu;
