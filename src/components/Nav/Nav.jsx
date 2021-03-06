/*	COMBOS HEROKU
 *  March 2021
 *
 *  Author: Alejandro Montes de Oca TS4
 *  Description: in this component the options are grouped in drop-down menus for navigation
 *  =========================================================================
 *  Information about changes:
 *
 *  No.         Date.        Author.      		Description.
 *
 *
 */
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
