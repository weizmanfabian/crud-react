import React, { Fragment, useState } from "react";

const FiltroBusqueda = ({ setRecord, setTable, submit, setForm }) => {
  const [tipoDoc, setTipoDoc] = useState("");
  const [numDoc, setNumDoc] = useState("");

  const buscar = async (e) => {
    let nameId = (await tipoDoc) === "CEDULA" ? "gen_ide" : "gen_pas";
    submit(e, nameId, numDoc, false);
  };

  return (
    <Fragment>
      <div className="col-md-3 px-1">
        <select
          className="form-select"
          value={tipoDoc}
          onChange={(e) => {
            setTipoDoc(e.target.value);
            setTable(false);
            setForm(false);
            setNumDoc("");
          }}
        >
          <option selected value="">
            SELECCIONE
          </option>
          <option value="CEDULA">CEDULA</option>
          <option value="PASAPORTE">PASAPORTE</option>
        </select>
      </div>
      {tipoDoc && (
        <Fragment>
          <div className="col-md-3 px-1">
            <input
              type="number"
              className="form-control"
              placeholder={
                tipoDoc === "CEDULA"
                  ? "NUMERO DE CEDULA"
                  : "NUMERO DE PASAPORTE"
              }
              value={numDoc}
              onChange={(e) => setNumDoc(e.target.value)}
              onBlur={buscar}
            ></input>
          </div>
          <div className="col-md-1 px-1">
            <button
              type="submit"
              className="btn btn-outline-primary form-control"
              onClick={buscar}
            >
              <i className="fa fa-search" aria-hidden="true" />
            </button>
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

// C:\Users\juana\OneDrive\Escritorio\Desarrollo Asiste\newnet\client\src\resources\excel\contratacion.xls

export default FiltroBusqueda;
