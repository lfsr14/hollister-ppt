import React from "react";
import { Helmet } from "react-helmet";
import Layout from "../components/layout";
import "../assets/scss/stylebasiclevel.scss";
import Hollister from "../assets/images/27/logo-hollister-blanco.png";
import HollisterEdu from "../assets/images/27/logo-hollister_education-blanco.png";
import FooterNavigation from "../components/FooterNavigation";

const Fin = (props) => (
    <Layout>
      <Helmet>
        <title>Fin Presentación</title>
        <meta name="description" content="Elements Page" />
      </Helmet>
  
        <div>
            <section id="banner-final">
                <div className="texto-nivel-avanzado-dos">
                    <div className="logo-hollister"> 
                        <img src={Hollister} alt="Hollister"/>
                    </div>
                    <div className="logo-hollister-edu"> 
                        <img src={HollisterEdu} alt="Hollister Education"/>
                    </div>
                </div>
                <br></br>
                <div className="texto-nivel-avanzado-tres">
                    <h2 className="texto-final">
                      Hollister con la Salud digital  
                    </h2>
                </div>
            </section>
        </div>
        
      <FooterNavigation
          left={"/foros-interactivos"}
        />
    </Layout>
  );
  
  export default Fin;