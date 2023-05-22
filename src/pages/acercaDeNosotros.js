import React from 'react';


const AcercaDeNosotros = () => {
    return (
      <div className="about-page">
        <h1>Acerca de nosotros</h1>
        <div className="members-container">
          <div className="member-card">
            <img src="../imagenes/background.png" alt="Miembro 1" />
            <h2>Francisco Escobar</h2>
            <p>Estudiante RollingCode</p>
          </div>
          <div className="member-card">
            <img src="https://www.dogalize.com/wp-content/uploads/2017/06/La-sverminazione-e-la-pulizia-del-cucciolo-del-cane-2-800x400-800x400.jpg" alt="Miembro 2" />
            <h2>Juan Martin Alderete</h2>
            <p>Estudiante RollingCode</p>
          </div>
          <div className="member-card">
            <img src="../imagenes/JuanMartin.jpeg" alt="Miembro 3" />
            <h2>Constanza Araoz</h2>
            <p>Estudiante RollingCode</p>
          </div>
          <div className="member-card">
            <img src="ruta-imagen-4.jpg" alt="Miembro 4" />
            <h2>Juan Pablo Moya</h2>
            <p>Estudiante RollingCode</p>
          </div>
        </div>
      </div>
    );
  };

export default AcercaDeNosotros;