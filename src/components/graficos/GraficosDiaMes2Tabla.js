import React, { useState, useEffect } from 'react';
import { Link, useHistory, useParams, Fragment } from 'react-router-dom'
import moment from 'moment'
import axios from 'axios'
import Swal from 'sweetalert2'

import Grafico from './Torta'

// consulta de campaña estado y fecha de una sola tabla
/* 
  name                  |   campana     |     ventas 
  Devuelta al Asesor    |  IN HOGAR     |        1
  Pendiente BackOffice  |  IN HOGAR     |        4
*/

//const colorsArray = ["#17A606", "#A60606", "#a2a2a2", "#FFE20C"];

const GraficosTyt = ({
  dataGeneralMes, //consulta mes 
  dataGeneralDia, //consulta día
  campana,
  title,
  colors,
  status,
  nameTable
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
  const setData = async (inputData, set) => {
    // si el filtro con el estado (name) Digitada  y la campaña (parametro) es mayor a 0
    //// ? si el filtro con el estado (name) Digitada  y la campaña (parametro) == 1
    ////// ? si el filtro con el estado (name) Digitada  y la campaña (parametro) [0].value -> devuelvame el valor que tiene value en la posición 0
    ////// : el filtro con el estado (name) Digitada  y la campaña (parametro). reduce() -> sumeme contado y financiado
    //// : si no devuelvame 0

    let output = []
    status.map(
      (currentStatus) => {
        let result = inputData.filter((item) => item.name === currentStatus && item.campana == campana).length > 0
          ? inputData.filter((item) => item.name === currentStatus && item.campana == campana).length == 1
            ? inputData.filter((item) => item.name === currentStatus && item.campana == campana)[0].value
            : inputData.filter((item) => item.name === currentStatus && item.campana == campana).reduce((a, b) => a.value + b.value)
          : 0;
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

export default GraficosTyt
