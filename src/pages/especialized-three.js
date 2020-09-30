import React from "react";
import { Helmet } from "react-helmet";
import Layout from "../components/layout";
import "../assets/scss/stylebasiclevel.scss";
import Ilustration from "../images/especialized-three/ilustracion.png";
import Cuadro1 from "../images/especialized-three/ico_01.png";
import Cuadro2 from "../images/especialized-three/ico_02.png";
import Cuadro3 from "../images/especialized-three/ico_03.png";
import Cuadro4 from "../images/especialized-three/ico_03.png";
import FooterNavigation from "../components/FooterNavigation";

const EspecializedThree = (props) => (
  <Layout>
    <Helmet>
      <title>Basic Face To Face</title>
      <meta name="description" content="Elements Page" />
    </Helmet>

    <div id="main" className="basic-level">
      <div className='row'>
        <div className="col-12 col-12-medium">
          <div className="line-title-unique"></div>
          <div className="main-basic">
            <div className="number-page-unique">02</div>
            <div className="title-basic-unique">Nivel Especializado</div>
          </div>
          <div className='container-especialized'>
            <div className='row'>
              <div className="col-4 col-12-medium">
                <img className='img-section-especialized-objetives' src={Ilustration} />
              </div>
              <div className="col-8 col-12-medium">
                <div className="container-grid-especialized">
                  <span className="title-grid">Objetivos</span>
                  <div className="wrapper-especilized">
                    <div>
                      <img src={Cuadro1} />
                      <span>Reforzar y desarrollar competencias digitales</span>
                    </div>
                    <div>
                      <img src={Cuadro2} />
                      <span>Adquirir conocimientos en Salud Digital</span>
                    </div>
                    <div>
                      <img src={Cuadro3} />
                      <span>Entender y controlar las TICs</span>
                    </div>
                    <div>
                      <img src={Cuadro4} />
                      <span>
                        Poner en práctica los beneficios que aportan las competencias
                        digitales
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <FooterNavigation
      left={"/especialized-two"}
      right={"/especialized-four"}
    />
  </Layout>
);

export default EspecializedThree;
