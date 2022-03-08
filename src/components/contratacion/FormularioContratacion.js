import React, { useState, useEffect, Fragment } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import TipoDoc from "./TipoCC";
import elementsRRHH from "../../elements/rrhh/elementsRRHH";
import moment from "moment";
import Estado from "./Estado";

const FormularioContratacion = ({
  user,
  registro,
  setForm,
  setTable,
  config,
  buscar,
  setRecord,
}) => {
  const viewdate = new Date();
  const date = `${viewdate.getFullYear()}-${
    viewdate.getMonth() + 1 < 10
      ? "0" + (viewdate.getMonth() + 1)
      : viewdate.getMonth() + 1
  }-${viewdate.getDate()}`;
  const hour = `${viewdate.getHours()}:${
    viewdate.getMinutes() + 1
  }:${viewdate.getSeconds()}`;

  const [tabla] = useState("gen_date");
  const [gen_fh_hr, setGen_fh_hr] = useState("");
  const [gen_nac, setGen_nac] = useState("");
  const [gen_ide, setGen_ide] = useState("");
  const [gen_pep, setGen_pep] = useState("");
  const [gen_ide_ext, setGen_ide_ext] = useState("");
  const [gen_pas, setGen_pas] = useState("");
  const [gen_fh_exp, setGen_fh_exp] = useState("");
  const [gen_lu_ex_iden, setGen_lu_ex_iden] = useState("");
  const [gen_pri_ape, setGen_pri_ape] = useState("");
  const [gen_seg_ape, setGen_seg_ape] = useState("");
  const [gen_pri_nom, setGen_pri_nom] = useState("");
  const [gen_seg_nom, setGen_seg_nom] = useState("");
  const [gen_gen, setGen_gen] = useState("");
  const [gen_rh, setGen_rh] = useState("");
  const [gen_fh_nac, setGen_fh_nac] = useState("");
  const [gen_ciu_nac, setGen_ciu_nac] = useState("");
  const [gen_dir, setGen_dir] = useState("");
  const [gen_bar, setGen_bar] = useState("");
  const [gen_tel, setGen_tel] = useState("");
  const [gen_cel, setGen_cel] = useState("");
  const [gen_cor_elec, setGen_cor_elec] = useState("");
  const [gen_e_civil, setGen_e_civil] = useState("");
  const [gen_num_hi, setGen_num_hi] = useState("");
  const [gen_contac_emerg, setGen_contac_emerg] = useState("");
  const [gen_parent, setGen_parent] = useState("");
  const [gen_tel_parent, setGen_tel_parent] = useState("");
  const [gen_t_con, setGen_t_con] = useState("");
  const [gen_ciu_lab, setGen_ciu_lab] = useState("");
  const [gen_est_tras, setGen_est_tras] = useState("");
  const [gen_ole, setGen_ole] = useState("");
  const [gen_fh_ing, setGen_fh_ing] = useState("");
  const [gen_area, setGen_area] = useState("");
  const [gen_camp, setGen_camp] = useState("");
  const [gen_cen_cos, setGen_cen_cos] = useState("");
  const [gen_car_s_f, setGen_car_s_f] = useState("");
  const [gen_usu_ssff, setGen_usu_ssff] = useState("");
  const [gen_car_apli, setGen_car_apli] = useState("");
  const [gen_sala, setGen_sala] = useState("");
  const [gen_b_prest, setGen_b_prest] = useState("");
  const [gen_super, setGen_super] = useState("");
  const [gen_coor_camp, setGen_coor_camp] = useState("");
  const [gen_dot, setGen_dot] = useState("");
  const [gen_tipo_cue, setGen_tipo_cue] = useState("");
  const [gen_num_cue, setGen_num_cue] = useState("");
  const [gen_ban, setGen_ban] = useState("");
  const [gen_tipo_sena, setGen_tipo_sena] = useState("");
  const [gen_fh_fin_per_pru, setGen_fh_fin_per_pru] = useState("");
  const [gen_fh_fin_cont, setGen_fh_fin_cont] = useState("");
  const [gen_arl, setGen_arl] = useState("");
  const [gen_fh_afil_arl, setGen_fh_afil_arl] = useState("");
  const [gen_tar_arl, setGen_tar_arl] = useState("");
  const [gen_eps, setGen_eps] = useState("");
  const [gen_fh_afil_eps, setGen_fh_afil_eps] = useState("");
  const [gen_afp, setGen_afp] = useState("");
  const [gen_fh_afil_afp, setGen_fh_afil_afp] = useState("");
  const [gen_fon_ces, setGen_fon_ces] = useState("");
  const [gen_fh_afil_fon_ces, setGen_fh_afil_fon_ces] = useState("");
  const [gen_caja_com, setGen_caja_com] = useState("");
  const [gen_fh_afil_caja, setGen_fh_afil_caja] = useState("");
  const [gen_status, setGen_status] = useState("");
  const [gen_mod, setGen_mod] = useState("");
  const [gen_des_vac, setGen_des_vac] = useState("");
  const [gen_vac_cov_19, setGen_vac_cov_19] = useState("");
  const [gen_dos, setGen_dos] = useState("");
  const [gen_des_caf, setGen_des_caf] = useState("");
  const [gen_apro_coor_cont, setGen_apro_coor_cont] = useState("");
  const [gen_est_com, setGen_est_com] = useState("");
  const [isVenezuela, setIsVenezuela] = useState(false);
  const [gen_fh_ret, setGen_fh_ret] = useState("");
  const [gen_fh_ult_con, setGen_fh_ult_con] = useState("");
  const [gen_tip_ret, setGen_tip_ret] = useState("");
  const [gen_mot_ret, setGen_mot_ret] = useState("");
  const [gen_ent_equ, setGen_ent_equ] = useState("");
  const [gen_diade, setGen_diade] = useState("");
  const [gen_loc, setGen_loc] = useState("");
  const [gen_car, setGen_car] = useState("");
  const [gen_obs, setGen_obs] = useState("");
  const [gen_fh_ent_cer_lab, setGen_fh_ent_cer_lab] = useState("");
  /////////////////// Formulario Inactividad ////////////////////////
  const [tablaInactivo] = useState("gen_inactivo");
  const [gen_obs_inac, setGen_obs_inac] = useState("");
  const [inactivo, setInactivo] = useState({});

  // Mostrar Fecha
  const mostrarFecha = (date) => {
    return moment(date).format("YYYY-MM-DD");
  };

  useEffect(() => {
    set(registro);
    buscarInactivo(
      registro.gen_nac === "COLOMBIA" ? registro.gen_ide : registro.gen_pas
    );
    setInac(inactivo);
    validarDocumento(registro.gen_nac);
  }, []);

  const buscarInactivo = async (id) => {
    var res = await axios.get(
      `${config.urlServer}/server/searchBy/${tablaInactivo}/${"gen_ide"}/${id}`
    );
    res.data.rows.length != 0 ? setInac(res.data.rows[0]) : "";
    res.data.rows.length != 0 ? setInactivo(res.data.rows[0]) : {};
  };

  const set = (register) => {
    setGen_fh_hr(mostrarFecha(register.gen_fh_hr));
    setGen_nac(register.gen_nac);
    setGen_ide(register.gen_ide);
    setGen_pep(register.gen_pep);
    setGen_ide_ext(register.gen_ide_ext);
    setGen_pas(register.gen_pas);
    setGen_fh_exp(mostrarFecha(register.gen_fh_exp));
    setGen_lu_ex_iden(register.gen_lu_ex_iden);
    setGen_pri_ape(register.gen_pri_ape);
    setGen_seg_ape(register.gen_seg_ape);
    setGen_pri_nom(register.gen_pri_nom);
    setGen_seg_nom(register.gen_seg_nom);
    setGen_gen(register.gen_gen);
    setGen_rh(register.gen_rh);
    setGen_fh_nac(mostrarFecha(register.gen_fh_nac));
    setGen_ciu_nac(register.gen_ciu_nac);
    setGen_dir(register.gen_dir);
    setGen_bar(register.gen_bar);
    setGen_tel(register.gen_tel);
    setGen_cel(register.gen_cel);
    setGen_cor_elec(register.gen_cor_elec);
    setGen_e_civil(register.gen_e_civil);
    setGen_num_hi(register.gen_num_hi);
    setGen_contac_emerg(register.gen_contac_emerg);
    setGen_parent(register.gen_parent);
    setGen_tel_parent(register.gen_tel_parent);
    setGen_t_con(register.gen_t_con);
    setGen_ciu_lab(register.gen_ciu_lab);
    setGen_est_tras(register.gen_est_tras);
    setGen_ole(register.gen_ole);
    setGen_fh_ing(mostrarFecha(register.gen_fh_ing));
    setGen_area(register.gen_area);
    setGen_camp(register.gen_camp);
    setGen_cen_cos(register.gen_cen_cos);
    setGen_car_s_f(register.gen_car_s_f);
    setGen_usu_ssff(register.gen_usu_ssff);
    setGen_car_apli(register.gen_car_apli);
    setGen_sala(register.gen_sala);
    setGen_b_prest(register.gen_b_prest);
    setGen_super(register.gen_super);
    setGen_coor_camp(register.gen_coor_camp);
    setGen_dot(register.gen_dot);
    setGen_tipo_cue(register.gen_tipo_cue);
    setGen_num_cue(register.gen_num_cue);
    setGen_ban(register.gen_ban);
    setGen_tipo_sena(register.gen_tipo_sena);
    setGen_fh_fin_per_pru(mostrarFecha(register.gen_fh_fin_per_pru));
    setGen_fh_fin_cont(mostrarFecha(register.gen_fh_fin_cont));
    setGen_arl(register.gen_arl);
    setGen_fh_afil_arl(mostrarFecha(register.gen_fh_afil_arl));
    setGen_tar_arl(register.gen_tar_arl);
    setGen_eps(register.gen_eps);
    setGen_fh_afil_eps(mostrarFecha(register.gen_fh_afil_eps));
    setGen_afp(register.gen_afp);
    setGen_fh_afil_afp(mostrarFecha(register.gen_fh_afil_afp));
    setGen_fon_ces(register.gen_fon_ces);
    setGen_fh_afil_fon_ces(mostrarFecha(register.gen_fh_afil_fon_ces));
    setGen_caja_com(register.gen_caja_com);
    setGen_fh_afil_caja(mostrarFecha(register.gen_fh_afil_caja));
    setGen_status(register.gen_status);
    setGen_mod(register.gen_mod);
    setGen_des_vac(register.gen_des_vac);
    setGen_vac_cov_19(register.gen_vac_cov_19);
    setGen_dos(register.gen_dos);
    setGen_des_caf(register.gen_des_caf);
    setGen_apro_coor_cont(register.gen_apro_coor_cont);
    setGen_est_com(register.gen_est_com);
    setGen_fh_ret(register.gen_fh_ret);
    setGen_fh_ult_con(register.gen_fh_ult_con);
    setGen_tip_ret(register.gen_tip_ret);
    setGen_mot_ret(register.gen_mot_ret);
    setGen_ent_equ(register.gen_ent_equ);
    setGen_diade(register.gen_diade);
    setGen_loc(register.gen_loc);
    setGen_car(register.gen_car);
    setGen_obs(register.gen_obs);
    setGen_fh_ent_cer_lab(register.gen_fh_cer_lab);
  };

  const setInac = (r) => {
    setGen_fh_ret(mostrarFecha(r.gen_fh_ret));
    setGen_fh_ult_con(mostrarFecha(r.gen_fh_ult_con));
    setGen_tip_ret(r.gen_tip_ret);
    setGen_mot_ret(r.gen_mot_ret);
    setGen_ent_equ(r.gen_ent_equ);
    setGen_diade(r.gen_diade);
    setGen_loc(r.gen_loc);
    setGen_car(r.gen_car);
    setGen_fh_ent_cer_lab(mostrarFecha(r.gen_fh_ent_cer_lab));
    setGen_obs_inac(r.gen_obs_inac);
  };

  const submitGeneral = (e) => {
    submitInactivo(e);
    editDatos(e);
  };

  // Editar los datos
  const editDatos = async (e) => {
    try {
      e.preventDefault();
      e.target.reset();

      let name =
        (await registro.gen_nac) === "COLOMBIA" ? "gen_ide" : "gen_pas";
      let id =
        (await registro.gen_nac) === "COLOMBIA"
          ? registro.gen_ide
          : registro.gen_pas;
      let res = await axios.put(
        `${config.urlServer}/server/update/${tabla}/${name}/${id}`,

        {
          gen_user: user.usu_nom,
          gen_fh_hr: date + " " + hour,
          gen_nac: gen_nac,
          gen_ide: registro.gen_nac === "COLOMBIA" ? registro.gen_ide : "",
          gen_pep: registro.gen_nac === "COLOMBIA" ? "" : registro.gen_pep,
          gen_ide_ext:
            registro.gen_nac === "COLOMBIA" ? "" : registro.gen_ide_ext,
          gen_pas: registro.gen_nac === "COLOMBIA" ? "" : registro.gen_pas,
          gen_fh_exp: gen_fh_exp,
          gen_lu_ex_iden: gen_lu_ex_iden,
          gen_pri_ape: gen_pri_ape,
          gen_seg_ape: gen_seg_ape,
          gen_pri_nom: gen_pri_nom,
          gen_seg_nom: gen_seg_nom,
          gen_gen: gen_gen,
          gen_rh: gen_rh,
          gen_fh_nac: gen_fh_nac,
          gen_ciu_nac: gen_ciu_nac,
          gen_dir: gen_dir,
          gen_bar: gen_bar,
          gen_tel: gen_tel,
          gen_cel: gen_cel,
          gen_cor_elec: gen_cor_elec,
          gen_e_civil: gen_e_civil,
          gen_num_hi: gen_num_hi,
          gen_contac_emerg: gen_contac_emerg,
          gen_parent: gen_parent,
          gen_tel_parent: gen_tel_parent,
          gen_t_con: gen_t_con,
          gen_ciu_lab: gen_ciu_lab,
          gen_est_tras: gen_est_tras,
          gen_ole: gen_ole,
          gen_fh_ing: gen_fh_ing,
          gen_area: gen_area,
          gen_camp: gen_camp,
          gen_cen_cos: gen_cen_cos,
          gen_car_s_f: gen_car_s_f,
          gen_usu_ssff: gen_usu_ssff,
          gen_car_apli: gen_car_apli,
          gen_sala: gen_sala,
          gen_b_prest: gen_b_prest,
          gen_super: gen_super,
          gen_coor_camp: gen_coor_camp,
          gen_dot: gen_dot,
          gen_tipo_cue: gen_tipo_cue,
          gen_num_cue: gen_num_cue,
          gen_ban: gen_ban,
          gen_tipo_sena: gen_tipo_sena,
          gen_fh_fin_per_pru: gen_fh_fin_per_pru,
          gen_fh_fin_cont: gen_fh_fin_cont,
          gen_arl: gen_arl,
          gen_fh_afil_arl: gen_fh_afil_arl,
          gen_tar_arl: gen_tar_arl,
          gen_eps: gen_eps,
          gen_fh_afil_eps: gen_fh_afil_eps,
          gen_afp: gen_afp,
          gen_fh_afil_afp: gen_fh_afil_afp,
          gen_fon_ces: gen_fon_ces,
          gen_fh_afil_fon_ces: gen_fh_afil_fon_ces,
          gen_caja_com: gen_caja_com,
          gen_fh_afil_caja: gen_fh_afil_caja,
          gen_status: gen_status,
          gen_mod: gen_mod,
          gen_des_vac: gen_des_vac,
          gen_vac_cov_19: gen_vac_cov_19,
          gen_dos: gen_dos,
          gen_des_caf: gen_des_caf,
          gen_apro_coor_cont: gen_apro_coor_cont,
          gen_est_com: gen_est_com,
        }
      );
      if (res.data.err) {
        Swal.fire(res.data.err);
      } else {
        Swal.fire(res.data.msg);
        buscar(
          "gen_date",
          registro.gen_nac === "COLOMBIA" ? "gen_ide" : "gen_pas",
          registro.gen_nac === "COLOMBIA" ? registro.gen_ide : registro.gen_pas,
          () => {},
          () => {
            setForm(false); // Me oculta el formulario
            setTable(true); // Me muestra la tabla actualizada
          },
          () => {},
          true,
          setRecord
        );
      }
    } catch (error) {
      console.log(error);
    }
  };

  // Insertar datos inactivo
  const submitInactivo = async (e) => {
    try {
      e.preventDefault();
      e.target.reset();
      let res =
        JSON.stringify(inactivo) === "{}"
          ? await axios.post(
              `${config.urlServer}/server/create/${tablaInactivo}`,
              {
                gen_ide:
                  registro.gen_nac === "COLOMBIA"
                    ? registro.gen_ide
                    : registro.gen_pas,
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
              }
            )
          : await axios.put(
              `${
                config.urlServer
              }/server/update/${tablaInactivo}/${"gen_ide"}/${
                inactivo.gen_ide
              }`,
              {
                gen_ide:
                  registro.gen_nac === "COLOMBIA"
                    ? registro.gen_ide
                    : registro.gen_pas,
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
              }
            );
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

  // Validación de nacionalidad
  const validarDocumento = (e) => {
    if (e === "VENEZUELA") {
      setIsVenezuela(true);
      setGen_ide("");
    } else {
      setIsVenezuela(false);
      setGen_pep("");
      setGen_ide_ext("");
      setGen_pas("");
    }
  };

  return (
    <form
      onSubmit={(e) => {
        submitGeneral(e);
      }}
    >
      <div className="row g-3">
        <hr />
        <h4>DATOS PERSONALES</h4>
        <hr />
        <div className="col-md-3">
          <label>NACIONALIDAD</label>
          <select
            className="form-select"
            value={gen_nac}
            onChange={(e) => {
              setGen_nac(e.target.value);
              validarDocumento(e.target.value);
            }}
            required
          >
            <option selected value="">
              SELECCIONA
            </option>
            <option value="COLOMBIA">COLOMBIA</option>
            <option value="VENEZUELA">VENEZUELA</option>
          </select>
        </div>
        {gen_nac && (
          <TipoDoc
            gen_pep={gen_pep}
            setGen_pep={setGen_pep}
            gen_ide_ext={gen_ide_ext}
            setGen_ide_ext={setGen_ide_ext}
            gen_pas={gen_pas}
            setGen_pas={setGen_pas}
            isVenezuela={isVenezuela}
            gen_ide={gen_ide}
            setGen_ide={setGen_ide}
          />
        )}
        <div className="col-md-3">
          <label>FECHA DE EXPEDICION</label>
          <input
            type="date"
            className="form-control"
            value={gen_fh_exp}
            onChange={(e) => setGen_fh_exp(e.target.value)}
            required
          ></input>
        </div>
        <div className="col-md-3">
          <label>CIUDAD DE EXPEDICION</label>
          <input
            type="text"
            style={{ "text-transform": "uppercase" }}
            className="form-control"
            value={gen_lu_ex_iden}
            onChange={(e) => setGen_lu_ex_iden(e.target.value.toUpperCase())}
            required
          ></input>
        </div>
        <div className="col-md-3">
          <label>PRIMER APELLIDO</label>
          <input
            type="text"
            style={{ "text-transform": "uppercase" }}
            className="form-control"
            value={gen_pri_ape}
            onChange={(e) => setGen_pri_ape(e.target.value.toUpperCase())}
            required
          ></input>
        </div>
        <div className="col-md-3">
          <label>SEGUNDO APELLIDO</label>
          <input
            type="text"
            style={{ "text-transform": "uppercase" }}
            className="form-control"
            value={gen_seg_ape}
            onChange={(e) => setGen_seg_ape(e.target.value.toUpperCase())}
            required
          ></input>
        </div>
        <div className="col-md-3">
          <label>PRIMER NOMBRE</label>
          <input
            type="text"
            style={{ "text-transform": "uppercase" }}
            className="form-control"
            value={gen_pri_nom}
            onChange={(e) => setGen_pri_nom(e.target.value.toUpperCase())}
            required
          ></input>
        </div>
        <div className="col-md-3">
          <label>SEGUNDO NOMBRE</label>
          <input
            type="text"
            style={{ "text-transform": "uppercase" }}
            className="form-control"
            value={gen_seg_nom}
            onChange={(e) => setGen_seg_nom(e.target.value.toUpperCase())}
            required
          ></input>
        </div>
        <div className="col-md-3">
          <label>GENERO</label>
          <select
            className="form-select"
            value={gen_gen}
            onChange={(e) => setGen_gen(e.target.value)}
            required
          >
            <option selected>SELECCIONE</option>
            <option value="MASCULINO">MASCULINO</option>
            <option value="FEMENINO">FEMENINO</option>
            <option value="OTRO">OTRO</option>
          </select>
        </div>
        <div className="col-md-3">
          <label>RH</label>
          <input
            type="text"
            style={{ "text-transform": "uppercase" }}
            className="form-control"
            value={gen_rh}
            onChange={(e) => setGen_rh(e.target.value.toUpperCase())}
            required
          ></input>
        </div>
        <div className="col-md-3">
          <label>FECHA DE NACIMIENTO</label>
          <input
            type="date"
            className="form-control"
            value={gen_fh_nac}
            onChange={(e) => setGen_fh_nac(e.target.value)}
            required
          ></input>
        </div>
        <div className="col-md-3">
          <label>CIUDAD DE NACIMIENTO</label>
          <input
            type="text"
            style={{ "text-transform": "uppercase" }}
            className="form-control"
            value={gen_ciu_nac}
            onChange={(e) => setGen_ciu_nac(e.target.value.toUpperCase())}
            required
          ></input>
        </div>
        <div className="col-md-3">
          <label>DIRECCION</label>
          <input
            type="text"
            style={{ "text-transform": "uppercase" }}
            className="form-control"
            value={gen_dir}
            onChange={(e) => setGen_dir(e.target.value.toUpperCase())}
            required
          ></input>
        </div>
        <div className="col-md-3">
          <label>BARRIO</label>
          <input
            type="text"
            style={{ "text-transform": "uppercase" }}
            className="form-control"
            value={gen_bar}
            onChange={(e) => setGen_bar(e.target.value.toUpperCase())}
            required
          ></input>
        </div>
        <div className="col-md-3">
          <label>TELEFONO</label>
          <input
            type="number"
            className="form-control"
            value={gen_tel}
            onChange={(e) => setGen_tel(e.target.value)}
            required
          ></input>
        </div>
        <div className="col-md-3">
          <label>CELULAR</label>
          <input
            type="number"
            className="form-control"
            value={gen_cel}
            onChange={(e) => setGen_cel(e.target.value)}
            required
          ></input>
        </div>
        <div className="col-md-3">
          <label>CORREO ELECTRONICO</label>
          <input
            type="email"
            style={{ "text-transform": "uppercase" }}
            className="form-control"
            value={gen_cor_elec}
            onChange={(e) => setGen_cor_elec(e.target.value.toUpperCase())}
            required
          ></input>
        </div>
        <div className="col-md-3">
          <label>ESTADO CIVIL</label>
          <select
            className="form-select"
            value={gen_e_civil}
            onChange={(e) => setGen_e_civil(e.target.value)}
            required
          >
            <option selected>SELECCIONE</option>
            <option value="SOLTERO">SOLTERO</option>
            <option value="CASADO">CASADO</option>
            <option value="DIVORCIADO">DIVORCIADO</option>
            <option value="VIUDO">VIUDO</option>
            <option value="UNION LIBRE">UNION LIBRE</option>
          </select>
        </div>
        <div className="col-md-3">
          <label>NUMERO DE HIJOS</label>
          <input
            type="number"
            className="form-control"
            value={gen_num_hi}
            onChange={(e) => setGen_num_hi(e.target.value)}
            required
          ></input>
        </div>
        <div className="col-md-3">
          <label>CONTACTO DE EMERGENCIA</label>
          <input
            type="text"
            style={{ "text-transform": "uppercase" }}
            className="form-control"
            value={gen_contac_emerg}
            onChange={(e) => setGen_contac_emerg(e.target.value.toUpperCase())}
            required
          ></input>
        </div>
        <div className="col-md-3">
          <label>PARENTESCO</label>
          <input
            type="text"
            style={{ "text-transform": "uppercase" }}
            className="form-control"
            value={gen_parent}
            onChange={(e) => setGen_parent(e.target.value.toUpperCase())}
            required
          ></input>
        </div>
        <div className="col-md-3">
          <label>TELEFONO DE PARENTESCO</label>
          <input
            type="number"
            className="form-control"
            value={gen_tel_parent}
            onChange={(e) => setGen_tel_parent(e.target.value)}
            required
          ></input>
        </div>
        <hr />
        <h4>DATOS LABORALES</h4>
        <hr />
        <div className="col-md-3">
          <label>TIPO DE CONTRATO</label>
          <select
            className="form-select"
            value={gen_t_con}
            onChange={(e) => setGen_t_con(e.target.value)}
            required
          >
            <option selected>SELECCIONE</option>
            <option value="TERMINO INDEFINIDO">TERMINO INDEFINIDO</option>
            <option value="TERMINO FIJO">TERMINO FIJO</option>
            <option value="OBRA O LABOR">OBRA O LABOR</option>
          </select>
        </div>
        <div className="col-md-3">
          <label>CIUDAD DONDE LABORA</label>
          <select
            className="form-select"
            value={gen_ciu_lab}
            onChange={(e) => setGen_ciu_lab(e.target.value)}
            required
          >
            <option selected>SELECCIONE</option>
            <option value="BOGOTA">BOGOTA</option>
            <option value="BARRANQUILLA">BARRANQUILLA</option>
          </select>
        </div>
        <div className="col-md-3">
          <label>ESTATUS DE TRASLADO</label>
          <select
            className="form-select"
            value={gen_est_tras}
            onChange={(e) => setGen_est_tras(e.target.value)}
            required
          >
            <option selected>SELECCIONE</option>
            <option value="PROVISIONAL POR ENCARGO">
              PROVISIONAL POR ENCARGO
            </option>
            <option value="SOLICITUD APROBADA">SOLICITUD APROBADA</option>
            <option value="N/A">N/A</option>
          </select>
        </div>
        <div className="col-md-3">
          <label>OLEADA</label>
          <input
            type="number"
            className="form-control"
            value={gen_ole}
            onChange={(e) => setGen_ole(e.target.value)}
            required
          ></input>
        </div>
        <div className="col-md-3">
          <label>FECHA DE INGRESO</label>
          <input
            type="date"
            className="form-control"
            value={gen_fh_ing}
            onChange={(e) => setGen_fh_ing(e.target.value)}
            required
          ></input>
        </div>
        <div className="col-md-3">
          <label>AREA</label>
          <input
            type="text"
            style={{ "text-transform": "uppercase" }}
            className="form-control"
            value={gen_area}
            onChange={(e) => setGen_area(e.target.value.toUpperCase())}
            required
          ></input>
        </div>
        <div className="col-md-3">
          <label>CAMPAÑA</label>
          <select
            className="form-select"
            value={gen_camp}
            onChange={(e) => setGen_camp(e.target.value)}
            required
          >
            <option selected>SELECCIONE</option>
            <option value="HOGAR">HOGAR</option>
            <option value="MOVIL">MOVIL</option>
            <option value="TYT">TYT</option>
            <option value="WEB">WEB</option>
            <option value="PREMIUM">PREMIUM</option>
            <option value="CALIDAD">CALIDAD</option>
            <option value="N/A">N/A</option>
          </select>
        </div>
        <div className="col-md-3">
          <label>CENTRO DE COSTOS</label>
          <select
            className="form-select"
            value={gen_cen_cos}
            onChange={(e) => setGen_cen_cos(e.target.value)}
            required
          >
            <option selected>SELECCIONE</option>
            <option value="MIGRACION">MIGRACION</option>
            <option value="PORTABILIDAD">PORTABILIDAD</option>
            <option value="WCB">WCB</option>
            <option value="ADICIONALES">ADICIONALES</option>
            <option value="INBOUND">INBOUND</option>
            <option value="OUTBOUND">OUTBOUND</option>
            <option value="STAFF">STAFF</option>
            <option value="ADMINISTRATIVO">ADMINISTRATIVO</option>
            <option value="OPERACIONES">OPERACIONES</option>
          </select>
        </div>
        <div className="col-md-3">
          <label>CARGO SUCCES FACTORS</label>
          <input
            type="text"
            style={{ "text-transform": "uppercase" }}
            className="form-control"
            value={gen_car_s_f}
            onChange={(e) => setGen_car_s_f(e.target.value.toUpperCase())}
            required
          ></input>
        </div>
        <div className="col-md-3">
          <label>USUARIO SSFF</label>
          <input
            type="text"
            className="form-control"
            value={gen_usu_ssff}
            onChange={(e) => setGen_usu_ssff(e.target.value.toUpperCase())}
            required
          ></input>
        </div>
        <div className="col-md-3">
          <label>CARGO</label>
          <select
            className="form-select"
            value={gen_car_apli}
            onChange={(e) => setGen_car_apli(e.target.value)}
            required
          >
            <option selected>SELECCIONA</option>
            {elementsRRHH.roles.map((item, index) => {
              return (
                <option key={index} value={item}>
                  {item}
                </option>
              );
            })}
          </select>
        </div>
        <div className="col-md-3">
          <label>SALARIO</label>
          <input
            type="number"
            className="form-control"
            value={gen_sala}
            onChange={(e) => setGen_sala(e.target.value)}
            required
          ></input>
        </div>
        <div className="col-md-3">
          <label>BONO NO PRESTACIONAL</label>
          <input
            type="number"
            className="form-control"
            value={gen_b_prest}
            onChange={(e) => setGen_b_prest(e.target.value)}
            required
          ></input>
        </div>
        <div className="col-md-3">
          <label>SUPERVISOR</label>
          <input
            type="text"
            style={{ "text-transform": "uppercase" }}
            className="form-control"
            value={gen_super}
            onChange={(e) => setGen_super(e.target.value.toUpperCase())}
            required
          ></input>
        </div>
        <div className="col-md-3">
          <label>COORDINADOR CAMPAÑA</label>
          <input
            type="text"
            style={{ "text-transform": "uppercase" }}
            className="form-control"
            value={gen_coor_camp}
            onChange={(e) => setGen_coor_camp(e.target.value.toUpperCase())}
            required
          ></input>
        </div>
        <div className="col-md-3">
          <label>DOTACION</label>
          <input
            type="text"
            style={{ "text-transform": "uppercase" }}
            className="form-control"
            value={gen_dot}
            onChange={(e) => setGen_dot(e.target.value.toUpperCase())}
            required
          ></input>
        </div>
        <div className="col-md-3">
          <label>TIPO DE CUENTA</label>
          <input
            type="text"
            style={{ "text-transform": "uppercase" }}
            className="form-control"
            value={gen_tipo_cue}
            onChange={(e) => setGen_tipo_cue(e.target.value.toUpperCase())}
            required
          ></input>
        </div>
        <div className="col-md-3">
          <label>NUMERO DE CUENTA</label>
          <input
            type="number"
            className="form-control"
            value={gen_num_cue}
            onChange={(e) => setGen_num_cue(e.target.value)}
            required
          ></input>
        </div>
        <div className="col-md-3">
          <label>BANCO</label>
          <input
            type="text"
            style={{ "text-transform": "uppercase" }}
            className="form-control"
            value={gen_ban}
            onChange={(e) => setGen_ban(e.target.value.toUpperCase())}
            required
          ></input>
        </div>
        <div className="col-md-3">
          <label>TIPO SENA</label>
          <input
            type="text"
            style={{ "text-transform": "uppercase" }}
            className="form-control"
            value={gen_tipo_sena}
            onChange={(e) => setGen_tipo_sena(e.target.value.toUpperCase())}
            required
          ></input>
        </div>
        <div className="col-md-3">
          <label>FECHA FIN PERIODO DE PRUEBA</label>
          <input
            type="date"
            className="form-control"
            value={gen_fh_fin_per_pru}
            onChange={(e) => setGen_fh_fin_per_pru(e.target.value)}
            required
          ></input>
        </div>
        <div className="col-md-3">
          <label>FECHA FIN CONTRATO</label>
          <input
            type="date"
            className="form-control"
            value={gen_fh_fin_cont}
            onChange={(e) => setGen_fh_fin_cont(e.target.value)}
            required
          ></input>
        </div>
        <div className="col-md-3">
          <label>ARL</label>
          <input
            type="text"
            style={{ "text-transform": "uppercase" }}
            className="form-control"
            value={gen_arl}
            onChange={(e) => setGen_arl(e.target.value.toUpperCase())}
            required
          ></input>
        </div>
        <div className="col-md-3">
          <label>FECHA DE AFILIACION ARL</label>
          <input
            type="date"
            className="form-control"
            value={gen_fh_afil_arl}
            onChange={(e) => setGen_fh_afil_arl(e.target.value)}
            required
          ></input>
        </div>
        <div className="col-md-3">
          <label>TARIFA ARL</label>
          <input
            type="number"
            className="form-control"
            value={gen_tar_arl}
            onChange={(e) => setGen_tar_arl(e.target.value)}
            required
          ></input>
        </div>
        <div className="col-md-3">
          <label>EPS</label>
          <input
            type="text"
            style={{ "text-transform": "uppercase" }}
            className="form-control"
            value={gen_eps}
            onChange={(e) => setGen_eps(e.target.value.toUpperCase())}
            required
          ></input>
        </div>
        <div className="col-md-3">
          <label>FECHA DE AFILIACION EPS</label>
          <input
            type="date"
            className="form-control"
            value={gen_fh_afil_eps}
            onChange={(e) => setGen_fh_afil_eps(e.target.value)}
            required
          ></input>
        </div>
        <div className="col-md-3">
          <label>AFP</label>
          <input
            type="text"
            style={{ "text-transform": "uppercase" }}
            className="form-control"
            value={gen_afp}
            onChange={(e) => setGen_afp(e.target.value.toUpperCase())}
            required
          ></input>
        </div>
        <div className="col-md-3">
          <label>FECHA DE AFILIACIÓN AFP</label>
          <input
            type="date"
            className="form-control"
            value={gen_fh_afil_afp}
            onChange={(e) => setGen_fh_afil_afp(e.target.value)}
            required
          ></input>
        </div>
        <div className="col-md-3">
          <label>FONDO CESANTIAS</label>
          <input
            type="text"
            style={{ "text-transform": "uppercase" }}
            className="form-control"
            value={gen_fon_ces}
            onChange={(e) => setGen_fon_ces(e.target.value.toUpperCase())}
            required
          ></input>
        </div>
        <div className="col-md-3">
          <label>FECHA DE AFI FONDO CENSAN</label>
          <input
            type="date"
            className="form-control"
            value={gen_fh_afil_fon_ces}
            onChange={(e) => setGen_fh_afil_fon_ces(e.target.value)}
            required
          ></input>
        </div>
        <div className="col-md-3">
          <label>CAJA DE COMPENSACION</label>
          <input
            type="text"
            style={{ "text-transform": "uppercase" }}
            className="form-control"
            value={gen_caja_com}
            onChange={(e) => setGen_caja_com(e.target.value.toUpperCase())}
            required
          ></input>
        </div>
        <div className="col-md-3">
          <label>FECHA DE AFILIACION A CAJA</label>
          <input
            type="date"
            className="form-control"
            value={gen_fh_afil_caja}
            onChange={(e) => setGen_fh_afil_caja(e.target.value)}
            required
          ></input>
        </div>
        <div className="col-md-3">
          <label className="">MODALIDAD</label>
          <input
            type="text"
            style={{ "text-transform": "uppercase" }}
            className="form-control"
            value={gen_mod}
            onChange={(e) => setGen_mod(e.target.value.toUpperCase())}
            required
          ></input>
        </div>
        <div className="col-md-3 d-block">
          <label className="">DESEA VACUNARSE</label>
          <select
            className="form-select"
            value={gen_des_vac}
            onChange={(e) => setGen_des_vac(e.target.value)}
            required
          >
            <option selected>SELECCIONE</option>
            <option value="SI">SI</option>
            <option value="NO">NO</option>
          </select>
        </div>
        <div className="col-md-3">
          <label className="">VACUANA COVID 19 TIPO VACUNA</label>
          <select
            className="form-select"
            value={gen_vac_cov_19}
            onChange={(e) => setGen_vac_cov_19(e.target.value)}
            required
          >
            <option selected>SELACCIONE</option>
            <option value="COVAX">COVAX</option>
            <option value="PFIZER">PFIZER</option>
            <option value="ASTRAZANECA">ASTRAZANECA</option>
            <option value="MODERNA">MODERNA</option>
            <option value="JANSSEN">JANSSEN</option>
            <option value="SINOVAC">SINOVAC</option>
            <option value="NO APLICA">NO APLICA</option>
          </select>
        </div>
        <div className="col-md-3">
          <label className="">DOSIS</label>
          <select
            className="form-select"
            value={gen_dos}
            onChange={(e) => setGen_dos(e.target.value)}
            required
          >
            <option selected>SELECCION</option>
            <option value="PRIMERA DOSIS">PRIMERA DOSIS</option>
            <option value="SEGUNDO DOSIS">SEGUNDO DOSIS</option>
            <option value="TERCERA DOSIS">TERCERA DOSIS</option>
            <option value="COMPLETA">COMPLETA</option>
            <option value="NO APLICA">NO APLICA</option>
          </select>
        </div>
        <div className="col-md-3">
          <label className="">DESCUENTO CAFETERIA</label>
          <input
            type="number"
            className="form-control"
            value={gen_des_caf}
            onChange={(e) => setGen_des_caf(e.target.value)}
            required
          ></input>
        </div>
        <div className="col-md-3">
          <label className="">APRO COORDI CONTRATACION</label>
          <input
            type="text"
            style={{ "text-transform": "uppercase" }}
            className="form-control"
            value={gen_apro_coor_cont}
            onChange={(e) =>
              setGen_apro_coor_cont(e.target.value.toUpperCase())
            }
            required
          ></input>
        </div>
        <div className="col-md-3">
          <label className="">ESTADO</label>
          <select
            className="form-select"
            value={gen_status}
            onChange={(e) => {
              setGen_status(e.target.value);
              // validarEstado(e.target.value);
            }}
            // onClick={() => setEstadoBoton(false)}
            required
          >
            <option selected value="">
              SELECCIONA
            </option>
            <option value="ACTIVO">ACTIVO</option>
            <option value="INACTIVO">INACTIVO</option>
          </select>
        </div>
        {gen_status === "INACTIVO" && (
          // <Estado registro={registro} config={config} editDatos={editDatos} />
          <Fragment>
            <hr />
            <h4>DATOS DE PERSONA INACTIVA</h4>
            <hr />
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
          </Fragment>
        )}
      </div>
      <div className="col-md-12">
        <button
          type="submit"
          className={
            !inactivo
              ? "btn btn-outline-warning form-control mt-3"
              : "btn btn-outline-primary form-control mt-3"
          }
        >
          {!inactivo ? "ACTUALIZAR DATOS" : "GUARDAR DATOS"}
        </button>
      </div>
    </form>
  );
};

export default FormularioContratacion;
