import React, { Fragment } from "react";
import moment from "moment";

const Tabla = ({ data }) => {
    // Mostrar Fecha
    const mostrarFecha = (date) => {
        return moment(date).format("YYYY-MM-DD");
    };

    // Mostrar Fecha y Hora
    const mostrarFechaHora = (date) => {
        return moment(date).format("YYYY-MM-DD, HH:mm:ss");
    };

    return (
        data.length > 0 && (
            <Fragment>
                <div className="table-responsive">
                    <table id="data" className="table table-hover table-striped table-bordered">
                        <thead className="table-dark">
                            <tr className="text-center">
                                <th>N°</th>
                                <th></th>
                                <th>ESTADO</th>
                                <th>ULTIMA ACTUALIZACION REALIZADA POR:</th>
                                <th>FECHA Y HORA</th>
                                <th>NACIONALIDAD</th>
                                <th>DOCUMENTO DEL CANDIDATO</th>
                                <th>FECHA DE EXPEDICION</th>
                                <th>CIUDAD DE EXPEDICION</th>
                                <th>PRIMER APELLIDO</th>
                                <th>SEGUNDO APELLIDO</th>
                                <th>PRIMER NOMBRE</th>
                                <th>SEGUNDO NOMBRE</th>
                                <th>GENERO</th>
                                <th>RH</th>
                                <th>FECHA DE NACIMIENTO</th>
                                <th>CIUDAD DE NACIMIENTO</th>
                                <th>DIRECCION</th>
                                <th>BARRIO</th>
                                <th>TELEFONO</th>
                                <th>CELULAR</th>
                                <th>CORREO ELECTRONICO</th>
                                <th>ESTADO CIVIL</th>
                                <th>NUMERO DE HIJOS</th>
                                <th>CONTACTO DE EMERGENCIA</th>
                                <th>PARENTESCO</th>
                                <th>TELEFONO DE PARENTESCO</th>
                                <th>TIPO DE CONTRATO</th>
                                <th>CIUDAD DONDE LABORA</th>
                                <th>ESTATUS DE TRASLADO</th>
                                <th>OLEADA</th>
                                <th>FECHA DE INGRESO</th>
                                <th>AREA</th>
                                <th>CAMPAÑA</th>
                                <th>CENTRO DE COSTOS</th>
                                <th>CARGO SUCCES FACTORS</th>
                                <th>USUARIO SSFF</th>
                                <th>CARGO</th>
                                <th>SALARIO</th>
                                <th>BONO NO PRESTACIONAL</th>
                                <th>SUPERVISOR</th>
                                <th>COORDINADOR CAMPAÑA</th>
                                <th>DOTACION</th>
                                <th>TIPO DE CUENTA</th>
                                <th>NUMERO DE CUENTA</th>
                                <th>BANCO</th>
                                <th>TIPO SENA</th>
                                <th>FECHA FIN PERIODO DE PRUEBA</th>
                                <th>FECHA FIN CONTRATO</th>
                                <th>ARL</th>
                                <th>FECHA DE AFILIACION ARL</th>
                                <th>TARIFA ARL</th>
                                <th>EPS</th>
                                <th>FECHA DE AFILIACION EPS</th>
                                <th>AFP</th>
                                <th>FECHA DE AFILIACION AFP</th>
                                <th>FONDO DE CESANTIAS</th>
                                <th>FECHA DE AFILIACION FONDO DE CESANTIAS</th>
                                <th>CAJA DE COMPENSACION</th>
                                <th>FECHA DE AFILIACION A CAJA</th>
                                <th>MODALIDAD</th>
                                <th>DESEA VACUNARSE</th>
                                <th>VACUNA COVID 19 TIPO VACUANA</th>
                                <th>DOSIS</th>
                                <th>DESCUENTO CAFETERIA</th>
                                <th>APROVACION COORDINADOR CONTRATACION</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((name) => (
                                <tr>
                                    <td>{name.gen_id}</td>
                                    <td
                                        style={{
                                            background:
                                                name.gen_status !== "ACTIVO" ? "#D61506" : "#05AB17",
                                        }}
                                    ></td>
                                    <td>{name.gen_status}</td>
                                    <td>{name.gen_user}</td>
                                    <td>{mostrarFechaHora(name.gen_fh_hr)}</td>
                                    <td>{name.gen_nac}</td>
                                    <td>{name.gen_nac === 'COLOMBIA' ? name.gen_ide : name.gen_pas}</td>
                                    <td>{mostrarFecha(name.gen_fh_exp)}</td>
                                    <td>{name.gen_lu_ex_iden}</td>
                                    <td>{name.gen_pri_ape}</td>
                                    <td>{name.gen_seg_ape}</td>
                                    <td>{name.gen_pri_nom}</td>
                                    <td>{name.gen_seg_nom}</td>
                                    <td>{name.gen_gen}</td>
                                    <td>{name.gen_rh}</td>
                                    <td>{mostrarFecha(name.gen_fh_nac)}</td>
                                    <td>{name.gen_ciu_nac}</td>
                                    <td>{name.gen_dir}</td>
                                    <td>{name.gen_bar}</td>
                                    <td>{name.gen_tel}</td>
                                    <td>{name.gen_cel}</td>
                                    <td>{name.gen_cor_elec}</td>
                                    <td>{name.gen_e_civil}</td>
                                    <td>{name.gen_num_hi}</td>
                                    <td>{name.gen_contac_emerg}</td>
                                    <td>{name.gen_parent}</td>
                                    <td>{name.gen_tel_parent}</td>
                                    <td>{name.gen_t_con}</td>
                                    <td>{name.gen_ciu_lab}</td>
                                    <td>{name.gen_est_tras}</td>
                                    <td>{name.gen_ole}</td>
                                    <td>{mostrarFecha(name.gen_fh_ing)}</td>
                                    <td>{name.gen_area}</td>
                                    <td>{name.gen_camp}</td>
                                    <td>{name.gen_cen_cos}</td>
                                    <td>{name.gen_car_s_f}</td>
                                    <td>{name.gen_usu_ssff}</td>
                                    <td>{name.gen_carg}</td>
                                    <td>{name.gen_sala}</td>
                                    <td>{name.gen_b_prest}</td>
                                    <td>{name.gen_super}</td>
                                    <td>{name.gen_coor_camp}</td>
                                    <td>{name.gen_dot}</td>
                                    <td>{name.gen_tipo_cue}</td>
                                    <td>{name.gen_num_cue}</td>
                                    <td>{name.gen_ban}</td>
                                    <td>{name.gen_tipo_sena}</td>
                                    <td>{mostrarFecha(name.gen_fh_fin_per_pru)}</td>
                                    <td>{mostrarFecha(name.gen_fh_fin_cont)}</td>
                                    <td>{name.gen_arl}</td>
                                    <td>{mostrarFecha(name.gen_fh_afil_arl)}</td>
                                    <td>{name.gen_tar_arl}</td>
                                    <td>{name.gen_eps}</td>
                                    <td>{mostrarFecha(name.gen_fh_afil_eps)}</td>
                                    <td>{name.gen_afp}</td>
                                    <td>{mostrarFecha(name.gen_fh_afil_afp)}</td>
                                    <td>{name.gen_fon_ces}</td>
                                    <td>{mostrarFecha(name.gen_fh_afil_fon_ces)}</td>
                                    <td>{name.gen_caja_com}</td>
                                    <td>{mostrarFecha(name.gen_fh_afil_caja)}</td>
                                    <td>{name.gen_mod}</td>
                                    <td>{name.gen_des_vac}</td>
                                    <td>{name.gen_vac_cov_19}</td>
                                    <td>{name.gen_dos}</td>
                                    <td>{name.gen_des_caf}</td>
                                    <td>{name.gen_apro_coor_cont}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </Fragment>
        )

    );
};

export default Tabla;
