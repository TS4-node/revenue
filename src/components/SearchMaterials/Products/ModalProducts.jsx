import React from 'react';
import { Button, Modal, ModalBody, ModalFooter } from 'reactstrap';

import OKimage from '../../../assets/images/ok.png';

const ModalProducts = ({ toggle, modal, handleButtonActiveQuota }) => {

    const handleClick = () => {
        toggle();
        setTimeout(() => {
            handleButtonActiveQuota();
        }, 700);
    }

	return (
		<Modal isOpen={modal} toggle={toggle} centered size='sm'>
			<ModalBody>
				<div className='text-center'>
					<img src={OKimage} alt='ok logo' style={{ width: '40px', height: '40px' }} className='mb-3' />
					<div className='ml-4 text-center header-modal'>
						Tu combo producto ha sido guardado con éxito
					</div>
				</div>
			</ModalBody>
			<ModalFooter className='mx-auto'>
				<Button className='button-success' onClick={handleClick}>
					Continuar
				</Button>
			</ModalFooter>
		</Modal>
	);
};

export default ModalProducts;
