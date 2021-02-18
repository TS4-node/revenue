import React, { useState } from "react";
import {
  Dropdown,
  DropdownItem,
  DropdownToggle,
  DropdownMenu,
} from "reactstrap";

const Combos = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen(!dropdownOpen);

  return (
    <div>
      <Dropdown nav isOpen={dropdownOpen} toggle={toggle}>
        <DropdownToggle nav caret className="text pl-1">
          Combos
        </DropdownToggle>
        <DropdownMenu className="submenu">
          <DropdownItem className="option">Crear Combo</DropdownItem>
          <DropdownItem className="option">Detalle</DropdownItem>
          <DropdownItem className="option">Relacionado</DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </div>
  );
};

export default Combos;
