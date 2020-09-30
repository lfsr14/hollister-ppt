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
            <div className="row"></div>
            <div className="row">
              <div className="col-12 container-especialized container-faculity">
                <div className="row">
                  <div className="col-4 col-12-medium"></div>
                  <div className="col-8 col-12-medium">
                    <span className="title-bibliograph">Bibliografia</span>
                    <div className="container-faculty">
                      <ol className="bibliograph-list">
                        <li>
                          Montero Delgado JA, Merino Alonso FJ, Monte Boquet E,
                          Ávila de Tomás JF, Cepeda Díez JM. Competencias
                          digitales clave de los profesionales sanitarios. Key
                          digital skills for healthcare professionals. Educacion
                          Medica. 2019;
                        </li>
                        <li>
                          Montero Delgado JCDJADJ. Las 6 competencias digitales
                          de los profesionales sanitarios [Internet]. Farmacia
                          Hospitalaria Digital, editor. 2019 [cited 2020 Mar
                          31]. Available from:
                          https://www.researchgate.net/publication/330764348_Las_6_competencias_digitales_de_los_
                          profesionales_sanitarios
                        </li>
                        <li>
                          Ferrari A, Punie Y, Brečko BN. DIGCOMP: A Framework
                          for Developing and Understanding Digital Competence in
                          Europe [Internet]. Spain; 2013 [cited 2020 Mar 30].
                          Available from: http://europa.eu/.
                        </li>
                        <li>
                          Arandojo Morales M. e-nfermería. Las nuevas
                          tecnologías al servicio de la Enfermería del siglo
                          XXI. Revista Tesela [Internet]. 2018 [cited 2020 Mar
                          24];23. Available from:
                          http://www.index-f.com/tesela/ts23/ts11612.php
                        </li>
                        <li>
                          Choque Larraurri R. Las nuevas competencias TIC en el
                          personal de los servicios de salud - Dialnet. Revista
                          de Comunicación y Salud: RCyS [Internet]. 2011 [cited
                          2020 Mar 30];1(2):47–60. Available from:
                          https://dialnet.unirioja.es/servlet/articulo?codigo=3817721
                        </li>
                        <li>
                          Fernández ValdésI MZMRUGP. Normas de competencias
                          informacionales para el Sistema Nacional de
                          Información en Salud. Rev ACIMED [Internet]. 2008
                          [cited 2020 Mar 30];17(4). Available from:
                          http://scielo.sld.cu/scielo.php?script=sci_arttext&pid=S1024-
                          94352008000400003
                        </li>
                        <li>
                          Westra BL, Delaney CW. Informatics Competencies for
                          Nursing and Healthcare Leaders. 2008.
                        </li>
                        <li>
                          HIMSS. TIGER Initiative for Technology and Health
                          Informatics Education [Internet]. [cited 2020 Mar 30].
                          Available from:
                          https://www.himss.org/tiger-initiative-technology-and-health-informatics-education
                        </li>
                      </ol>
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
      left={"/especialized-six"}
      right={"/especialized-seven"}
    />
  </Layout>
);

export default EspecializedThree;
