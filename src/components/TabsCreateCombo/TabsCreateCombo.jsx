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
import { useDispatch, useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Tabs, Tab } from '@material-ui/core';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import SwipeableViews from 'react-swipeable-views';

import './TabsCreateCombo.css';
import {
	TabPanel,
	ComboData,
	ExclusionsAndInclusions,
	SearchMaterials,
	SumaryCombo,
} from '../index';
import { a11yProps } from '../../helpers/styles';
import PopoverExclusionsAndInclusions from './PopoverExclusionsAndInclusions/PopoverExclusionsAndInclusions';
// import PopoverSearchMaterials from './PopoverSearchMaterials/PopoverSearchMaterials';
import { handleDivIndicator } from '../../helpers/styles';
import { getAllDataAction } from '../../redux/actions/exclusionsAndInclusionsActions';
import { getAllMaterialsAction } from '../../redux/actions/searchMaterialsActions';

const TabsCreateCombo = () => {
	/*    Redux     */
	const dispatch = useDispatch();

	const getAllDataExclusionsAndInclusions = () => dispatch(getAllDataAction());
	const getAllDataMaterials = () => dispatch(getAllMaterialsAction());

	const currentViewIndex = useSelector(
		state => state.currentViewIndexCreateCombo.currentTabView,
	);
	const currentNestedViewIndex = useSelector(
		state => state.currentViewIndexCreateCombo.currentNestedView,
	);

	useEffect(() => {
		getAllDataExclusionsAndInclusions();
		getAllDataMaterials();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	/*    Local State     */

	const classes = useStyles();

	//For de Tabs in nav
	const [value, setValue] = useState(currentViewIndex);
	//for Tab & PopoverExclusionsAndInclusions
	const [ anchorElExclusionsAndInclusions, setAnchorELExclusionsAndInclusions ] = useState(null);
	const [ viewExclusionsAndInclusions, setViewExclusionsAndInclusions ] = useState(currentNestedViewIndex);

	useEffect(() => {
		handleDivIndicator(value);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [value]);

	const handleChange = (event, newValue) => setValue(newValue);

	const handleChangeIndex = index => setValue(index);

	const handleClickExclusionsAndInclusionsTab = event => {
		event.stopPropagation();
		setAnchorELExclusionsAndInclusions(event.currentTarget);
	};


	return (
		<div className={classes.tabContainer}>
			<AppBar position='static' color='default' className='mt-2'>
				<Tabs
					value={value}
					onChange={handleChange}
					indicatorColor='primary'
					textColor='primary'
					variant='fullWidth'
					style={{ height: '1rem' }}
				>
					<Tab
						{...a11yProps(0)}
						label={'DATOS DEL COMBO'}
						className={[
							classes.wrapper,
							value >= 0 ? classes.tabActive : classes.tabInactive,
						]}
					/>
					<Tab
						label={'EXCLUSIONES E INCLUSIONES'}
						className={[
							classes.wrapper,
							value >= 1 ? classes.tabActive : classes.tabInactive,
						]}
						icon={
							<ArrowDropDownIcon
								onClick={handleClickExclusionsAndInclusionsTab}
							/>
						}
					/>
					<Tab
						label={'BUSQUEDA DE MATERIALES'}
						className={[
							classes.wrapper,
							value >= 2 ? classes.tabActive : classes.tabInactive,
						]}
					/>
					<Tab
						{...a11yProps(3)}
						label={'RESUMEN DEL COMBO'}
						className={[
							classes.wrapper,
							value >= 3 ? classes.tabActive : classes.tabInactive,
						]}
					/>
				</Tabs>

				<PopoverExclusionsAndInclusions
					anchorEl={anchorElExclusionsAndInclusions}
					setAnchorEL={setAnchorELExclusionsAndInclusions}
					setView={setViewExclusionsAndInclusions}
				/>
			</AppBar>

			{/* this div is the selector in tab active on capture of combo */}
			<div className='d-flex m-0'>
				<div id='selector'></div>
				<div id='selector2'></div>
			</div>
			<div className={classes.bar}></div>

			<SwipeableViews
				axis='x'
				index={value}
				onChangeIndex={handleChangeIndex}
				className={classes.views}
			>
				<TabPanel value={value} index={0}>
					<ComboData
						setValue={setValue}
						setView={setViewExclusionsAndInclusions}
					/>
				</TabPanel>

				<TabPanel value={value} index={1}>
					<ExclusionsAndInclusions
						view={viewExclusionsAndInclusions}
						setView={setViewExclusionsAndInclusions}
						setValue={setValue}
					/>
				</TabPanel>

				<TabPanel value={value} index={2}>
					<SearchMaterials setValue={setValue} />
				</TabPanel>

				<TabPanel value={value} index={3}>
					<SumaryCombo setValue={setValue} />
				</TabPanel>
			</SwipeableViews>
		</div>
	);
};

const useStyles = makeStyles(theme => ({
	root: {
		// backgroundColor: theme.palette.background.paper,
		width: 1200,
		minHeight: '55rem',
		margin: '0 auto',
	},
	wrapper: {
		fontFamily: 'Inter, sans-serif',
		fontWeight: 600,
		fontSize: '12px',
	},
	tabActive: {
		color: '#1890ff!important',
	},
	tabInactive: {
		color: '#9a9a9a!important',
	},
	tabContainer: {
		width: 1200,
		minHeight: '55rem',
		margin: '0 auto',
	},
	views: {
		paddingTop: '0rem',
		height: '55rem',
		overflow: 'hidden',
	},
	bar: {
		backgroundColor: '#e6e6e6',
		height: '.18rem',
		// marginTop: '-0.9px',
		background: 'none'
	},
}));

export default TabsCreateCombo;
