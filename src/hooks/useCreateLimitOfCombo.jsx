import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import {
	createCurrentLimitOfComboAction,
	createLimitOfComboAction,
} from '../redux/actions/limitOfCombosActions';

const initialLimitOfCombo = {
	nivelCombo: '',
	estructuraVenta: '',
	combosPermitidos: 0,
	CombosDisponibles: 0,
	activo: false,
	IdLimite: '',
};

const useCreateLimitOfCombo = () => {
	/*    Redux     */
	const dispatch = useDispatch();

	const addLimitOfCombo = limitOfCombo => dispatch(createLimitOfComboAction(limitOfCombo));
	const createCurrentlimitOfCombo = limitOfCombo => dispatch(createCurrentLimitOfComboAction(limitOfCombo));

	/*    Local State     */
	const [limitOfCombo, setLimitOfCombo] = useState(initialLimitOfCombo);
	const [error, setError] = useState(false);
	const [saved, setSaved] = useState(false);
	const [selectedOptionSS, setSelectedOptionSS] = useState('');
	const [selectedOptionCN, setSelectedOptionCN] = useState('');
	const [modal, setModal] = useState(false);

	useEffect(() => {
		if (limitOfCombo.IdLimite !== '') return;

		const idLimit = `L-${parseInt(Math.random() * 1000000000)}`;

		setLimitOfCombo({
			...limitOfCombo,
			IdLimite: idLimit,
		});

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [limitOfCombo]);

	useEffect(() => {
		setLimitOfCombo({
			...limitOfCombo,
			estructuraVenta:
				selectedOptionSS.value !== undefined ? selectedOptionSS.value : '',
			nivelCombo:
				selectedOptionCN.value !== undefined ? selectedOptionCN.value : '',
		});
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [selectedOptionSS, selectedOptionCN]);

	const toggle = () => setModal(!modal);

	const handleChange = e => {
		setLimitOfCombo({
			...limitOfCombo,
			[e.target.name]: e.target.value,
		});
	};

	const handleChangeSelectSaleStructure = option => {
		setSelectedOptionSS(option);
	};

	const handleChangeSelectComboNivel = option => {
		setSelectedOptionCN(option);
	};

	const saveLimitOfCombo = e => {
		// e.preventDefault();
		if (
			limitOfCombo.nivelCombo.trim() === '' ||
			limitOfCombo.estructuraVenta === '' ||
			parseInt(limitOfCombo.combosPermitidos) === 0 ||
			parseInt(limitOfCombo.combosPermitidos) <= 0
		) {
			setError(true);
		} else {
			setError(false);
			addLimitOfCombo({
				...limitOfCombo,
				CombosDisponibles: limitOfCombo.combosPermitidos,
			});
			setSaved(true);

			setTimeout(() => {
				setLimitOfCombo(initialLimitOfCombo);
				setSaved(false);
				setSelectedOptionSS('');
				setSelectedOptionCN('');
				document.getElementById('combosPermitidos').value = '0';
				document.getElementById('radio').checked = false;
			}, 1200);
		}
	};

	const saveAndNewLimitOfCombo = e => {
		if (
			limitOfCombo.nivelCombo.trim() === '' ||
			limitOfCombo.estructuraVenta === '' ||
			parseInt(limitOfCombo.combosPermitidos) === 0 ||
			parseInt(limitOfCombo.combosPermitidos) < 0
		) {
			setError(true);
		} else {
			setError(false);
			addLimitOfCombo({
				...limitOfCombo,
				CombosDisponibles: limitOfCombo.combosPermitidos,
			});
			setSaved(true);
			setTimeout(() => {
				setLimitOfCombo(initialLimitOfCombo);
				setSelectedOptionSS('');
				setSelectedOptionCN('');
				document.getElementById('combosPermitidos').value = '';
				document.getElementById('radio').checked = false;
				setSaved(false);
			}, 1200);
		}
	};

	const saveLimitOfComboAndCreateCombo = () => {
		// e.preventDefault();
		if (
			limitOfCombo.nivelCombo.trim() === '' ||
			limitOfCombo.estructuraVenta === '' ||
			parseInt(limitOfCombo.combosPermitidos) === 0 ||
			parseInt(limitOfCombo.combosPermitidos) <= 0
		) {
			setError(true);
		} else {
			setError(false);
			addLimitOfCombo({
				...limitOfCombo,
				CombosDisponibles: limitOfCombo.combosPermitidos,
			});
			setSaved(true);

			setTimeout(() => {
				setLimitOfCombo(initialLimitOfCombo);
				setSaved(false);
				setSelectedOptionSS('');
				setSelectedOptionCN('');
				document.getElementById('combosPermitidos').value = '0';
				document.getElementById('radio').checked = false;
				toggle();
				createCurrentlimitOfCombo(limitOfCombo);
			}, 1200);
		}
	};
	return {
		limitOfCombo,
		error,
		saved,
		selectedOptionSS,
		selectedOptionCN,
		setLimitOfCombo,
		modal,
		setModal,
		toggle,
		handleChange,
		handleChangeSelectComboNivel,
		handleChangeSelectSaleStructure,
		saveLimitOfCombo,
		saveAndNewLimitOfCombo,
		saveLimitOfComboAndCreateCombo,
	};
};

export default useCreateLimitOfCombo;
