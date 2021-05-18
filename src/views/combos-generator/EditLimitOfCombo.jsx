import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppBar, makeStyles, Tab, Tabs } from '@material-ui/core';
import SwipeableViews from 'react-swipeable-views';

import { a11yProps } from '../../helpers/styles';
import { TabPanel } from '../../components';
import { setTabViewAction } from '../../redux/actions/tabsViewCreateComboActions';


const EditLimitOfCombo = () => {



    const currentLimitOfCombo = useSelector(state => state.limitOfCombos.currentLimitOfCombo);

    const classes = useStyles();

	return (
		<>
			<div className={classes.tabContainer}>
				<AppBar position='static' color='default' className='mt-2'>
					<Tabs
						// value={value}
						// onChange={handleChange}
						indicatorColor='primary'
						textColor='primary'
						variant='fullWidth'
						style={{ height: '1rem' }}
					>
						<Tab
							{...a11yProps(0)}
							label={'DETALLE DEL LÍMITE'}
							className={[
								classes.wrapper,
								// value >= 0 ? classes.tabActive : classes.tabInactive,
							]}
						/>

						<Tab
							{...a11yProps(1)}
							label={'RELACIONADO'}
							className={[
								classes.wrapper,
								// value >= 3 ? classes.tabActive : classes.tabInactive,
							]}
						/>
					</Tabs>
				</AppBar>

				{/* this div is the selector in tab active on capture of combo */}
				<div className='d-flex m-0'>
					<div id='selector'></div>
					<div id='selector2'></div>
				</div>
				<div className={classes.bar}></div>

				<SwipeableViews
					axis='x'
					// index={value}
					// onChangeIndex={handleChangeIndex}
					className={classes.views}
				>
					<TabPanel value={'value'} index={0}>

					</TabPanel>

					<TabPanel value={'value'} index={1}>

					</TabPanel>

				</SwipeableViews>
			</div>
		</>
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

export default EditLimitOfCombo;
