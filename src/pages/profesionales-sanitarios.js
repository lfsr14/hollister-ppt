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
            
            
            </section>
        </div>
        
      <FooterNavigation className="tst"
          left={"/urologia"}
          right={"/hollister-sdigital"}
        />
    </Layout>
  );
  
  export default ProfesionalesSanitarios;