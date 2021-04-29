/*	COMBOS HEROKU
 *  March 2021
 *
 *  Author: Alejandro Montes de Oca TS4
 *  Description: it is option of "Informes" for the navigation in the application,
 * 	inside it has the configuration to url that will be sent
 *  =========================================================================
 *  Information about changes:
 *
 *  No.         Date.        Author.      		Description.
 *
 *
 */
import React, { useState } from 'react'

import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap'

const Informes = () => {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggle = () => setDropdownOpen(!dropdownOpen);

    return (
        <div>
        <Dropdown nav isOpen={dropdownOpen} toggle={toggle}>
            <DropdownToggle nav caret className='text '>
                Informes
            </DropdownToggle>
                <DropdownMenu className='submenu'>
                <DropdownItem className='option'>Action 1</DropdownItem>
                <DropdownItem className='option'>Action 2</DropdownItem>
                <DropdownItem className='option'>Action 3</DropdownItem>
            </DropdownMenu>
        </Dropdown>
        </div>
    )
}

export default Informes
