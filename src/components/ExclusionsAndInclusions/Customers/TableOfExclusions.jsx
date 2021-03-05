import React from 'react';
import { Row, Col } from 'reactstrap';
import { Radio } from '@material-ui/core';
import DataTable from 'react-data-table-component';

const columns = [
	{ name: 'Número SAP', selector: 'id', sortable: true },
	{ name: 'Nombre', selector: 'nombre', sortable: true },
	{ name: 'Oficina de Ventas', selector: 'oficinaVentas', sortable: true },
	{ name: 'Agrupador de precios', selector: 'agrupadorPrecios', sortable: true }
];

const optionsPagination = {
	rowsPerPageText: 'Registros por página',
	rangeSeparatorText: 'de',
	selectAllRowsItem: true,
	selectAllRowsItemText: '*'
};

const customStyles = {
	table: {
		style: {
			border: '1px solid rgba(0, 0, 0, 0.15)',
			borderTop: 'none',
			height: '18rem',
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
};

const TableOfExclusions = ({ foundItem, handleRowSelect, clear }) => {
	return (
		<>
			<Row>
				<Col sm='12'>
					<DataTable
						columns={columns}
						data={foundItem}
						customStyles={customStyles}
						noDataComponent={<span>No se encontró ningún elemento</span>}
						paginationComponentOptions={optionsPagination}
						selectableRows
						onSelectedRowsChange={handleRowSelect}
						selectableRowsComponent={Radio}
						clearSelectedRows={clear}
						dense
						striped
						fixedHeader
						responsive
						highlightOnHover
						pagination
					/>
				</Col>
			</Row>
            <Row>
                <Col>
                    
                </Col>
            </Row>
		</>
	);
};

export default TableOfExclusions;
