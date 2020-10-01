import React from "react";
import { Helmet } from "react-helmet";
import Layout from "../components/layout";
import FooterNavigation from "../components/FooterNavigation";
import "../assets/scss/stylebasiclevel.scss";
import "../assets/scss/05.scss";

const PorqueHollister = (props) => {
  return (
    <Layout>
      <Helmet>
        <title>Por que Hollister</title>
        <meta
          name="description"
          content="Por que Hollister con la Salud Digital"
        />
      </Helmet>
      <div className="basic-level">
        <section id="banner-porque-hollister">
          <div className="texto-nivel-avanzado">
            <div className="logo-salus">
              <h2 className="title-section">
                Por qué Hollister con la Salud Digital
              </h2>
            </div>
            <div className="columnas-una">
              <h3 className="description">
                Nuestra misión: hacer la vida del paciente más digna y
                gratificante
              </h3>
            </div>
          </div>
        </section>
      </div>
      <FooterNavigation left={"/"} right={"/"} />
    </Layout>
  );
};

export default PorqueHollister;
