import React from 'react';
import { FaInstagram, FaFacebook, FaWhatsapp } from 'react-icons/fa';

const AcercaDeNosotros = () => {
    return (
      <div className="about-page">
      <div className="image-container">
        <img src={require('../imagenes/dalePatita2.jpg')} alt="Imagen" />

      </div>
      <div className="title_desc">
                   <h1>Acerca de nosotros</h1>
                <p>Amamos los animales. Amamos lo que hacemos...</p>
           </div>
        <div className="members-container">
          <div className="member-card">
          <img src={require('../imagenes/Fran.jpeg')} alt="Miembro 1" />
            <h2>Francisco Escobar</h2>
            <p>Estudiante RollingCode</p>
            <div className="social-icons">
            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
            <a href="https://www.facebook.com/fran.escobar.96" target="_blank" rel="noopener noreferrer">
              <FaFacebook />
            </a>
            <a href="https://wa.me/+5493814629507" target="_blank" rel="noopener noreferrer">
              <FaWhatsapp />
            </a>
          </div>
          </div>
          <div className="member-card">
          <img src={require('../imagenes/JuanMartin.jpeg')} alt="Miembro 2" />
            <h2>Juan Martin Alderete</h2>
            <p>Estudiante RollingCode</p>
            <div className="social-icons">
            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
            <a href="https://www.facebook.com/juanmartin.alderete.31" target="_blank" rel="noopener noreferrer">
              <FaFacebook />
            </a>
            <a href="https://wa.me/+5493815890985" target="_blank" rel="noopener noreferrer">
              <FaWhatsapp />
            </a>
          </div>
          </div>
          <div className="member-card">
          <img src={require('../imagenes/Coty.jpeg')} alt="Miembro 3" />
            <h2>Constanza Araoz</h2>
            <p>Estudiante RollingCode</p>
            <div className="social-icons">
            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
            <a href="https://www.facebook.com/conyy.araoz" target="_blank" rel="noopener noreferrer">
              <FaFacebook />
            </a>
            <a href="https://wa.me/+5493815396400" target="_blank" rel="noopener noreferrer">
              <FaWhatsapp />
            </a>
          </div>
          </div>
          <div className="member-card">
          <img src={require('../imagenes/juanmoya.jpg')} alt="Miembro 4" />
            <h2>Juan Pablo Moya</h2>
            <p>Estudiante RollingCode</p>
            <div className="social-icons">
            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
            <a href="https://www.facebook.com/p/Juan-Moya-100007679315705/" target="_blank" rel="noopener noreferrer">
              <FaFacebook />
            </a>
            <a href="https://wa.me/+5493814795915" target="_blank" rel="noopener noreferrer">
              <FaWhatsapp />
            </a>
          </div>
          </div>
        </div>
      </div>
    );
  };

export default AcercaDeNosotros;