import React from 'react';

import './MainCard.css';

const MainCard = ({ image, text, description, classNameHover, onClick }) => {
	return (
		<div
			className={`text-center py-3 mt-3`}
			onClick={onClick}
			style={{
				width:291,
				height: 419,
				cursor: 'pointer'
			}}
		>
			<div
				className={`${classNameHover} main-card  p-0 m-0 mb-2 d-flex align-items-center justify-content-center`}
				style={{
					height:'350px',
					width: '300px'
				}}
			>
				<img
					src={image}
					alt={`Logo ${ text }`}
					style={{
						height:'220px'

					}}
				/>
			</div>
			<h3
				className='mb-4 pb-2'
				style={{
					color: '#1890ff',
					fontFamily: 'Inter, sans-serif',
					fontWeight: 'bold',
					fontSize: '20px',
                    height:'74px'
				}}
			>
				{ text }
			</h3>
			<p
				className='m-0'
				style={{
					fontFamily: 'Inter, sans-serif',
					fontWeight: '500',
					fontSize: '14px',
					color: '#686868',
                    padding: '0 1.5rem'
				}}
			>
				{ description }
			</p>
		</div>
	);
};

export default MainCard;
