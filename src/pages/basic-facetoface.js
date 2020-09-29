import React from "react";
import { Helmet } from "react-helmet";
import Layout from "../components/layout";
import "../assets/scss/stylebasiclevel.scss";
import Img09 from '../images/09.png'
import FooterNavigation from "../components/FooterNavigation";

const BasicFaceToFace = (props) => (
  <Layout>
    <Helmet>
      <title>Basic Face To Face</title>
      <meta name="description" content="Elements Page" />
    </Helmet>

    <div id="main" className="basic-level">
      <div className="backfgraund-withe col-8 col-12-medium">
        <div className="line-title"></div>
        <div className="main-basic">
          <div className="number-page">01</div>
          <div className="title-basic">Nivel Básico</div>
        </div>
        <div className="online-becas">
          <span>Online</span>
          <div>Becas en</div>
        </div>
        <div className="border-title-bottom">
          <div className='more-info'>+ info</div>
        </div>

        <div className="wrapper">
          <div className="one">
            <span className="title-card">01</span>
            <div className="description-card">
              Comunicación y difusión de información digital en salud
            </div>
          </div>
          <div className="two">
            <span className="title-card">02</span>
            <div className="description-card">
              Diseño y producción de contenidos digitales en salud.
            </div>
          </div>
          <div className="three">
            <span className="title-card">03</span>
            <div className="description-card">
              La identidad, reputación online e influencia digital en salud.
            </div>
          </div>
          <div className="four">
            <span className="title-card">04</span>
            <div className="description-card">
              Comunicación y difusión de información digital en salud
            </div>
          </div>
          <div className="five">
            <span className="title-card">05</span>
            <div className="description-card">
              Enfermería digital en la práctica asistencial.
              <div>(3 cursos)</div>
            </div>
          </div>
          <div className="hours-desciption-1">
            <span className="hours-card">Créditos: 4,7 | Horas: 22</span>
          </div>
          <div className="hours-desciption-2">
            <span className="hours-card">Créditos: 4,7 | Horas: 22</span>
          </div>
          <div className="hours-desciption-3">
            <span className="hours-card">Créditos: 4,7 | Horas: 22</span>
          </div>
          <div className="hours-desciption-4">
            <span className="hours-card">Créditos: 4,7 | Horas: 22</span>
          </div>
          <div className="hours-desciption-5">
            <span className="hours-card">Créditos: 14,1 | Horas: 22</span>
          </div>
          <div className="six">
            <span className="title-card">06</span>
            <div className="description-card">
              La salud digital en la sociedad del conocimiento.
            </div>
          </div>
          <div className="seven">
            <span className="title-card">07</span>
            <div className="description-card">
              Herramientas digitales en investigación enfermera.
              <div>(3 cursos)</div>
            </div>
          </div>
          <div className="eithg">
            <span className="title-card">08</span>
            <div className="description-card">
              Cursos de búsqueda de información digital en salud.
            </div>
          </div>
          <div className="nine">
            <span className="title-card">09</span>
            <div className="description-card">
              Recopilación y almacenamiento de información digital en salud.
            </div>
          </div>
          <div className="ten">
            <span className="title-card">10</span>
            <div className="description-card">
              Productividad digital y trabajo colaborativo en salud.
            </div>
          </div>
          <div className="hours-desciption-6">
            <span className="hours-card">Créditos: 4,7 | Horas: 22</span>
          </div>
          <div className="hours-desciption-7">
            <span className="hours-card">Créditos: 14,1 | Horas: 22</span>
          </div>
          <div className="hours-desciption-8">
            <span className="hours-card">Créditos: 4,7 | Horas: 22</span>
          </div>
          <div className="hours-desciption-9">
            <span className="hours-card">Créditos: 4,7 | Horas: 22</span>
          </div>
          <div className="hours-desciption-10">
            <span className="hours-card">Créditos: 4,7 | Horas: 22</span>
          </div>
        </div>
      </div>
      <div className="col-4 col-12-medium container-img">
        <img src={Img09} />
      </div>
    </div>
    <FooterNavigation
      left={"/basic-facetoface"}
      right={"/basic-scholarships"}
    />
  </Layout>
);

export default BasicFaceToFace;
