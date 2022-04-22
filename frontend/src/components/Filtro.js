import React, { useState, useEffect, Fragment } from 'react';
import { Link, useHistory, useParams } from 'react-router-dom'
import moment from 'moment'
import axios from 'axios'
import ReactHTMLTableToExcel from 'react-html-table-to-excel'
// import { CSVLink, CSVDownload } from "react-csv";
import Swal from 'sweetalert2'
import { ScaleLoader } from 'react-spinners'
import Ciudades from '../../components/forms/Ciudades'



// https://es.stackoverflow.com/questions/427991/modificar-hook-de-componente-padre-desde-componente-hijo

const Filtro = ({
  config,
  tabla,
  user,
  rol,
  setRol,
  record,
  setRecord,
  setTitleForm,
  setTipeForm,
  title,
  nameCity,
  nameFecha,
  name_usu_id,
  nameEstado,
  id_tyt,
  urlCreate,
  excel,
  nameCampana,
  campanas,
  estado,
  ButtonExcel,
}) => {
  let history = useHistory()

  const current = new Date()
  const date = `${current.getFullYear() < 10 ? '0' + current.getFullYear() : current.getFullYear()}-${current.getMonth() + 1 < 10 ? '0' + (current.getMonth() + 1) : current.getMonth() + 1}-${current.getDate() < 10 ? '0' + current.getDate() : current.getDate()}`
  const hour = `${current.getHours() < 10 ? '0' + current.getHours() : current.getHours()}:${current.getMinutes() < 10 ? '0' + current.getMinutes() : current.getMinutes()}:${current.getSeconds() < 10 ? '0' + current.getSeconds() : current.getSeconds()}`

  const [fechaIni, setfechaIni] = useState(date)
  const [fechaFin, setfechaFin] = useState(date)

  const [city, setCity] = useState(user.usu_city)
  const [state, setState] = useState('')
  const [tf_id, setTf_id] = useState('')
  const [campana, setCampana] = useState('')

  const [loading, setLoading] = useState(false);

  const [dataTemp, setDataTemp] = useState([]);

  const override = `
    display: flex;
    align-items: center;
    justify-content:center;
    border-color: red;
  `;

  const submitBuscarFecha = async () => {
    setRecord([])
    setTipeForm(0)
    setLoading(true)
    // let newCity = city.indexOf('Bog') > -1 ? "Bog" : city.indexOf('Bar') > -1 ? "Bar" : 0

    let { data } = await config.searchByDate(
      tabla,
      nameFecha,
      fechaIni,
      fechaFin,
      city === 'Todas' ? 0 : 1,
      nameCity,
      '=',
      city,
      rol.indexOf('Agente') > -1 ? 1 : 0,
      name_usu_id,
      '=',
      user.usu_id,
      state ? 1 : 0,
      nameEstado,
      '=',
      state ? state : 0,
      campana ? 1 : 0,
      nameCampana,
      '=',
      campana ? campana : 0
    )

    let { rows, msg } = data

    setRecord(rows)
    setTitleForm('')
    setTipeForm(0)
    setLoading(false)
    Swal.fire(msg)
  }



  const buscarPorId = async (e) => {
    let { value } = e.target
    if (value) {
      config.searchBy(
        tabla,
        id_tyt,
        value,
        setRecord,
        true,
        () => { setTipeForm(0) }
      )
    }
  }

  return (
    <form className="row" >
      <div className="col-md-3">
        <div className="row">
          <div>
            <div className="col-2">
              {rol.indexOf('Agente') > -1
                ? <Link to={urlCreate} className="fas fa-plus-square" style={{ width: '100%', cursor: 'pointer', fontSize: '3em', paddingLeft: '10px', color: '#7ab800' }} />
                : rol.indexOf('Back') > -1
                  ? null
                  : null}
            </div>
            <div className="col-10"></div>
          </div>
          <div className='col-4'>
            <label className='form-label'>Ciudad</label>
          </div>
          <div className='col-8'>
            <Ciudades
              config={config}
              user={user}
              city={city}
              setCity={setCity}
              isRol={true}
              setRol={setRol} />
          </div>
          {rol.indexOf('Back') > -1 || rol.indexOf('Coordinador') > -1
            ?
            (
              <Fragment>
                <div className="col-4">
                  <label htmlFor="state" className="form-label ">
                    Estado:
                  </label>
                </div>
                <div className="col-8">
                  <select
                    className="form-select form-control "
                    required
                    value={state}
                    onChange={(e) => setState(e.target.value)}
                  >
                    <option selected value="">Todos</option>
                    {estado.map((item, index) => <option key={index} value={item}>{item}</option>)}
                  </select>
                </div>
                <div className="col-4">
                  <label htmlFor="state" className="form-label ">
                    Campaña:
                  </label>
                </div>
                <div className="col-8">
                  <select
                    className="form-select form-control "
                    required
                    value={campana}
                    onChange={(e) => setCampana(e.target.value)}
                  >
                    <option selected value="">Todas</option>
                    {campanas.map(
                      (item, index) => (
                        <option key={index} value={item}>{item}</option>

                      )
                    )}

                  </select>
                </div>
              </Fragment>
            )
            : null
          }

          <div className="col-4">
            <label htmlFor="fechaIni" className="form-label ">
              Fecha Inicial
            </label>
          </div>
          <div className="col-8">
            <input
              type="date"
              className="form-control"
              name="fechaIni"
              id="fechaIni"
              value={fechaIni}
              onChange={(e) => setfechaIni(e.target.value)}
              required
            />
          </div>

          <div className="col-4">
            <label htmlFor="fechaFin" className="form-label ">
              Fecha Final
            </label>
          </div>
          <div className="col-8">
            <input
              type="date"
              className="form-control "
              name="fechaFin"
              id="fechaFin"
              value={fechaFin}
              onChange={(e) => setfechaFin(e.target.value)}
              required
            />
          </div>
          <div className="col-4">

          </div>
          <div className="col-8">

            <div className="row">
              <div className="col-6">
                {(rol.indexOf('Back') > -1 || rol.indexOf('Coordinador') > -1) && record.length !== 0
                  ? !ButtonExcel
                    ? <ReactHTMLTableToExcel
                      id="btnExportarExcel"
                      className="btn btn-outline-success form-control"
                      table="data"
                      filename={
                        fechaIni + ' - ' + fechaFin + ' - ' + excel
                      }
                      sheet={
                        fechaIni + ' - ' + fechaFin + ' - ' + excel
                      }
                      buttonText="Excel"
                    />
                    : <ButtonExcel
                      filename={fechaIni + ' - ' + fechaFin + ' - ' + excel}
                    />
                  : null
                }
              </div>
              <div className="col-6">
                <button
                  type="button"
                  onClick={submitBuscarFecha}
                  className="form-control btn btn-outline-primary"
                  disabled={!fechaIni || !fechaFin}
                >
                  <i className="fa fa-search" aria-hidden="true" />
                </button>
              </div>
            </div>

          </div>
          {loading &&
            <Fragment>
              <div className='col-4'></div>
              <div className='col-8'>
                <ScaleLoader
                  css={override}
                  size={150}
                  color={"#eb4034"}
                  loading={loading}
                />
              </div>
            </Fragment>
          }

        </div >
      </div >
      <div className="col-md-6 text-center">
        <h2>{title}</h2>
      </div>
      {rol.indexOf('Back') > -1 || rol.indexOf('Coordinador') > -1
        ?
        (
          <div className="col-md-3">
            <div className="col-md-4">
              <label htmlFor="tf_id" className="form-label ">
                Búsqueda por Id:
              </label>
            </div>
            <div className="col-md-8">
              <input className="form-control"
                type="number"
                name="tf_id"
                id="tf_id"
                required
                value={tf_id}
                onBlur={buscarPorId}
                onChange={(e) => setTf_id(e.target.value)}
              />
              <button
                type="button"
                onClick={buscarPorId}
                className="form-control btn btn-outline-primary"
                disabled={!tf_id}
              >
                <i className="fa fa-search" aria-hidden="true" />
              </button>
            </div>
          </div >
        )
        : null}
    </form >
  )
}

export default Filtro;