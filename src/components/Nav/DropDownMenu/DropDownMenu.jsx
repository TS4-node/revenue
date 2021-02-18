import React from 'react';
import { Nav } from 'reactstrap';

import {
  Clientes,
  LimiteCombos,
  Combos,
  AprobacionesMasivas,
  Productos,
  Informes,
  Paneles,
} from '.';

const DropDownMenu = () => {
  return (
    <div>
      <Nav>
        <Clientes />
        <LimiteCombos />
        <Combos />
        <AprobacionesMasivas />
        <Productos />
        <Informes />
        <Paneles />
      </Nav>
    </div>
  );
};

export default DropDownMenu;
