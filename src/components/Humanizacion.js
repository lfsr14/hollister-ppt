import React from "react";
import FooterNavigation from "./FooterNavigation";
import DP02_foto from "../assets/images/02/DP02_foto.jpg";

import "../assets/scss/02.scss";

const Humanizacion = () => {
  return (
    <>
      <section id="banner-humanizacion">
        <div className="row">
          <div className="col-1"></div>
          <div className="col-7 container-humanizacion">
            <div className="content-title">
              <h3>Tu formación nos importa</h3>
              <h2>La Humanización y la Salud Digital</h2>
              <h2 className="subtitle">Porque tu paciente es lo primero</h2>
            </div>
            <div className="border-section">
              <div className="content-border">
                <div className="content-quote">
                  <h4>
                    <i className="fas fa-quote-left" />
                    ¿Qué es la salud digital y por qué es importante para mi?
                  </h4>
                  <h4>
                    ¿Y si te dijera que la salud digital no es un concepto
                    tecnológico sino una forma de mejorar como profesionales y
                    conseguir que los pacientes alcancen una slud mejor?{"  "}
                    <i className="fas fa-quote-right" />*
                  </h4>
                </div>
                <h4 className="title-name">José María Cepeda</h4>
                <h4>
                  Enfermero de Emergencias y Creador de Contenidos sobre e-salud
                </h4>
              </div>
            </div>
          </div>
          <div className="col-4">
            <img src={DP02_foto} className="image-two" />
          </div>
        </div>

        <FooterNavigation left={"/"} right={"/basic-facetoface"} />
      </section>
    </>
  );
};

export default Humanizacion;
