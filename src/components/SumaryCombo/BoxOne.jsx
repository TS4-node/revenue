import React from 'react'
import { Table } from 'reactstrap';
import { v4 as uuidv4 } from 'uuid';



import './SumaryCombo.css'

const BoxOne = () => {

    const datosUno = ['Propietario:', 'Estructura de Ventas:', 'Periodo de Combo:', `Máx. combo por estructura de ventas:`, '', 'Aplicaciones', 'Moneda:']
    const datosDos = ['PPM Corporativo', 'Grupo Modelo', `23/01/2021 al 23/02/2021`, 10, 10, 'B2B, BDR', 'MXN']
    const datosTres = ['Regiones incluidas', 'Organizaciones Incluidas', `Oficinas incluidas`, 'Clientes Incluidos', 'Regiones Excluidas', 'Organizaciones Excluidas', 'Oficinas Excluidas'] 
    const datosCuatro = [4, 'Grupo Modelo', 20, 381, 21, 78, 21] 



    const style = {
        backgroundColor: "#E6F7FF",
        color: "#1890FF",
        fontSize: '15px',
    }

    return (
        <Table responsive className='mt-4 text-center'>
      <tbody>
        <tr style={style}>
          {
              datosUno.map(el => <td key={uuidv4}><strong>{el}</strong></td>)
          }
        </tr>
        <tr style={{fontSize: '15px'}}>
          {
              datosDos.map(el => <td key={uuidv4}><strong>{el}</strong></td>)
          }
        </tr>
        <tr style={style}>
          {
              datosTres.map(el => <td key={uuidv4}><strong>{el}</strong></td>)
          }
        </tr>
        <tr>
          {
            datosCuatro.map(el => <td key={uuidv4}><strong>{el}</strong></td>)
          }
        </tr>
      </tbody>
    </Table>
    )
}

export default BoxOne
