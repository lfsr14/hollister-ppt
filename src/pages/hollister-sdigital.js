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
              <div className="columnas-una">
                <div className="columnas-dos">
                    <h1 className="tit">Hollister con la<br></br>Salud Digital</h1>
                </div>
              </div>
              <h1 className="sub-dos">Descubre cómo podemos<br></br>aportar valor a tu día a día</h1>
              
            </section>
        </div>
        
      <FooterNavigation
          left={"/profesionales-sanitarios"}
          right={"/teleconsulta"}
        />
    </Layout>
  );
  
  export default HollisterSaludDigital;