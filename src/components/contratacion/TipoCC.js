import React, { Fragment } from "react";

const TipoDoc = ({
  gen_pep,
  setGen_pep,
  gen_ide_ext,
  setGen_ide_ext,
  gen_pas,
  setGen_pas,
  isVenezuela,
  gen_ide,
  setGen_ide,
}) => {
  return isVenezuela ? (
    <Fragment>
      <div className="col-md-3">
        <label className="">IDENTIFICACION PEP</label>
        <input
          // max="15"
          type="number"
          className="form-control"
          value={gen_pep}
          onChange={(e) => setGen_pep(e.target.value)}
        ></input>
      </div>
      <div className="col-md-3">
        <label className="">IDENTI CEDULA EXTRANGERIA</label>
        <input
          // max="15"
          type="number"
          className="form-control"
          value={gen_ide_ext}
          onChange={(e) => setGen_ide_ext(e.target.value)}
        ></input>
      </div>
      <div className="col-md-3">
        <label className="">PASAPORTE</label>
        <input
          // max="15"
          type="number"
          className="form-control"
          value={gen_pas}
          onChange={(e) => setGen_pas(e.target.value)}
        ></input>
      </div>
    </Fragment>
  ) : (
    <Fragment>
      <div className="col-md-3">
        <label className="">IDENTIFICACION</label>
        <input
          // max="11"
          type="number"
          className="form-control"
          value={gen_ide}
          onChange={(e) => setGen_ide(e.target.value)}
          required
        ></input>
      </div>
    </Fragment>
  );
};
export default TipoDoc;
