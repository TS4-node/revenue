import React, { useState } from 'react'
import { Button, Col, Container, Row } from 'reactstrap';
import { FormControlLabel, Checkbox } from '@material-ui/core'
import DataTable from 'react-data-table-component'
import { Spinner } from '../../index';
import TableFilter from './TableFilter'


import { filterGeneralDirectorateSales } from '../../../helpers/validationForms'
import  './GeneralDirectorateSales.css';

const columns = [
    { name: 'Número SAP', selector: 'numeroSAP', sortable: true },
    { name: 'Nombre', selector: 'nombre', sortable: true },
    { name: 'Dirección Regional de Ventas', selector: 'direccionGeneralVentas', sortable: true }
];


const optionsPagination = {
    rowsPerPageText: 'Registros por página',
    rangeSeparatorText: 'de',
    selectAllRowsItem: true,
    selectAllRowsItemText: '*',
}

const customStyles = {
    table:{
        style: {
            border: '1px solid rgba(0, 0, 0, 0.15)',
            height: '14rem',
            width: '45rem'
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


///this is the view #0 for the Exclusions and Inclusions
const GeneralDirectorateSales =  ({setView, generalDirectorateSales, loading }) => {

    const [searchItem, setSearchItem] = useState('');
    const [foundItem, setFoundItem] = useState(generalDirectorateSales);
    const [idSAP, setIdSAP] = useState(false);
    const [rowSelect, setRowSelect] = useState({});
    const [clear, setClear] = useState(false)

    const handleChangeCheckbox = () => setIdSAP(!idSAP);

    const handleChangeInputSearch = e => {
        e.persist();
        setSearchItem( e.target.value );
        filterGeneralDirectorateSales(searchItem, idSAP, setFoundItem, generalDirectorateSales);
    }

    const handleRowSelect = (state) => {
        setRowSelect(state.selectedRows);
    }

    const handleButtonCancel = () => {
        setClear(!clear);
        setRowSelect({});
    }

    const handleButtonContinue = () => {

    }

    return (
        <>
        <Container
            style={{ fontSize: '14px', width: '60rem', height: '28rem', paddingLeft:'8rem'}}
            className='pt-2 mt-1'
        >

            <Row>
                <Col sm='10' md='10'  className='text-center'>
                    <h3 className='encabezado text-center mt-3 '>
                        Direccion General de Ventas
                    </h3>
                </Col>
            </Row>

            { loading
                ?( <Spinner /> )
                :(
                    <>
                        <Row>
                            <TableFilter
                                name={'search'}
                                value={searchItem}
                                onChange={handleChangeInputSearch}
                            />
                            <FormControlLabel
                                value="idSAP"
                                control={<Checkbox color="primary" onChange={handleChangeCheckbox}/>}
                                label="Buscar por lista de ID de SAP de la oficina de ventas"
                                labelPlacement="end"
                            />
                            <DataTable
                                columns={columns}
                                data={foundItem}
                                customStyles={customStyles}
                                noDataComponent={<span>No se encontró ningún elemento</span>}
                                paginationComponentOptions={optionsPagination}
                                selectableRows
                                onSelectedRowsChange={handleRowSelect}
                                clearSelectedRows={clear}
                                dense
                                striped
                                fixedHeader
                                responsive
                                highlightOnHover
                                pagination
                            />
                        </Row>

                    </>
                )
            }

        </Container>

            {
                !loading && (
                    <Row className='mt-2 mx-auto'>
                        <Col smd='10' md='10' className='d-flex justify-content-around' style={{marginLeft:'5rem'}}>
                            <Button
                                className='boton-exclusion'
                                onClick={handleButtonCancel}
                            >
                                Cancelar
                            </Button>
                            <Button className='boton-exclusion'>
                                Continuar
                            </Button>
                        </Col>
                    </Row>
                )
            }
    </>
    )
}

export default GeneralDirectorateSales
