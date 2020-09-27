import React from "react";
import { Link as ScrollLink } from "react-scroll";
import pic01 from "../assets/images/pic01.jpg";

const BannerSaludDigital = () => {
  return (
    <section id="bannerSalud">
      <div className="content">
        <header>
          <h2>Salud Digital</h2>
        </header>
        <span className="image">
          <img src={pic01} alt="intro" />
        </span>
      </div>
    </section>
  );
};

export default BannerSaludDigital;
