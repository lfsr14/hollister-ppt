import React from "react";
import { Helmet } from "react-helmet";
import Layout from "../components/layout";
import "../assets/scss/stylebasiclevel.scss";
import FooterNavigation from "../components/FooterNavigation";

const AvanzadoDos = (props) => (
    <Layout>
      <Helmet>
        <title>Avanzado Dos</title>
        <meta name="description" content="Elements Page" />
      </Helmet>
  
        <div>
            <section id="banner-navanzadodos">
            
            
            </section>
        </div>
        
      <FooterNavigation
          left={"/avanzado-uno"}
          right={"/urologia"}
        />
    </Layout>
  );
  
  export default AvanzadoDos;