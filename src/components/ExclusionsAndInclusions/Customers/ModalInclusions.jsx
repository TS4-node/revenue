import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Row, Col } from 'reactstrap';
import { useDispatch, useSelector } from 'react-redux';

import OKimage from '../../../assets/images/ok.png';
import { clearInclusionsAction } from '../../../redux/actions/exclusionsAndInclusionsActions';


const ModalInclusions = ({ toggleInclusions, modal, setActiveTab, setValue, setRowSelectInclusions }) => {

    const dispatch = useDispatch();

    const clearAllInclusions = () => dispatch( clearInclusionsAction());

	const fileNames = useSelector(state => state.exclusionsAndInclusions.fileNamesInclusions);

	const [nestedModal, setNestedModal] = useState(false);
	const [closeAll, setCloseAll] = useState(false);

	const toggleNested = () => {
		setNestedModal(!nestedModal);
		setCloseAll(false);
	};

	const toggleAll = () => {
		setNestedModal(!nestedModal);
		setCloseAll(true);
        setValue(2);
	};

    const toggleClear = () => {
		setRowSelectInclusions([]);
        clearAllInclusions();
        toggleInclusions();
        setActiveTab('1');
    }

	return (
		<div>
			<Modal isOpen={modal} toggle={toggleInclusions} centered size='sm'>
				<ModalHeader toggle={toggleInclusions}>
						{fileNames.length !== 0
							?(
								<div className='ml-4 text-center header-modal'>
									¿Está seguro de <br /> añadir el archivo?
								</div>
							)
							:(
								<div className='ml-4 text-center header-modal'>
									¿Está seguro de incluir los registros seleccionados?
								</div>
							)
						}
				</ModalHeader>

                    {fileNames.length === 0
                        ? null
                        :(
                            <ModalBody className='mb-0'>
                                <ul className='list-unstyled text-center'>
                                    {fileNames.map(item => (
                                        <li key={item} className='file-names'>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </ModalBody>
                        )
                    }

				<Row className='px-4 mb-3'>
					<Col sm='6' md='6'>
						<Button className='button-ghost' block onClick={toggleClear}>
							No
						</Button>
					</Col>
					<Col sm='6' md='6'>
						<Button className='button-success primary' block onClick={toggleNested}>
							Si
						</Button>
					</Col>
				</Row>
			</Modal>

            {/* Nested Modal to confirmation */}
            <Modal
                isOpen={nestedModal}
                toggle={toggleNested}
                onClosed={closeAll ? toggleInclusions : undefined}
                centered
                size='sm'>
                <ModalBody>
                    <div className='text-center'>
                        <img src={OKimage} alt="ok logo" style={{width:'40px', height:'40px'}} className='mb-3'/>
                        <div className='ml-4 text-center header-modal'>
                            Los clientes han sido <br /> incluidos con éxito
                        </div>
                    </div>
                </ModalBody>
                <ModalFooter className='mx-auto'>
                    <Button className='button-success' onClick={toggleAll}>
                        Continuar
                    </Button>
                </ModalFooter>
            </Modal>
            {/* Nested Modal to confirmation */}
		</div>
	);
};

export default ModalInclusions;
