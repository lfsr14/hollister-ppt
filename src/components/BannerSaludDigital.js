import React from "react";
import logoPortada from "../assets/images/01/logo-blanco-portada.png";
import FooterNavigation from "./FooterNavigation";

import "../assets/scss/01.scss";

const BannerSaludDigital = () => {
  return (
    <>
      <section id="bannerSalud">
        <div className="container-banner">
          <div className="row">
            <div className="col-12">
              <img src={logoPortada} className="logo-banner" />
            </div>
            <div className="col-12 title-banner">
              <h2>Salud Digital</h2>
            </div>
          </div>
        </div>

        <FooterNavigation left={"/"} right={"/elements"} />
      </section>
    </>
  );
};

export default BannerSaludDigital;
