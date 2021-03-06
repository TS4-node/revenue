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

import starsImage from '../../assets/images/header/stars.png';
import helpImage from '../../assets/images/header/help.png';
import userImage from '../../assets/images/header/Vector.svg';
import notificationImage from '../../assets/images/header/notifications.png';

const HeaderMenu = () => {
	return (
		<>
			<div className=' text-center'>
				<img src={starsImage} alt='stars icon' className='mr-3' />
				<img src={helpImage} alt='help icon' className='mr-3' />
				<img src={notificationImage} alt='notifications icon' className='mr-3' />
				<img src={userImage} alt='frame icon' />
			</div>
		</>
	);
};

export default HeaderMenu;
