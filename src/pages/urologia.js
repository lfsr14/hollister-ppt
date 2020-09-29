import React from "react";
import { Helmet } from "react-helmet";
import Layout from "../components/layout";
import "../assets/scss/stylebasiclevel.scss";
import FooterNavigation from "../components/FooterNavigation";

const Urologia = (props) => (
    <Layout>
      <Helmet>
        <title>Foros de Urología en Salud Digital</title>
        <meta name="description" content="Elements Page" />
      </Helmet>
  
        <div>
            <section id="banner-urologia">
            
            
            </section>
        </div>
        
      <FooterNavigation
          left={"/avanzado-dos"}
          right={"/profesionales-sanitarios"}
        />
    </Layout>
  );
  
  export default Urologia;