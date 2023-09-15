import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
  return (
    <div className="error-page">
      <div className="error-background"></div>
      <div className="error-content">
      
        <h1 className="error-title">¡Oops! Página no encontrada</h1>
        <p className="error-message">
          Lo sentimos, la página que estás buscando no existe.
        </p>
        <Link to="/" className="error-button">Volver al inicio</Link>
      </div>
    </div>
  );
};


export default Error;