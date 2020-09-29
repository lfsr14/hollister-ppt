import React from "react";
import { Helmet } from "react-helmet";
import Layout from "../components/layout";
import "../assets/scss/stylebasiclevel.scss";
import FooterNavigation from "../components/FooterNavigation";

const Teleconsulta = (props) => (
    <Layout>
      <Helmet>
        <title>Teleconsulta</title>
        <meta name="description" content="Elements Page" />
      </Helmet>
  
        <div>
            <section id="banner-teleconsulta">
            
            
            </section>
        </div>
        
      <FooterNavigation
          left={"/hollister-sdigital"}
          right={"/ciberseguridad"}
        />
    </Layout>
  );
  
  export default Teleconsulta;