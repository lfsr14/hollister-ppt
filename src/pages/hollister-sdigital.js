import React from "react";
import { Helmet } from "react-helmet";
import Layout from "../components/layout";
import "../assets/scss/stylebasiclevel.scss";
import FooterNavigation from "../components/FooterNavigation";

const HollisterSaludDigital = (props) => (
    <Layout>
      <Helmet>
        <title>Hollister Salud Digital</title>
        <meta name="description" content="Elements Page" />
      </Helmet>
  
        <div>
            <section id="banner-hsdigital">
            
            
            </section>
        </div>
        
      <FooterNavigation
          left={"/profesionales-sanitarios"}
          right={"/teleconsulta"}
        />
    </Layout>
  );
  
  export default HollisterSaludDigital;