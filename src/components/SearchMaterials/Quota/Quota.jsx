import React from 'react';
import { Col, Row } from 'reactstrap';
import EmojiIcon from '@atlaskit/icon/glyph/search';
import Select, { components } from 'react-select';

const DropdownIndicator = props => {
	return (
		<components.DropdownIndicator {...props}>
			<EmojiIcon primaryColor={'#666666'} />
		</components.DropdownIndicator>
	);
};

const Quota = ({ setView, setValue }) => {
	return (
		<>
			<Row className='mt-4'>
				<Col sm='10' md='10' className='mx-auto h-25'>
					<Select
						value={''}
						onChange={''}
						options={''}
						components={{ DropdownIndicator }}
						placeholder={'Ingresa tu Busqueda'}
						styles={{
							control: css => ({ ...css, height: '.5rem' }),
							valueContainer: css => ({ ...css, position: 'initial', fontSize: '13px' }),
							option: css => ({ ...css, fontSize: '13px', paddingTop: '4px', paddingBottom: '4px' })
						}}
						noOptionsMessage={() => (
							<p className='m-0'>No hay resultados encontrados, verifica tu busqueda.</p>
						)}
						isClearable
					/>
				</Col>
			</Row>
		</>
	);
};

export default Quota;
