import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { optionsListCD } from '../helpers/selectsOption';
import {
	clearDataComboAction,
	createDataComboAction,
} from '../redux/actions/comboDataActions';
import useSelect from './useSelect';

const initialCombo = {
	fechaIni: '',
	fechaFin: '',
	descripcionCorta: '',
	descripcionLarga: '',
	agrupadorPrecios: [],
	maxCombosVentas: 0,
	maxCombosCliente: 0,
	moneda: '',
	aplicaciones: { allmobile: false, televenta: false, b2b: false, dbr: false },
};

function compareDatess(dateString) {
	let currentDate = new Date();
	let compareDate = new Date(dateString);

	// compare only date => not hours!!
	currentDate.setHours(0, 0, 0, 0);

	if (currentDate <= compareDate) {
		return true;
	} else {
		return false;
	}
};

function compareDatesCombo(startDate, endDate) {
	let _startDate = new Date(startDate);
	let _endDate = new Date(endDate);

	// compare only date => not hours!!
	_startDate.setHours(0, 0, 0, 0);
	_endDate.setHours(0, 0, 0, 0);

	if (_startDate <= _endDate) {
		return true;
	} else {
		return false;
	}
};

const useComboData = (setValue, setView) => {
	/*    Redux     */
	const dispatch = useDispatch();
	const createDataCombo = dataCombo => dispatch(createDataComboAction(dataCombo));
	const clearDataCombo = () => dispatch(clearDataComboAction());
	const dataCombo = useSelector(state => state.comboData.comboData);
	const currentLimitOfCombo = useSelector(state => state.limitOfCombos.currentLimitOfCombo);

	/*
	 * State Local
	 */
	const [combo, setCombo] = useState(dataCombo ? dataCombo : initialCombo);
	const [priceGrouper, setPriceGrouper, SelectPrices] = useSelect(
		'',
		optionsListCD,
		'Agrupador de Precios',
		true,
	);
	const [check, setCheck] = useState({});
	const [error, setError] = useState(false);

	const [msgError, setMsgError] = useState('');
	const [errorDate, setErrorDate] = useState(false);
	const [errorMaxCombosVentas, setErrorMaxCombosVentas] = useState(false);
	const [errorMaxCombosCliente, setErrorMaxCombosCliente] = useState(false);

    useEffect(() => {
		setCombo({
			...combo,
			aplicaciones: check
		});
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [check]);

	useEffect(() => {
		if (priceGrouper) {
			const group = priceGrouper.map(item => item.value);
			setCombo({
				...combo,
				agrupadorPrecios: group
			});
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [priceGrouper]);

	const handleChangeCheckbox = e => {
		setCheck({
			...check,
			[e.target.name]: e.target.checked,
		});
	};

	const handleChange = e => {
		const {
			target: { name, value },
		} = e;

		if (name === 'fechaIni') {
			// if (!compareDates(value, 'start')) {
			if (!compareDatess(value)) {
				setErrorDate(true);
				setMsgError('La fecha inicio debe ser mayor a la fecha del día de hoy');
				return;
			}
			if (compareDatesCombo(combo.fechaFin, value)) {
				setErrorDate(true);
				setMsgError('La fecha inicio debe ser menor a la fecha de fin.');
				return;
			} else {
				setErrorDate(false);
				setMsgError('');
			}
		}
		if (name === 'fechaFin') {
			// if (!compareDates(value, 'end')) {
			if (!compareDatess(value)) {
				setErrorDate(true);
				setMsgError('La fecha fin debe ser mayor a la fecha del día de hoy');
				return;
			}
			if (!compareDatesCombo(combo.fechaIni, value)) {
				setErrorDate(true);
				setMsgError('La fecha fin debe ser mayor a la fecha de inicio.');
				return;
			} else {
				setErrorDate(false);
				setMsgError('');
			}
		}
		if (name === 'maxCombosVentas') {
			if (parseInt(value) < 1) {
				setErrorMaxCombosVentas(true);
				setMsgError('Máximo de combos por estructura no puede ser menor a 1.');
				return;
			} else {
				setErrorMaxCombosVentas(false);
				setMsgError('');
				setCombo({
					...combo,
					[name]: parseInt(value),
				});
				createDataCombo({
					...combo,
					[name]: parseInt(value),
				});
				return;
			}
		}
		if (name === 'maxCombosCliente') {
			if (parseInt(value) < 1) {
				setErrorMaxCombosCliente(true);
				setMsgError('Máximo de combos por cliente no puede ser menor a 1.');
				return;
			}
			if (combo.maxCombosVentas < value) {
				setErrorMaxCombosCliente(true);
				setMsgError(
					'Máximo de combos por cliente no puede ser mayor a combos máximo por estructura de ventas.',
				);
				return;
			} else {
				setErrorMaxCombosCliente(false);
				setMsgError('');
			}
			setCombo({
				...combo,
				[name]: parseInt(value),
			});
			createDataCombo({
				...combo,
				[name]: parseInt(value),
			});
			return;
		}
		setCombo({
			...combo,
			[name]: value,
		});
		createDataCombo({
			...combo,
			[name]: value,
		});
	};

	const clearForm = () => {
		document.getElementById('startDate').value = '';
		document.getElementById('endDate').value = '';
		document.getElementById('descripcionCorta').value = '';
		document.getElementById('descripcionLarga').value = '';
		document.getElementById('maximoCombosVentas').value = '';
		document.getElementById('maximoCombosCliente').value = '';
		document.getElementById('moneda').value = '';
		setPriceGrouper('');
		setCheck({});
		setCombo(initialCombo);
		clearDataCombo();
		setError(false);
	};

	const saveCombo = () => {
		if (
			dataCombo.fechaIni === '' ||
			!compareDatess(dataCombo.fechaIni) ||
			dataCombo.fechaFin === '' ||
			!compareDatess(dataCombo.fechaFin) ||
			dataCombo.descripcionCorta.trim() === '' ||
			dataCombo.descripcionLarga.trim() === '' ||
			dataCombo.agrupadorPrecios === [] ||
			dataCombo.maxCombosCliente === 0 ||
			dataCombo.maxCombosVentas === 0 ||
			dataCombo.moneda === '' ||
			errorDate ||
			errorMaxCombosVentas ||
			errorMaxCombosCliente
		) {
			setError(true);
		} else {
			setError(false);
			createDataCombo(combo);
			setCombo(combo);
			setValue(1);
			setView(0);
		}
	};

	return {
        dataCombo,
        currentLimitOfCombo,
        combo,
        priceGrouper,
        error,
        check,
        msgError,
        errorDate,
        errorMaxCombosVentas,
        errorMaxCombosCliente,
        handleChange,
        handleChangeCheckbox,
        SelectPrices,
        saveCombo,
        clearForm,
        setCombo,
    };
};

export default useComboData;
