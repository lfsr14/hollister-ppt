import React from "react";
import { Helmet } from "react-helmet";
import Layout from "../components/layout";
import PDFIcon from '../images/pdf-ico.png'
import PDF01 from '../assets/pdfs/Salud_digital_Nivel_Basico.pdf'
import PDF02 from '../assets/pdfs/Salud_digital_Nivel_Avanzado.pdf'
import PDF03 from '../assets/pdfs/Salud_digital_Nivel_Especializado.pdf'
import PDF04 from '../assets/pdfs/Salud_digital_Foro_de_Urologia.pdf'

const Documentation = (props) => (
  <Layout>
    <Helmet>
      <title>Documentación</title>
      <meta name="description" content="Elements Page" />
    </Helmet>
    <div id="main" className="basic-level">
      <div className='row'>
        <div className="col-12 col-12-medium">
          <div className='container-documentation'>
            <div className='documentation-title'>
              <div className='line-top-documentation'></div>
              <div className='line-left-documentation'></div>
              <div className='container-text-documentation'>Documentación</div>
            </div>
          </div>
          <div className='container-list-pdfs'>
            <div className='pdf-title'>
              <DownloadLink
                src={PDF01}
              >
                <img src={PDFIcon} />
                <div>
                  Salud digital Nivel Basico
                </div>
              </DownloadLink>
            </div>
            <div className='pdf-title'>
              <DownloadLink
                src={PDF02}
              >
                <img src={PDFIcon} />
                <div>
                  Salud digital Nivel Avanzado
                </div>
              </DownloadLink>
            </div>
            <div className='pdf-title'>
              <DownloadLink
                  src={PDF03}
              >
                <img src={PDFIcon} />
                <div>
                  Salud digital Nivel Especializado
                </div>
              </DownloadLink>
            </div>
            <div className='pdf-title'>
              <DownloadLink
                  src={PDF04}
              >
                <img src={PDFIcon} />
                <div>
                  Foro de Urología
                </div>
              </DownloadLink>
            </div>
          </div>
          <div className='footer-pdfs'></div>
        </div>
      </div>
    </div>
  </Layout>
);
  
class DownloadLink extends React.Component {
  render() {
      return (
          <a href={this.props.src} download>{this.props.children}</a>
      )
  }
}

  export default Documentation;