import './Header.css';

import React from 'react';

const HeaderMenu = () => {
  return (
    <>
      <div className=' text-center'>
        <img src='images/header/stars.png' alt='stars icon' className='mr-3' />
        <img src='images/header/help.png' alt='help icon' className='mr-3' />
        <img src='images/header/notifications.png' alt='notifications icon' className='mr-3'/>
        <img src='images/header/Vector.svg' alt='frame icon' />
      </div>
    </>
  );
};

export default HeaderMenu;
