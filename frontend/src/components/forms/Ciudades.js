import React, { useState, useEffect, Fragment } from 'react';
import axios from 'axios';

// Los parámetros que recibe son los siguientes
// -config que se envia desde App.js
// - user que se envia desde App.js
// - city variable ciudad del Hook
// - setCity variable ciudad que modifica el Hook
// - isRol enviar true si va a consultar también el Rol
// - setRol enviar variable rol que modifica el Hook si envia true en isRol de lo contrario no enviar nada
const Ciudades = ({
  config,
  user,
  city,
  setCity,
  isRol,
  setRol
}) => {

  const [citys, setCitys] = useState([]);

  useEffect(() => {
    loadCitys()
    isRol ? loadRol() : console.log('No se consulta rol')
  }, [])

  const loadCitys = async () => {
    var res = await axios.get(`${config.urlServer}/citys/${user.usu_rol_fk}`)
    const data = await res.data
    setCitys(await data)
  }

  const loadRol = async () => {
    let table = 'rol';
    let name = 'rol_id';
    var res = await axios.get(`${config.urlServer}/server/searchBy/${table}/${name}/${user.usu_rol_fk}`)
    let currentRol = await res.data.rows[0].rol_nom;
    setRol(currentRol)
  }

  return <Fragment>
    {/* //   <label htmlFor="city" className="form-label ">
  //     Ciudad:
  //   </label> */}
    <select
      className="form-select form-control "
      required
      value={city}
      onChange={(e) => setCity(e.target.value)}
    >
      {citys.map((item, i) => (
        <option key={i} value={item.city_nom}>{item.city_nom}</option>
      ))}
    </select>
  </Fragment >;
};

export default Ciudades;
