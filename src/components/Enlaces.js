import React, { Fragment, PureComponent } from "react";

const Enlaces = ({ user, rol }) => {
  return (
    <Fragment>
      <div className="container">
        <h1>Enlaces</h1>
        <p>Al dar clic en cada enlace se abrirá una nueva pestaña.</p>
        <br />
        <div className="row">
          <div className="col-md-6">
            <div class="col-md-2 ">
              <a href="http://10.255.255.4" target="_blank">
                <p>Aware .4</p>
              </a>
            </div>
            <div class="col-md-2 ">
              <a href="http://10.255.255.5" target="_blank">
                <p>Aware .5</p>
              </a>
            </div>
            <div class="col-md-2 ">
              <a href="http://10.255.255.8" target="_blank">
                <p>Aware .8</p>
              </a>
            </div>
            <div class="col-md-2 ">
              <a href="https://www.google.com/maps" target="_blank">
                <p>Google Maps</p>
              </a>
            </div>
            <div class="col-md-2 ">
              <a href="https://versus.com/es" target="_blank">
                <p>Versus</p>
              </a>
            </div>
            <div class="col-md-2 ">
              <a href="https://gsmarena.com" target="_blank">
                <p>gsmarena</p>
              </a>
            </div>
            <div class="col-md-2 ">
              <a href="https://smart-gsm.com" target="_blank">
                <p>smartgsm</p>
              </a>
            </div>
            <div class="col-md-2 ">
              <a
                href="https://poliedro.comcel.com.co/LoginPoliedro/Login.aspx"
                target="_blank"
              >
                <p>Poliedro</p>
              </a>
            </div>
            <div class="col-md-2 ">
              <a href="http://portalsac/Index.aspx" target="_blank">
                <p>Portal SAC</p>
              </a>
            </div>
            <div class="col-md-2 ">
              <a
                href="https://www.transuniondecisioncentre.com.mx/DC/DCPortalV31_Latam/LogIn.aspx"
                target="_blank"
              >
                <p>ID VISION</p>
              </a>
            </div>
          </div>
          <div className="col-md-6">
            <div class="col-md-2 ">
              <a href="https://tienda.claro.com.co/" target="_blank">
                <p>Tienda Claro</p>
              </a>
            </div>
            <div class="col-md-2 ">
              <a
                href="https://chrome.google.com/webstore/detail/allow-cors-access-control/lhobafahddgcelffkeicbaginigeejlf?hl=es"
                target="_blank"
              >
                <p>Extensión OTP</p>
              </a>
            </div>
            <div class="col-md-2 ">
              <a
                href="https://chrome.google.com/webstore/detail/moesif-origin-cors-change/digfbfaphojjndkpccljibejjbppifbc"
                target="_blank"
              >
                <p>Nueva Extensión</p>
              </a>
            </div>
            <div class="col-md-2 ">
              <a href="http://172.24.216.156:8302/app-fraudes/" target="_blank">
                <p>Aplicativo OTP</p>
              </a>
            </div>
            <div class="col-md-2 ">
              <a href="https://recid.olimpiait.com/" target="_blank">
                <p>Biometría</p>
              </a>
            </div>
            <div class="col-md-2 ">
              <a
                href="http://dime.claro.com.co/Portal/Produccion/"
                target="_blank"
              >
                <p>Dime Calro</p>
              </a>
            </div>
            <div class="col-md-2 ">
              <a
                href="http://.logytechmobile.com/notus.cem.externo/Login.aspx?errSess=true"
                target="_blank"
              >
                Notus
              </a>
            </div>
            <div class="col-md-2 ">
              <a
                href="http://miclaroasesor.claro.com.co:8010/PinGeneration/V3.0?wsdl"
                target="_blank"
              >
                <p>URL OTP</p>
              </a>
            </div>
            <div class="col-md-2 ">
              <a href="https://claro.com.co" target="_blank">
                <p>Wew Claro</p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Enlaces;
