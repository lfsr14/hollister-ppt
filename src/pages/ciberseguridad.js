import React from "react";
import { Helmet } from "react-helmet";
import Layout from "../components/layout";
import "../assets/scss/stylebasiclevel.scss";
import Ponente from "../assets/images/24/isabel.png";
import FooterNavigation from "../components/FooterNavigation";

const Ciberseguridad = (props) => (
    <Layout>
      <Helmet>
        <title>CiberSeguridad</title>
        <meta name="description" content="Elements Page" />
      </Helmet>
  
        <div>
            <section id="banner-ciberseguridad">

              <div className="container-especialized margen-cuadro-texto">
                <div className="col-8 col-12-medium">
                  <div className="avanzado-line no-border ciber">
                    {/* Ciberseguridad */}
                    <label className="label-info-lg">
                    {/* <strong className="neg_tit">Propiedad intelectual, entorno jurídico e implicaciones</strong> */}
                  </label>
                  </div>
                </div>
              </div>
              <div className="divtitulos">
                <label className="titletit">
                  <strong className="color-red-tema">Ciberseguridad</strong>
                </label>
                <label className="stitletit">
                  <strong className="color-red-tema">Propiedad intelectual, entorno jurídico e implicaciones</strong>
                </label>
              </div>
              <div className="seccion-foto-info-lg">  
                <div className="info-seccion-info-lg"> 
                  <p>
                    <label className="label-info-lg">
                      <strong className="neg-ponente">Ponente: Isabel Marín</strong>
                    </label>
                    Doctora en derecho y abogada especializada en Derecho
                    Farmacéutico y Sanitario. Consultora en protección de datos e
                    implementación de herramientas tecnológicas en el sector
                    salud. Profesora en la Universidad Francisco de Vitoria y en
                    programas de escuelas de negocio dirigidos a profesionales
                    sanitarios (CESIF, CEU, ESESA…).
                    Ponente y formadora para empresas del sector salud (Pfizer,
                    Almirall, Stada, Aristo, Bidafarma…). Autora de numerosos
                    artículos y libros jurídicos, así como del blog:
                    www.farmaciayderecho.com
                  </p>
                </div>
                <div className="foto-seccion-info ffoto"> 
                  <img src={Ponente} alt="Ponente"/>
                </div>
              </div>
            
            </section>
        </div>
        
      <FooterNavigation
          left={"/teleconsulta"}
          right={"/trabajo-colaborativo"}
        />
    </Layout>
  );
  
  export default Ciberseguridad;