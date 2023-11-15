import React from 'react';
import Nav from 'react-bootstrap/Nav';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import logoblanco from '../imagenes/logoblanco.png';
import { SlSocialInstagram, SlSocialLinkedin, SlSocialFacebook, SlSocialTwitter} from "react-icons/sl";
function Footer(){
    return(
        <MDBFooter bgColor='dark' className='text-center text-lg-start text-muted'>
      <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
        <div>
          <a href='https://www.facebook.com/' className='me-4 text-reset'>
            <MDBIcon fab icon="facebook-f" />
          </a>
          <a href='https://twitter.com/' className='me-4 text-reset'>
            <MDBIcon fab icon="twitter" />
          </a>
          <a href='https://google.com/' className='me-4 text-reset'>
            <MDBIcon fab icon="google" />
          </a>
          <a href='https://instagram.com/' className='me-4 text-reset'>
            <MDBIcon fab icon="instagram" />
          </a>
          <a href='https://linkeid.com' className='me-4 text-reset'>
            <MDBIcon fab icon="linkedin" />
          </a>
          <a href='https://github.com/' className='me-4 text-reset'>
            <MDBIcon fab icon="github" />
          </a>
        </div>
      </section>

      <section className=''>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
            <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>

            <img className='logoF' src={logoblanco} alt='logo'/>
              <p>
                "La medicina cura al hombre, la medicina veterinaria cura a la humanidad."
              </p>
            </MDBCol>



            <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Contactanos</h6>
              <p
                 className='text-reset'>
                Av. Belgrano 3689, San Miguel de Tucuman, 4000
                
              </p>
              <p
                 className='text-reset'>
                +54 3815648522
               
              </p>
              <p
                className='text-reset'>
                vetrolling@gmail.com.ar
                
              </p>
              

            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Seguinos en nuestras redes</h6>
            <div className='redesf'>
                <a href='https://instagram.com/'><SlSocialInstagram/></a>
                <a href='https://linkedin.com/'><SlSocialLinkedin/></a>
                <a href='https://facebook.com/'><SlSocialFacebook/></a> 
                <a href='https://twitter.com/'><SlSocialTwitter/></a>
            </div>
            <Nav.Link href="/agregarComentario">Dejanos tu comentario!</Nav.Link>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © 2023 Copyright
      </div>
    </MDBFooter>
    )
}
export default Footer
