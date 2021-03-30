/*	COMBOS HEROKU
 *  March 2021
 *
 *  Author: Alejandro Montes de Oca TS4
 *  Description: this component groups the views for the creation of the combo in a specific panel
 *  with animation: "Combo Data", "Exclusions and Inclusions", "Search for Materials", "Combo Summary"
 *  =========================================================================
 *  Information about changes:
 *
 *  No.         Date.        Author.      		Description.
 *
 *
 */
import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { AppBar, Tabs, Tab } from '@material-ui/core';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import SwipeableViews from 'react-swipeable-views';

import './TabsCreateCombo.css';
import { TabPanel, ComboData, ExclusionsAndInclusions, SearchMaterials, SumaryCombo } from '../index';
import { a11yProps } from '../../helpers/styles';
import PopoverExclusionsAndInclusions from './PopoverExclusionsAndInclusions/PopoverExclusionsAndInclusions';
// import PopoverSearchMaterials from './PopoverSearchMaterials/PopoverSearchMaterials';
import { handleDivIndicator } from '../../helpers/styles';
import { getAllDataAction } from '../../redux/actions/exclusionsAndInclusionsActions';
import { getAllMaterialsAction } from '../../redux/actions/searchMaterialsActions';

const useStyles = makeStyles(theme => ({
	root: {
		backgroundColor: theme.palette.background.paper,
		width: 1200,
		minHeight: '55rem',
		margin: '0 auto'
	},
	Tab: {
		flexDirection: 'row-reverse'
	}
}));


const TabsCreateCombo = () => {

	/*    Redux     */
	const dispatch = useDispatch();

	const getAllDataExclusionsAndInclusions = () => dispatch(getAllDataAction());
	const getAllDataMaterials = () => dispatch(getAllMaterialsAction());

	useEffect(() => {
		getAllDataExclusionsAndInclusions();
		getAllDataMaterials();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	/*    Local State     */
	const classes = useStyles();
	const theme = useTheme();

	//For de Tabs in nav
	const [value, setValue] = useState(0);
	//for Tab & PopoverExclusionsAndInclusions
	const [anchorElExclusionsAndInclusions, setAnchorELExclusionsAndInclusions] = useState(null);
	const [viewExclusionsAndInclusions, setViewExclusionsAndInclusions] = useState(0);

	//for Tab & PopoverSearchMaterials
	// const [anchorElSearchMaterials, setAnchorELSearchMaterials] = useState(null);
	// const [viewSearchMaterials, setViewSearchMaterials] = useState(0);

	const handleChange = (event, newValue) => setValue(newValue);

	const handleChangeIndex = index => setValue(index);

	const handleClickExclusionsAndInclusionsTab = event => {
		event.stopPropagation();
		setAnchorELExclusionsAndInclusions(event.currentTarget);
	};

	// const handleClickSearchMaterials = event => {
	// 	event.stopPropagation();
	// 	setAnchorELSearchMaterials(event.currentTarget);
	// };

	useEffect(() => {
		handleDivIndicator(value);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [value]);

	return (
		<div className={classes.root}>
			<AppBar position='static' color='default' className='mt-2'>
				<Tabs
					value={value}
					onChange={handleChange}
					indicatorColor='primary'
					textColor='primary'
					variant='fullWidth'
					style={{ height: '1rem' }}>
					<Tab label={'DATOS DEL COMBO'} {...a11yProps(0)} />
					<Tab label={'EXCLUSIONES E INCLUSIONES'} icon={<ArrowDropDownIcon onClick={handleClickExclusionsAndInclusionsTab} />} />
					<Tab label={'BUSQUEDA DE MATERIALES'} /*icon={<ArrowDropDownIcon onClick={handleClickSearchMaterials} />} *//>
					<Tab label={'RESUMEN DEL COMBO'} {...a11yProps(3)} />
				</Tabs>

				<PopoverExclusionsAndInclusions
					anchorEl={anchorElExclusionsAndInclusions}
					setAnchorEL={setAnchorELExclusionsAndInclusions}
					setView={setViewExclusionsAndInclusions}
				/>
				{/* <PopoverSearchMaterials
					anchorEl={anchorElSearchMaterials}
					setAnchorEL={setAnchorELSearchMaterials}
					setView={setViewSearchMaterials}
				/> */}
			</AppBar>

			{/* this div is the selector in tab active on capture of combo */}
			<div id='selector'></div>

			<SwipeableViews
				axis='x'
				index={value}
				onChangeIndex={handleChangeIndex}
				style={{ paddingTop: '0rem', height: '55rem', overflow: 'hidden' }}
			>
				<TabPanel value={value} index={0} dir={theme.direction}>
					<ComboData setValue={setValue} setView={setViewExclusionsAndInclusions}/>
				</TabPanel>

				<TabPanel value={value} index={1} dir={theme.direction}>
					<ExclusionsAndInclusions view={viewExclusionsAndInclusions} setView={setViewExclusionsAndInclusions} setValue={setValue} />
				</TabPanel>

				<TabPanel value={value} index={2} dir={theme.direction}>
					<SearchMaterials /*view={viewSearchMaterials} setView={setViewSearchMaterials} */ setValue={setValue}/>
				</TabPanel>

				<TabPanel value={value} index={3} dir={theme.direction}>
					<SumaryCombo setValue={setValue} />
				</TabPanel>

			</SwipeableViews>
		</div>
	);
};

export default TabsCreateCombo;
