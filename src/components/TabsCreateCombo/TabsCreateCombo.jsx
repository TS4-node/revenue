import React, { useState } from "react";
import SwipeableViews from "react-swipeable-views";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Box from "@material-ui/core/Box";

import "./TabsCreateCombo.css";
import { ComboData } from '../index'



function TabPanel(props) {
	const { children, value, index, ...other } = props;

	return (
		<div
			role="tabpanel"
			hidden={value !== index}
			id={`full-width-tabpanel-${index}`}
			aria-labelledby={`full-width-tab-${index}`}
			{...other}
		>
			{value === index && <Box p={3}>{children}</Box>}
		</div>
	);
}

function a11yProps(index) {
	return {
		id: `full-width-tab-${index}`,
		"aria-controls": `full-width-tabpanel-${index}`,
	};
}

const useStyles = makeStyles((theme) => ({
	root: {
		backgroundColor: theme.palette.background.paper,
		width: 1200,
	},
}));

export default function FullWidthTabs() {

	const classes = useStyles();
	const theme = useTheme();
	const [value, setValue] = useState(0);

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

	const handleChangeIndex = (index) => {
		setValue(index);
	};

	return (
		<div className={classes.root}>
			<AppBar position="static" color="default" className="mt-2">
				<Tabs
					value={value}
					onChange={handleChange}
					indicatorColor="primary"
					textColor="primary"
					variant="fullWidth"
					style={{ height: "1rem" }}
				>
					<Tab label="DATOS DEL COMBO" {...a11yProps(0)} />
					<Tab label="EXCLUSIONES E INCLUSIONES" {...a11yProps(1)} />
					<Tab label="BUSQUEDA DE MATERIALES" {...a11yProps(2)} />
					<Tab label="RESUMEN DEL COMBO" {...a11yProps(3)} />
				</Tabs>
			</AppBar>
			<SwipeableViews
				axis={theme.direction === "rtl" ? "x-reverse" : "x"}
				index={value}
				onChangeIndex={handleChangeIndex}
			>
				<TabPanel value={value} index={0} dir={theme.direction}>
					<ComboData setValue={setValue}/>
				</TabPanel>

				<TabPanel value={value} index={1} dir={theme.direction}>
					
				</TabPanel>

				<TabPanel value={value} index={2} dir={theme.direction}>
					
				</TabPanel>

				<TabPanel value={value} index={3} dir={theme.direction}>
					
				</TabPanel>
			</SwipeableViews>
		</div>
	);
}
