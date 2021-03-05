import React, { useState } from 'react';
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

const useSelect = (initialState, optionsList, placeholder = 'Busca Aquí', isMulti = false) => {
	const [selectedOption, setSelectedOption] = useState(initialState);

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
				control: css => ({ ...css, paddingLeft: '.5rem' })
			}}
			isMulti={isMulti}
		/>
	);

	if (isMulti) {
		return [selectedOption, setSelectedOption, SelectSearch];
	} else {
		return [selectedOption.value, setSelectedOption, SelectSearch];
	}
};

export default useSelect;
