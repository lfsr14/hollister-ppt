import React from "react";
import { Helmet } from "react-helmet";
import Layout from "../components/layout";
import "../assets/scss/stylebasiclevel.scss";
import FooterNavigation from "../components/FooterNavigation";
import Ponente from "../assets/images/23/telecontacto.png";

const Teleconsulta = (props) => (
    <Layout>
      <Helmet>
        <title>Teleconsulta</title>
        <meta name="description" content="Elements Page" />
      </Helmet>
  
        <div>
            <section id="banner-teleconsulta">
            
            <div className="container-especialized margen-cuadro-texto marg-left">
                <div className="col-8 col-12-medium">
                  <div className="avanzado-line no-border">
                    {" "}<span>Teleconsulta</span><br></br>
                    <label className="sub-line">Nuevos retos de atención al paciente</label>
                  </div>
                </div>
              </div>
              <div className="columnas-dos listas">
                <ul> 
                  <li> La emergencia sanitaria del COVID-19 ha llevado a un <strong>aumento exponencial del uso de la telemedicina.</strong></li>
                  <br></br>
                  <li> La teleconsulta consiste en construir un servicio no presencial que permita proporcionar <strong>la mejor asistencia a los pacientes.</strong></li>
                </ul>
                  
              </div>
              <div className="seccion-foto-info">
                <div className="foto-seccion-info"> 
                  <img src={Ponente} alt="Ponente"/>
                </div>
                <div className="info-seccion-info"> 
                  <label className="label-info"><strong className="neg">Sede:</strong>&nbsp;Madrid</label>
                  <label className="label-info"><strong className="neg">Fecha:</strong>&nbsp;12 de Noviembre</label>
                </div>
              </div>
            </section>
        </div>
        
      <FooterNavigation
          left={"/hollister-sdigital"}
          right={"/ciberseguridad"}
        />
    </Layout>
  );
  
  export default Teleconsulta;