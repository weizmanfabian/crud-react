import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'

import axios from 'axios'
import Grafico from '../../components/graficos/GraficosDiaMes2Tabla'


// let parameters = [
//   { campana: 'IN T&T', title: 'Ventas T&T Inbound' },
//   { campana: 'OUT T&T', title: 'Ventas T&T OUT' },
//   { campana: 'WCB T&T', title: 'Ventas T&T WCB' },
//   { campana: 'OJT T&T', title: 'Ventas T&T OJT' },
//   { campana: 'SIN IVA IN', title: 'Ventas T&T SIN IVA IN' },
//   { campana: 'SIN IVA WCB', title: 'Ventas T&T SIN IVA WCB' }
// ]

// const colorsArray = ["#17A606", "#A60606", "#a2a2a2", "#FFE20C"];


export default ({
  user,
  config,
  intervalTime,
  parameters,
  nameTable,
  colorsArray,
  city,
  elementsTyt
}) => {

  let history = useHistory() //The useHistory hook gives you access to the history instance that you may use to navigate.

  const [dataGeneralMes, setDataGeneralMes] = useState([]);
  const [dataGeneralDia, setDataGeneralDia] = useState([]);



  useEffect(() => {
    // if (dataGeneralMes.length == 0 && dataGeneralMes.length == 0) { loadData() }
    loadData()
    setInterval(loadData, intervalTime);
  }, [history, city])

  //1= mes, 0= dia
  const loadData = async () => {
    getData(1, setDataGeneralMes, city)
    getData(0, setDataGeneralDia, city)
  }

  //set equivale si es a a llenar datageneral mes o data general dia.
  const getData = async (type, set, city) => {
    let output = []
    let dig = await getDataByStatus(type, "tf_f_poliedro", "Digitada", city)
    let dAs = await getDataByStatus(type, "tf_f_poliedro", "Devuelta al Asesor", city)
    let pBk = await getDataByStatus(type, "tf_fecha_r", "Pendiente BackOffice", city)
    let cof = await getDataByStatus(type, "tf_fecha_r", "Confirmado", city)

    output = [].concat(dig, dAs, pBk, cof)
    set(output)
  }

  // type si es == 1 es Mes de lo contrario 0 significa Dia
  const getDataByStatus = async (type, nameFinanciado, status, city) => {

    let sqlMes = "select T1.tabla, T1.name, T1.campana, count(*) as value from ( select tyt_finan.tf_estado AS name, tyt_finan.tf_campana AS campana, 'Financiado' as tabla from tyt_finan where tyt_finan.tf_estado = '" + status + "' AND MONTH(" + nameFinanciado + ") = MONTH(CURRENT_DATE()) AND tf_city = '" + city + "' UNION ALL select tyt_cont.tc_estado AS name, tyt_cont.tc_campana AS campana, 'Contado' as tabla from tyt_cont where tyt_cont.tc_estado = '" + status + "' AND MONTH(tyt_cont.tc_fecha) = MONTH(CURRENT_DATE()) AND tc_city_v  = '" + city + "' ) T1 group by T1.tabla, T1.name, T1.campana"

    let sqlDia = "select T1.tabla, T1.name, T1.campana, count(*) as value from ( select tyt_finan.tf_estado AS name, tyt_finan.tf_campana AS campana, 'Financiado' as tabla from tyt_finan where tyt_finan.tf_estado =  '" + status + "' AND " + nameFinanciado + " = CURDATE() AND tf_city = '" + city + "' UNION ALL select tyt_cont.tc_estado AS name, tyt_cont.tc_campana AS campana, 'Contado' as tabla from tyt_cont where tyt_cont.tc_estado = '" + status + "' AND tyt_cont.tc_fecha = CURDATE() AND tc_city_v  = '" + city + "' ) T1 group by T1.tabla, T1.name, T1.campana"

    var res = await axios.get(`${config.urlServer}/server/getData/${type == 1 ? sqlMes : sqlDia}`)
    return res.data.rows
  }

  return (
    <div className='container'>
      {parameters.map(
        (item, index) => (
          <Grafico
            key={index}
            dataGeneralMes={dataGeneralMes}
            dataGeneralDia={dataGeneralDia}
            campana={item.campana}
            title={item.title}
            colors={colorsArray}
            status={elementsTyt.estado}
            nameTable={nameTable}
          />
        )
      )}
    </div>
  );
}