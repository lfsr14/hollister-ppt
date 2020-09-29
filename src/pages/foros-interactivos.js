import React from "react";
import { Helmet } from "react-helmet";
import Layout from "../components/layout";
import "../assets/scss/stylebasiclevel.scss";
import FooterNavigation from "../components/FooterNavigation";

const ForosInteractivos = (props) => (
    <Layout>
      <Helmet>
        <title>Foros Interactivos</title>
        <meta name="description" content="Elements Page" />
      </Helmet>
  
        <div>
            <section id="banner-finteractivos">
            
            
            </section>
        </div>
        
      <FooterNavigation
          left={"/trabajo-colaborativo"}
          right={"/fin"}
        />
    </Layout>
  );
  
  export default ForosInteractivos;