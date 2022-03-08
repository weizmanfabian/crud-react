import React, { useState, useEffect } from 'react';

import Grafico from './Torta'

// consulta de campaña estado y fecha de una sola tabla
/* 
  name                  |   campana     |     ventas 
  Devuelta al Asesor    |  IN HOGAR     |        1
  Pendiente BackOffice  |  IN HOGAR     |        4
*/

const GraficoHogar = ({
  dataGeneralMes,
  dataGeneralDia,
  campana,
  title,
  colors,
  status,
  nameTable,
}) => {
  const [dataMes, setDataMes] = useState([]);
  const [dataDia, setDataDia] = useState([]);

  useEffect(() => {
    set()
  }, [dataGeneralDia])

  const set = () => {
    setData(dataGeneralMes, setDataMes)
    setData(dataGeneralDia, setDataDia)
  }

  // 1 Mes
  // 2 Dia

  const setData = (inputData, set) => {
    let output = []
    status.map(
      (currentStatus, index) => {
        // si: filtrado el estado con la campaña y el estado es = 0 
        // entonces 0
        // de lo contrario traigame el total de ventas en la posición 0
        let result = inputData.filter((item) => item.name === currentStatus && item.campana == campana).length == 0
          ? 0
          : inputData.filter((item) => item.name === currentStatus && item.campana == campana)[0].value
        output = [].concat(output, { name: currentStatus, value: result });
      }
    )
    set(output)
  }

  return (

    <div className="row">
      <div className='col-md-6'>

        <div className="card  text-center">
          <div className="card-header">
            {title} Día
          </div>
          <div className="card-body">
            <Grafico
              data={dataDia}
              colors={colors}
              nameTable={nameTable}
            />
          </div>
        </div>
      </div>
      <div className='col-md-6'>

        <div className="card  text-center">
          <div className="card-header">
            {title} Mes
          </div>
          <div className="card-body">
            <Grafico
              data={dataMes}
              colors={colors}
              nameTable={nameTable}
            />
          </div>
        </div>
      </div>
    </div>


  )
}


export default GraficoHogar
