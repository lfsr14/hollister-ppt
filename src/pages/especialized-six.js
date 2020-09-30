import React from "react";
import { Helmet } from "react-helmet";
import Layout from "../components/layout";
import "../assets/scss/stylebasiclevel.scss";
import SecctionImg from "../images/especialized-one/nombre_02.png";
import Faculty1 from "../images/faculty/profesor01.png";
import Faculty2 from "../images/faculty/profesor02.png";
import Faculty3 from "../images/faculty/profesor03.png";
import Faculty4 from "../images/faculty/profesor04.png";
import Faculty5 from "../images/faculty/profesor05.png";
import Faculty6 from "../images/faculty/profesor06.png";
import Faculty7 from "../images/faculty/profesor07.png";
import Faculty8 from "../images/faculty/profesor08.png";
import Faculty9 from "../images/faculty/profesor09.png";

import FooterNavigation from "../components/FooterNavigation";

const EspecializedThree = (props) => (
  <Layout>
    <Helmet>
      <title>Basic Face To Face</title>
      <meta name="description" content="Elements Page" />
    </Helmet>

    <div id="main" className="basic-level">
      <div className="row">
        <div className="col-12 col-12-medium">
          <div className="main-basic">
            <img src={SecctionImg} />
          </div>
          <div className="container-especialized-method">
            <div className="row">
              <div className="container-title-method col-12 col-12-medium">
                <span className="">Cursos y contenidos</span>
              </div>
            </div>
            <div className="row">
              <div className="col-12 container-especialized container-faculity">
                <div className="row">
                  <div className="col-12 col-12-medium">
                    <div className="container-faculty">
                      <ul>
                        <li className="empty-card-faculity">
                          <div>
                            <div className='title-name'>Blanca Fernández Lasquetty Blanc</div>

                            <div className="description-name">
                              Enfermera. Doctora. Secretaria de la Asociación
                              Nacional de Directivos de Enfermería (ANDE) y
                              Coordinadora del Área 2.0.
                            </div>
                          </div>
                        </li>
                        <li className="non-empty">
                          <div className="container-img-faculty">
                            <img src={Faculty2} />
                          </div>
                          <div className="name-faculty">
                            <span>José Ma Antequera</span>
                          </div>
                        </li>
                        <li className="non-empty">
                          <div className="container-img-faculty">
                            <img src={Faculty3} />
                          </div>
                          <div className="name-faculty">
                            <span>José Ma Cepeda</span>
                          </div>
                        </li>
                        <li className="non-empty">
                          <div className="container-img-faculty">
                            <img src={Faculty4} />
                          </div>
                          <div className="name-faculty">
                            <span>Pedro Soriano</span>
                          </div>
                        </li>
                        <li className="non-empty">
                          <div className="container-img-faculty">
                            <img src={Faculty5} />
                          </div>
                          <div className="name-faculty">
                            <span>Paloma Calleja</span>
                          </div>
                        </li>
                      </ul>

                      <ul>
                        <li className="non-empty">
                          <div className="container-img-faculty">
                            <img src={Faculty6} />
                          </div>
                          <div className="name-faculty">
                            <span>José Ma Antequera</span>
                          </div>
                        </li>
                        <li className="non-empty">
                          <div className="container-img-faculty">
                            <img src={Faculty7} />
                          </div>
                          <div className="name-faculty">
                            <span>José Ma Cepeda</span>
                          </div>
                        </li>
                        <li className="non-empty">
                          <div className="container-img-faculty">
                            <img src={Faculty8} />
                          </div>
                          <div className="name-faculty">
                            <span>Pedro Soriano</span>
                          </div>
                        </li>
                        <li className="non-empty">
                          <div className="container-img-faculty">
                            <img src={Faculty9} />
                          </div>
                          <div className="name-faculty">
                            <span>Paloma Calleja</span>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <FooterNavigation left={"/especialized-five"} right={"/especialized-seven"} />
  </Layout>
);

export default EspecializedThree;
