import React from "react";
import { Helmet } from "react-helmet";
import Layout from "../components/layout";
import "../assets/scss/stylebasiclevel.scss";
import Ilustration from "../images/especialized-one/ilustracion.png";
import ViewVideo from "../images/especialized-one/view-video.png";
import Cuadro1 from "../images/especialized-one/cuadro01.png";
import Cuadro2 from "../images/especialized-one/cuadro02.png";
import Cuadro3 from "../images/especialized-one/cuadro03.png";

import FooterNavigation from "../components/FooterNavigation";

const EspecializedOne = (props) => (
  <Layout>
    <Helmet>
      <title>Basic Face To Face</title>
      <meta name="description" content="Elements Page" />
    </Helmet>

    <div id="main" className="basic-level">
      <div className='row'>
        <div className="col-12 col-12-medium">
          <div className="line-title"></div>
          <div className="main-basic">
            <div className="number-page">02</div>
            <div className="title-basic">Nivel Especializado</div>
          </div>
          <div className="container-especialized row">
            <div className="col-8 col-12-medium">
              <div className="online-especialized">
                Programa de desarrollo de{" "}
                <span>Competencias Digitales para profesionales de la salud</span>
              </div>
              <div className="border-title-especilized">
                <div className="view-video">
                  <img src={ViewVideo} />
                </div>
              </div>
            </div>
            <div className="col-4 col-12-medium col-img">
              <img src={Ilustration} />
            </div>
          </div>
          <div className="container-imgs-especialized col-12 containers-cards">
            <div>
              <img src={Cuadro1} />
            </div>
            <div>
              <img src={Cuadro2} />
            </div>
            <div>
              <img src={Cuadro3} />
            </div>
          </div>
        </div>
      </div>
    </div>
    <FooterNavigation
        left={"/basic-scholarships"}
        right={"/especialized-two"}
      />
  </Layout>
);

export default EspecializedOne;
