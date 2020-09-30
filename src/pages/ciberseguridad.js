import React from "react";
import { Helmet } from "react-helmet";
import Layout from "../components/layout";
import "../assets/scss/stylebasiclevel.scss";
import FooterNavigation from "../components/FooterNavigation";

const Ciberseguridad = (props) => (
    <Layout>
      <Helmet>
        <title>CiberSeguridad</title>
        <meta name="description" content="Elements Page" />
      </Helmet>
  
        <div>
            <section id="banner-ciberseguridad">
            
            
            </section>
        </div>
        
      <FooterNavigation
          left={"/teleconsulta"}
          right={"/trabajo-colaborativo"}
        />
    </Layout>
  );
  
  export default Ciberseguridad;