import React from "react";
import { Helmet } from "react-helmet";
import Layout from "../components/layout";
import "../assets/scss/stylebasiclevel.scss";
import SecctionImg from "../images/especialized-one/nombre_02.png";
import Course1 from "../images/courses-content/curso01.png";
import Couser2 from "../images/courses-content/curso02.png";
import Couser3 from "../images/courses-content/curso03.png";
import Couser4 from "../images/courses-content/curso04.png";
import Couser5 from "../images/courses-content/curso05.png";
import Couser6 from "../images/courses-content/curso06.png";

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
                    <div className="container-course-contetnt">
                      <ul>
                        <li>
                          <div className="container-img-course-content">
                            <img src={Course1} />
                          </div>
                        </li>
                        <li>
                          <div className="container-img-course-content">
                            <img src={Couser2} />
                          </div>
                        </li>
                        <li>
                          <div className="container-img-course-content">
                            <img src={Couser3} />
                          </div>
                        </li>
                        <li>
                          <div className="container-img-course-content">
                            <img src={Couser4} />
                          </div>
                        </li>
                        <li >
                          <div className="container-img-course-content">
                            <img src={Couser5} />
                          </div>
                        </li>
                        <li >
                          <div className="container-img-course-content">
                            <img src={Couser6} />
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
