import React from "react";
import { Helmet } from "react-helmet";
import Layout from "../components/layout";
import "../assets/scss/stylebasiclevel.scss";
import FooterNavigation from "../components/FooterNavigation";
import Ponente from "../assets/images/25/ponente_2.png";

const TrabajoColaborativo = (props) => (
    <Layout>
      <Helmet>
        <title>Trabajo Colaborativo</title>
        <meta name="description" content="Elements Page" />
      </Helmet>
  
        <div>
            <section id="banner-tcolaborativo">

            <div className="container-especialized margen-cuadro-texto marg-left">
                <div className="col-8 col-12-medium">
                  <div className="avanzado-line no-border">
                    {" "}<span>Trabajo colaborativo y redes <br></br>profesionales</span>
                  </div>
                </div>
              </div>
              <div className="columnas-dos listas">
                <ul> 
                  <li>Aunque las reuniones presenciales van a disminuir,<strong>la necesidad de networking permanece</strong></li>
                  <br></br>
                  <li> Las <strong>nuevas tecnologías</strong> nos permiten gestionar equipos y trabajos <strong>sin barreras geográficas</strong></li>
                  <br></br>
                  <li> Las <strong>herramientas digitales y redes profesionales</strong> son un punto de partida <strong>imprescindible</strong></li>
                </ul>
                  
              </div>
              <div className="seccion-foto-info margin-mtop">
                <div className="foto-seccion-info"> 
                  <img src={Ponente} alt="Ponente"/>
                </div>
                <div className="info-seccion-info"> 
                  <label className="label-info"><strong className="neg">Sede:</strong>&nbsp;Valencia</label>
                  <label className="label-info"><strong className="neg">Fecha:</strong>&nbsp;Octubre 2021</label>
                </div>
              </div>
            
            </section>
        </div>
        
      <FooterNavigation
          left={"/ciberseguridad"}
          right={"/foros-interactivos"}
        />
    </Layout>
  );
  
  export default TrabajoColaborativo;