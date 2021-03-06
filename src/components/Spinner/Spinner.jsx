/*	COMBOS HEROKU
 *  March 2021
 *
 *  Author: Alejandro Montes de Oca TS4
 *  Description: this is a simple rotating circle to wait for loading actions
 *  =========================================================================
 *  Information about changes:
 *
 *  No.         Date.        Author.      		Description.
 *
 *
 */
import './Spinner.css';

const Spinner = () => {
	return (
		<div className='my-5 py-5 mx-auto'>
			<div className='sk-circle'>
				<div className='sk-circle1 sk-child'></div>
				<div className='sk-circle2 sk-child'></div>
				<div className='sk-circle3 sk-child'></div>
				<div className='sk-circle4 sk-child'></div>
				<div className='sk-circle5 sk-child'></div>
				<div className='sk-circle6 sk-child'></div>
				<div className='sk-circle7 sk-child'></div>
				<div className='sk-circle8 sk-child'></div>
				<div className='sk-circle9 sk-child'></div>
				<div className='sk-circle10 sk-child'></div>
				<div className='sk-circle11 sk-child'></div>
				<div className='sk-circle12 sk-child'></div>
				<p style={{ color: '#1890ff', fontSize: '10px', paddingTop: '2rem', fontWeight: 'bold' }} className='pl-3'>
					Cargando
				</p>
			</div>
		</div>
	);
};

export default Spinner;
