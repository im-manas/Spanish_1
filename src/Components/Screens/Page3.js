import React, { Component } from "react";
import MuiAlert from "@mui/lab/Alert";
import { Paper, Table, TableBody, TableCell, TableHead, TablePagination, TableRow, Badge, TextField, Fab, Backdrop, Grid, MenuItem, Button, Snackbar, Typography } from "@mui/material";
import TableContainer from "@mui/material/TableContainer";
import { CircleLoader } from "react-spinners";

function Alert(props) {
	return <MuiAlert elevation={6} variant="filled" {...props} />;
}

export default class Page3 extends Component {
	constructor(props) {
		super(props);
		this.state = {
			BackDrop: false,
			SnackBar: false,
			SnackBarVariant: "warning",
			snackBarMessage: "",
			SnackbarTimeOut: 4000,
		};
	}

	// Alert Messages Trigger function
	SnackbarActions = async (Data) => {
		if (Data.key === "Open") {
			await this.setState({
				SnackBar: true,
				SnackBarVariant: Data.variant,
				snackBarMessage: Data.Message,
				SnackbarTimeOut: Data.TimeOut,
			});
		} else {
			await this.setState({ SnackBar: false, SnackbarTimeOut: 10000 });
		}
	};

	render() {
		// const classes = useStyles();
		return (
			<>
				<Grid container spacing={2}>
					<Grid item xs={12}>
						<Typography variant="h4">Mantenimiento de Tipos de Alertas</Typography>
					</Grid>
					<Grid item xs={12}>
						<Typography variant="h6">Editar Tipo Alerta</Typography>
					</Grid>
					<Grid item xs={6} sm={2}>
						<Typography variant="h6">Nombre Tipo Alerta:</Typography>
					</Grid>
					<Grid item xs={5} sm={4}>
						<TextField variant="outlined" fullWidth />
					</Grid>
					<Grid item xs={1} sm={6} />
					<Grid item xs={6} sm={2}>
						<Typography variant="h6">Estado:</Typography>
					</Grid>
					<Grid item xs={5} sm={4}>
						<TextField variant="outlined" select fullWidth>
							<MenuItem>Activo</MenuItem>
						</TextField>
					</Grid>
					<Grid item xs={1} sm={6} />
					<Grid item xs={6} sm={2}>
						<Button variant="outlined">Guardar</Button>
					</Grid>
					<Grid item xs={6} sm={2}>
						<Button variant="outlined">Cancelar</Button>
					</Grid>
				</Grid>

				{/* Alert Messages */}
				<Snackbar open={this.state.SnackBar} autoHideDuration={this.state.SnackbarTimeOut} onClose={() => this.SnackbarActions({ key: "Close", variant: "warning" })} anchorOrigin={{ vertical: "top", horizontal: "center" }}>
					<Alert onClose={() => this.SnackbarActions({ key: "Close" })} severity={this.state.SnackBarVariant} variant="filled">
						{this.state.snackBarMessage}
					</Alert>
				</Snackbar>

				{/* Backdrop When Data Loading */}
				<Backdrop style={{ zIndex: 2, color: "#fff" }} open={this.state.BackDrop}>
					<CircleLoader color="white" size={100} />
				</Backdrop>
			</>
		);
	}
}
