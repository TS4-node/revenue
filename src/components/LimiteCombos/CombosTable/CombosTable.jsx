import React from 'react'
import DataTable from 'react-data-table-component'

const data = [
    { id: 1, Idlimite: 'L-0000000657', NivelCombo: 'Nacional', EstructuraVentas: 'Grupo Modelo', CombosPermitidos: 100, CombosDisponibles: 100 },
    { id: 2, Idlimite: 'L-0000000396', NivelCombo: 'Oficina de Ventas', EstructuraVentas: 'CMM Tequila', CombosPermitidos: 10, CombosDisponibles: 10 },
    { id: 3, Idlimite: 'L-0000005435', NivelCombo: 'Oficina de Ventas', EstructuraVentas: 'CMM Union de Tula', CombosPermitidos: 5, CombosDisponibles: 5 },
    { id: 4, Idlimite: 'L-0000007634', NivelCombo: 'Dirección Regional de Ventas', EstructuraVentas: 'Central- Bajio', CombosPermitidos: 10, CombosDisponibles: 10 },
    { id: 5, Idlimite: 'L-0000005646', NivelCombo: 'Organizacion de Ventas', EstructuraVentas: 'CMM Molango', CombosPermitidos: 1, CombosDisponibles: 1 },
    { id: 6, Idlimite: 'L-0000009863', NivelCombo: 'Organizacion de Ventas', EstructuraVentas: 'Norte', CombosPermitidos: 1, CombosDisponibles: 1 },
    { id: 7, Idlimite: 'L-0000009863', NivelCombo: 'Oficina de Ventas', EstructuraVentas: 'CMM Hidalgo', CombosPermitidos: 10, CombosDisponibles: 10 },
    { id: 8, Idlimite: 'L-0000005342', NivelCombo: 'Dirección Regional de Ventas', EstructuraVentas: 'CMM Norte', CombosPermitidos: 1, CombosDisponibles: 1 },
    { id: 9, Idlimite: 'L-0000005678', NivelCombo: 'Dirección Regional de Ventas', EstructuraVentas: 'CMM Cd. Hidalgo', CombosPermitidos: 1, CombosDisponibles: 1 },
    { id: 10, Idlimite: 'L-0000005678', NivelCombo: 'Dirección Regional de Ventas', EstructuraVentas: 'Occidente - Pacifico', CombosPermitidos: 1, CombosDisponibles: 1 },
    { id: 11, Idlimite: 'L-0000005342', NivelCombo: 'Dirección Regional de Ventas', EstructuraVentas: 'CMM Zacatecas', CombosPermitidos: 1, CombosDisponibles: 1 },
    { id: 12, Idlimite: 'L-0000005678', NivelCombo: 'Dirección Regional de Ventas', EstructuraVentas: 'CMM Zacatecas', CombosPermitidos: 5, CombosDisponibles: 5 },
    { id: 13, Idlimite: 'L-0000005678', NivelCombo: 'Dirección Regional de Ventas', EstructuraVentas: 'CMM  Metropolitana', CombosPermitidos: 10, CombosDisponibles: 10 },
    { id: 14, Idlimite: 'L-0000005678', NivelCombo: 'Dirección Regional de Ventas', EstructuraVentas: 'CMM Acapulco', CombosPermitidos: 100, CombosDisponibles: 100 },
    { id: 15, Idlimite: 'L-0000005342', NivelCombo: 'Dirección Regional de Ventas', EstructuraVentas: 'CMM Occidente', CombosPermitidos: 100, CombosDisponibles: 100 },
    { id: 16, Idlimite: 'L-0000005678', NivelCombo: 'Dirección Regional de Ventas', EstructuraVentas: 'CMM Edo de México', CombosPermitidos: 100, CombosDisponibles: 100 },
    { id: 17, Idlimite: 'L-0000005678', NivelCombo: 'Dirección Regional de Ventas', EstructuraVentas: 'CMM Nayarit', CombosPermitidos: 100, CombosDisponibles: 100 },
    { id: 18, Idlimite: 'L-0000005678', NivelCombo: 'Dirección Regional de Ventas', EstructuraVentas: 'CMM Edo de México', CombosPermitidos: 100, CombosDisponibles: 100 },
    { id: 19, Idlimite: 'L-0000005678', NivelCombo: 'Dirección Regional de Ventas', EstructuraVentas: 'CMM Nayarit', CombosPermitidos: 100, CombosDisponibles: 100 }
]

const columns = [
    { name: '', selector: 'id', sortable: true, width: '5rem' },
    { name: 'ID Límite', selector: 'Idlimite', sortable: true },
    { name: 'Nivel del Combo', selector: 'NivelCombo', sortable: true },
    { name: 'Estructura de Ventas', selector: 'EstructuraVentas', sortable: true },
    { name: 'Combos Permitidos', selector: 'CombosPermitidos', sortable: true },
    { name: 'Combos Disponibles', selector: 'CombosDisponibles', sortable: true }
]

const customStyles = {
    table:{
        style: {
            border: '1px solid rgba(0, 0, 0, 0.15)',
            height: '35rem'
        }
    },
    headCells: {
        style: {
            backgroundColor: '#E6F7FF',
            color: '#1890FF',
            fontWeight: 'bold',
            textAlign: 'center',
            height: '3.2rem'
        }
    }
}

const CombosTable = () => {

    const totalRecords = data.length;

    return (
        <div className='my-4 py-2 '>
            <DataTable
                columns={columns}
                data={data}
                customStyles={customStyles}
                dense={true}
                striped={true}
                fixedHeader={true}
                responsive={true}
            />
            <p className='total'>{totalRecords} Elementos.</p>
        </div>
    )
}

export default CombosTable
