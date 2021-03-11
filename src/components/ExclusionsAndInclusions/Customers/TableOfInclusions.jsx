/*	COMBOS HEROKU
 *  March 2021
 *
 *  Author: Alejandro Montes de Oca TS4
 *  Description: Table with info for selection of inclusions in customers
 *  =========================================================================
 *  Information about changes:
 *
 *  No.         Date.        Author.      		Description.
 *
 *
 */
import React from 'react';
import { Row, Col } from 'reactstrap';
import { Radio } from '@material-ui/core';
import DataTable from 'react-data-table-component';

import DropzoneInclusions from './DropzoneInclusions';
import { optionsPagination, columnsInclusions } from '../../../helpers/reactDataTable';
import { customStyles_ } from '../../../helpers/styles';

const TableOfInclusions = ({ foundItem, handleRowSelect, clear }) => {
	return (
		<>
			<Row>
				<Col sm='12'>
					<DataTable
						columns={columnsInclusions}
						data={foundItem}
						customStyles={customStyles_}
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
				<Col sm='12' md='12'>
					<DropzoneInclusions />
				</Col>
			</Row>
		</>
	);
};

export default TableOfInclusions;
