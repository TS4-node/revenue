import React from 'react';
import { Container } from 'reactstrap';
import { useSelector } from 'react-redux';

import './SumaryCombo.css';
import DetailComboData from './DetailComboData';
import DetailExclusionsInclusions from './DetailExclusionsInclusions';
import DetailMaterials from './DetailMaterials';

//This is id for the combo
let idCombo = new Date().getFullYear();

const SumaryCombo = ({setValue}) => {

	const productsStore = useSelector(state => state.materials.SET_products);
	const quotasStore = useSelector(state => state.materials.SET_quota);
	const allProducts = productsStore.concat(quotasStore);

	return (
		<Container className='pt-1 mt-1'>
			<h3
				className='text-center'
				style={{ fontFamily: 'Roboto, sans-serif', color: '#1890ff', fontSize: '24px' }}
			>
				COMBO {idCombo}
			</h3>
			<h3
				className='pt-1 m-0 text-center'
				style={{ fontFamily: 'Roboto, sans-serif', color: 'rgba(0, 0, 0, 0.65)', fontSize: '16px' }}
			>
				Combos MEGA
			</h3>

			<DetailComboData />

			<DetailExclusionsInclusions />

            <DetailMaterials idCombo={idCombo} setValue={setValue} allProducts={allProducts}/>

		</Container>
	);
};

export default SumaryCombo;
