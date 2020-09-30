import React from "react";
import { Helmet } from "react-helmet";
import Layout from "../components/layout";
import "../assets/scss/stylebasiclevel.scss";
import Ilustration from "../images/especialized-four/ilustracion.png";
import Cuadro1 from "../images/especialized-four/ico_01.png";
import Cuadro2 from "../images/especialized-four/ico_02.png";
import Cuadro3 from "../images/especialized-four/ico_03.png";
import Cuadro4 from "../images/especialized-four/ico_04.png";
import Cuadro5 from "../images/especialized-four/ico_05.png";
import Cuadro6 from "../images/especialized-four/ico_06.png";
import FooterNavigation from "../components/FooterNavigation";
import SecctionImg from "../images/especialized-one/nombre_02.png";

const EspecializedThree = (props) => (
  <Layout>
    <Helmet>
      <title>Basic Face To Face</title>
      <meta name="description" content="Elements Page" />
    </Helmet>

    <div id="main" className="basic-level">
      <div className='row'>
        <div className="col-12 col-12-medium">
          <div className="main-basic">
            <img src={SecctionImg} />
          </div>
          <div className='container-especialized-method'>
            <div className='row'>
              <div className="container-title-method col-8 col-12-medium">
                <span className="title-grid">Metodologia</span>
              </div>
            </div>
            <div className='row'>

              <div className='col-12 container-especialized'>
                <div className='row'>
                  <div className="col-8 col-12-medium">
                    <div className="container-grid-especialized-three">
                      <div className="wrapper-especilized-four">
                        <div>
                          <img src={Cuadro1} />
                          <span>Vídeos explicativos</span>
                        </div>
                        <div>
                          <img src={Cuadro2} />
                          <span>Materiales descargables</span>
                        </div>
                        <div>
                          <img src={Cuadro3} />
                          <span>Links y herramientas</span>
                        </div>
                        <div>
                          <img src={Cuadro4} />
                          <span>Foro de discusión</span>
                        </div>
                        <div>
                          <img src={Cuadro5} />
                          <span>Tutorías mixtas</span>
                        </div>
                        <div>
                          <img src={Cuadro6} />
                          <span>Test y ejercicios</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-4 col-12-medium">
                    <img className='img-section-especialized-objetives' src={Ilustration} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <FooterNavigation
        left={"/especialized-three"}
        right={"/avanzado-uno"}
      />
  </Layout>
);

export default EspecializedThree;
