import React, { useState } from "react";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";

const Productos = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen(!dropdownOpen);

  return (
    <div>
      <Dropdown nav isOpen={dropdownOpen} toggle={toggle}>
        <DropdownToggle nav caret className="text pl-1">
          Productos
        </DropdownToggle>
        <DropdownMenu className="submenu">
          <DropdownItem className="option">Action 1</DropdownItem>
          <DropdownItem className="option">Action 2</DropdownItem>
          <DropdownItem className="option">Action 3</DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </div>
  );
};

export default Productos;
