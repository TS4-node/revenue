import React from "react";
import styled from "styled-components";


const TextField = styled.input`
	height: 30px;
	width: 200px;
	border-radius: 3px;
	border-top-left-radius: 5px;
	border-bottom-left-radius: 5px;
	border-top-right-radius: 0;
	border-bottom-right-radius: 0;
	border: 1px solid #e5e5e5;
	padding: 0 32px 0 16px;
	outline: none;
	margin-bottom: 1rem;
	position: absolute;
	left: 80.4%;
	top: -130%;

	&:hover {
		cursor: pointer;
	}
`;

const Search = styled.button`
	margin-top: 0.1rem;
	position: absolute;
	left: 93.33%;
	top: -130%;
	background-image: url("/images/Search.png");
	background-repeat: no-repeat;
	background-position: center center;
	background-color: #fff;
	font-family: 'Inter', sans-serif;
	color: rgba(0, 0, 0, 0.65);
	width: 2rem;
	height: 1.6rem;
	display: block;
	text-indent: -9999px;
	border: none;
	cursor: pointer;
`;

const Image = styled.img`
    position: absolute;
    left: 97.18%;
    top: -130%;
    bottom: 88.95%;
`

const TableFilter = ({ filterText, onFilter, onClear }) => {
	return (
		<>
			<TextField
				id="search"
				type="text"
				placeholder="Busca Aquí"
				aria-label="Search Input"
				value={filterText}
				onChange={onFilter}
			/>
			<Search disabled/>
            <Image src="/images/Desc.png" alt="Desc icon" className='pt-2 float-right'/>
		</>
	);
};
export default TableFilter;
