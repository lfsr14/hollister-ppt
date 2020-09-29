import React from "react";
import { Helmet } from "react-helmet";
import Layout from "../components/layout";
import "../assets/scss/stylebasiclevel.scss";
import FooterNavigation from "../components/FooterNavigation";

const TrabajoColaborativo = (props) => (
    <Layout>
      <Helmet>
        <title>Trabajo Colaborativo</title>
        <meta name="description" content="Elements Page" />
      </Helmet>
  
        <div>
            <section id="banner-tcolaborativo">
            
            
            </section>
        </div>
        
      <FooterNavigation
          left={"/ciberseguridad"}
          right={"/foros-interactivos"}
        />
    </Layout>
  );
  
  export default TrabajoColaborativo;