import React from 'react'
import './Nav.css'
import gridImage from '../../assets/images/nav/Grid.png'

import { Col, Row } from 'reactstrap'
import DropDownMenu from './DropDownMenu/DropDownMenu'


const Nav = () => {
    return (
        <Row className='mt-1'>
            <Col xs='10' sm='10' className='d-flex mx-auto'>
                <div className='media mr-4'>
                    <img src={gridImage} alt="Grid icon" />
                </div>
                <div>
                    <DropDownMenu />
                </div>
            </Col>
            <Col xs='2' sm='2' className='align-left'>
                {/* <Search /> */}
            </Col>
        </Row>
    )
}

export default Nav
