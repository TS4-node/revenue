import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Paper, InputBase, /*Divider,*/ IconButton } from '@material-ui/core'
import SearchIcon from "@material-ui/icons/Search";



const useStyles = makeStyles((theme) => ({
	root: {
		padding: "2px 4px",
		display: "flex",
		alignItems: "center",
		width: 720,
		height: 30,
		border:'1px solid #e5e5e5',
		margin: '.5rem 0',
		boxShadow:'none'
	},
	input: {
		marginLeft: theme.spacing(2),
		flex: 1,
		fontSize: '14px'
	},
	iconButton: {
		padding: 10
	},
	divider: {
		height: 28,
		margin: 4
	},
}));

const TableFilter = ({ name, value, onChange }) => {
	const classes = useStyles();

	return (
		<Paper component="form" className={classes.root}>
			<InputBase
				className={classes.input}
				placeholder="Ingresa tu búsqueda"
				name={name}
				value={value}
				onChange={onChange}
			/>
			{/* <Divider className={classes.divider} orientation="vertical" /> */}
			<IconButton
				type="submit"
				className={classes.iconButton}
				disabled
			>
				<SearchIcon style={{color: 'rgba(0, 0, 0, 0.84)'}}/>
			</IconButton>
		</Paper>
	);
}

export default TableFilter;