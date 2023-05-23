import React from 'react';
import { useState,useEffect } from 'react';
import CardPlanes from '../components/itemPlancard';

function VerPlanesPantalla(){
    const [listaDetallesPlanes , setListaDetallesPlanes ] = useState([])
  const URL = "http://localhost:4003/admPlanes/";

  useEffect(() => {
    consultaApiDetallesPlanes ();
  }, []);

  const consultaApiDetallesPlanes  = async () => {
    try {
      const respuesta = await fetch(URL, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const dato = await respuesta.json();
      setListaDetallesPlanes (dato);
    } catch (error) {
      console.log(error);
    }
  };
    return(
        <div className="about-page">
        <div className="title_desc">
                     <h1>Conocé nuestros planes</h1>
                  <p>Tenemos el Plan ideal Para vos y tu mascota!</p>
             </div>
          <div className="members-container">
          <div className="row">
              {listaDetallesPlanes.map((items) => (
                <CardPlanes items={items} key={items._id} />
              ))}
            </div>
            
            
          </div>
        </div>
    )
}

export default VerPlanesPantalla