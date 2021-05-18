/*  COMBOS HEROKU
 *  March 2021
 *
 *  Author: Alejandro Montes de Oca TS4
 *  Description: custom hook to use a Select and save the state of the selected option
 *  =========================================================================
 *  Information about changes:
 *
 *  No.         Date.        Author.      Description.
 *
 *
*/
import React, { useEffect, useState } from 'react';
import EmojiIcon from '@atlaskit/icon/glyph/search';
import Select, { components } from 'react-select';

//declare the icon to be part of the main component
const DropdownIndicator = props => {
	return (
		<components.DropdownIndicator {...props}>
			<EmojiIcon primaryColor={'#666666'} />
		</components.DropdownIndicator>
	);
};

const useSelect = (initialState, optionsList, placeholder = 'Busca Aquí', isMulti = false, isClearable = false, selected='') => {
	const [selectedOption, setSelectedOption] = useState(initialState);

	useEffect(() => {
		if(selected !== '') setSelectedOption(selected);
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	const handleChange = option => {
		setSelectedOption(option);
	};

	const SelectSearch = () => (
		<Select
			value={selectedOption}
			onChange={handleChange}
			options={optionsList}
			components={{ DropdownIndicator }}
			placeholder={placeholder}
			styles={{
				control: css => ({
					...css,
					fontFamily: 'Inter, sans-serif',
					fontSize: '14px',
				}),
				valueContainer: css => ({
					fontFamily: 'Inter, sans-serif',
					fontSize: '12px',
					fontWeight: 500,
					color: '#9a9a9a',
					paddingLeft: 10,
					display: 'flex'
				}),
				option: (css, state) => ({
					...css,
					fontFamily: 'Inter, sans-serif',
					fontWeight: 700,
					fontSize: '14px',
					color: state.isSelected ? '#ffffff' : '#686868',
					backgroundColor: state.isSelected ? '#1890ff' : '#fafafa',
					textAlign: 'left',
					':hover': {
						...css,
						fontFamily: 'Inter, sans-serif',
						fontWeight: 700,
						fontSize: '14px',
						backgroundColor: '#E6F7FF',
						color: '#1890ff',
					},
				}),
			}}
			isMulti={isMulti}
			isClearable={isClearable}
		/>
	);

	if (isMulti) {
		return [selectedOption, setSelectedOption, SelectSearch];
	} else {
		return [selectedOption === null ?initialState :selectedOption.value , setSelectedOption, SelectSearch];
	}
};

export default useSelect;
