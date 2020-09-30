import React from "react";
import { Helmet } from "react-helmet";
import Layout from "../components/layout";
import "../assets/scss/stylebasiclevel.scss";
import FooterNavigation from "../components/FooterNavigation";

const ProfesionalesSanitarios = (props) => (
    <Layout>
      <Helmet>
        <title>Info Profesionales Sanitarios</title>
        <meta name="description" content="Elements Page" />
      </Helmet>
  
        <div>
            <section id="banner-psanitarios">
              
              <div className="columnas-una">
                <div className="columnas-dos txt-adjust">
                    <h1 className="tit">¿Sabías que el 93% de los<br></br>
                      profesionales sanitarios<br></br>
                      reclaman una capacitación<br></br>
                      en Salud Digital?
                      </h1>
                </div>
              </div>
            
            </section>
        </div>
        
      <FooterNavigation className="tst"
          left={"/urologia"}
          right={"/hollister-sdigital"}
        />
    </Layout>
  );
  
  export default ProfesionalesSanitarios;