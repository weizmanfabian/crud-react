import axios from "axios";
import React, { Fragment, useEffect, useState } from "react";
import Swal from "sweetalert2";

const Estado = ({ registro, config, editDatos }) => {
  const [tabla] = useState("gen_inactivo");
  const [gen_ide, setGen_ide] = useState("");
  const [gen_fh_ret, setGen_fh_ret] = useState("");
  const [gen_fh_ult_con, setGen_fh_ult_con] = useState("");
  const [gen_tip_ret, setGen_tip_ret] = useState("");
  const [gen_mot_ret, setGen_mot_ret] = useState("");
  const [gen_ent_equ, setGen_ent_equ] = useState("");
  const [gen_diade, setGen_diade] = useState("");
  const [gen_loc, setGen_loc] = useState("");
  const [gen_car, setGen_car] = useState("");
  const [gen_fh_ent_cer_lab, setGen_fh_ent_cer_lab] = useState("");
  const [gen_obs_inac, setGen_obs_inac] = useState("");

  useEffect(() => {
    set(registro);
  }, [registro]);

  const set = (r) => {
    setGen_fh_ret(r.gen_fh_ret);
    setGen_fh_ult_con(r.gen_fh_ult_con);
    setGen_tip_ret(r.gen_tip_ret);
    setGen_mot_ret(r.gen_mot_ret);
    setGen_ent_equ(r.gen_ent_equ);
    setGen_diade(r.gen_diade);
    setGen_loc(r.gen_loc);
    setGen_car(r.gen_car);
    setGen_fh_ent_cer_lab(r.gen_fh_ent_cer_lab);
    setGen_obs_inac(r.gen_obs_inac);
  };

  const buscarInactivo = async (id) => {
    try {
      const tableConsult = "gen_inactivo";
      let nameId = "id";

      var res = await axios.get(
        `${config.urlServer}/server/searchBy/${tableConsult}/${nameId}/${id}`
      );
      if (res.data.rows.length == 0) {
        Swal.fire(res.data.msg);
      } else {
      }
    } catch (error) {
      console.log(error);
    }
  };

  // Insertar datos reclutamiento
  const submitInactivo = async (e) => {
    try {
      e.preventDefault();
      e.target.reset();

      let res = await axios.post(`${config.urlServer}/server/create/${tabla}`, {
        gen_ide:
          registro.gen_nac === "COLOMBIA" ? registro.gen_ide : registro.gen_pas,
        gen_fh_ret: gen_fh_ret,
        gen_fh_ult_con: gen_fh_ult_con,
        gen_tip_ret: gen_tip_ret,
        gen_mot_ret: gen_mot_ret,
        gen_ent_equ: gen_ent_equ,
        gen_diade: gen_diade,
        gen_loc: gen_loc,
        gen_car: gen_car,
        gen_obs_inac: gen_obs_inac,
        gen_fh_ent_cer_lab: gen_fh_ent_cer_lab,
      });
      if (res.data.err) {
        Swal.fire(res.data.err);
      } else {
        Swal.fire(res.data.msg);
        editDatos();
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Fragment>
      <hr />
      <h4>DATOS DE PERSONA INACTIVA</h4>
      <hr />
      <form>
        <div className="row">
          <div className="col-md-3">
            <label>FECHA DE RETIRO</label>
            <input
              type="date"
              className="form-control"
              value={gen_fh_ret}
              onChange={(e) => setGen_fh_ret(e.target.value)}
            ></input>
          </div>
          <div className="col-md-3">
            <label>FECHA DE ULTIMA CONEXION</label>
            <input
              type="date"
              className="form-control"
              value={gen_fh_ult_con}
              onChange={(e) => setGen_fh_ult_con(e.target.value)}
            ></input>
          </div>
          <div className="col-md-3">
            <label>TIPO DE RETIRO</label>
            <input
              type="text"
              style={{ "text-transform": "uppercase" }}
              className="form-control"
              value={gen_tip_ret}
              onChange={(e) => setGen_tip_ret(e.target.value.toUpperCase())}
            ></input>
          </div>
          <div className="col-md-3">
            <label>MOTIVO DEL RETIRO</label>
            <input
              type="text"
              style={{ "text-transform": "uppercase" }}
              className="form-control"
              value={gen_mot_ret}
              onChange={(e) => setGen_mot_ret(e.target.value.toUpperCase())}
            ></input>
          </div>
          <div className="col-md-4">
            <label>ENTREGA DE EQUIPO</label>
            <input
              type="text"
              style={{ "text-transform": "uppercase" }}
              className="form-control"
              value={gen_ent_equ}
              onChange={(e) => setGen_ent_equ(e.target.value.toUpperCase())}
            ></input>
          </div>
          <div className="col-md-4">
            <label>DIADEMA</label>
            <input
              type="text"
              style={{ "text-transform": "uppercase" }}
              className="form-control"
              value={gen_diade}
              onChange={(e) => setGen_diade(e.target.value.toUpperCase())}
            ></input>
          </div>
          <div className="col-md-4">
            <label>LOCKER</label>
            <input
              type="text"
              style={{ "text-transform": "uppercase" }}
              className="form-control"
              value={gen_loc}
              onChange={(e) => setGen_loc(e.target.value.toUpperCase())}
            ></input>
          </div>
          <div className="col-md-6">
            <label>CARNET</label>
            <input
              type="text"
              style={{ "text-transform": "uppercase" }}
              className="form-control"
              value={gen_car}
              onChange={(e) => setGen_car(e.target.value.toUpperCase())}
            ></input>
          </div>
          <div className="col-md-6">
            <label>FECHA DE ENTREGA DE CERTIFICACION LABORAL</label>
            <input
              type="date"
              className="form-control"
              value={gen_fh_ent_cer_lab}
              onChange={(e) => setGen_fh_ent_cer_lab(e.target.value)}
            ></input>
          </div>
          <div className="col-md-12">
            <label>OBSERVACIONES</label>
            <textarea
              type="text"
              style={{ "text-transform": "uppercase" }}
              className="form-control"
              value={gen_obs_inac}
              onChange={(e) => setGen_obs_inac(e.target.value.toUpperCase())}
            ></textarea>
          </div>
          <div className="col-md-12">
            <button
              type="submit"
              className="btn btn-outline-warning form-control mt-4"
              onClick={submitInactivo}
            >
              ACTUALIZAR DATOS
            </button>
          </div>
        </div>
      </form>
    </Fragment>
  );
};

export default Estado;
