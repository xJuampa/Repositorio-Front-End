import React from "react";
import Table from "react-bootstrap/Table";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import ItemListaPlanes from "../components/ItemListaPlanes";
import NavegacionLateral from "../components/NavLateral";
import NavBar from "../components/NavBar"
import Footer from "../components/Footer"
import { Logueo } from "../helpers/Validaciones";

function AdminPlanes() {
  Logueo()
  const [listaPlanes, setListaPlanes] = useState([])
  const URL = "http://localhost:4003/admConsulta/";

  useEffect(() => {
    consultaApiPlanes();
  }, []);

  const consultaApiPlanes = async () => {
    try {
      const respuesta = await fetch(URL, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const dato = await respuesta.json();
      setListaPlanes(dato);
    } catch (error) {
      console.log(error);
    }
  };
  

  return (
    <>
    <div className="ColorFondoAdm"> 
   
    <div className="ContenedorAdmin ">
    <div className="moverBarraLateral" >
      <NavegacionLateral />
    </div>
    <div className="moverLista">
    <div className="Listado" >
    
  <Table responsive>
      
      <thead>
        <tr>
          <th >Nombre Cliente</th>
          <th>Email</th>
          <th>Telefono</th>
          <th >Descripcion</th>
        </tr>
      </thead>
      {listaPlanes.map((items) => (
        <ItemListaPlanes
          consultaApiPlanes={consultaApiPlanes}
          items={items}
          key={items._id}
        />
      ))}
    </Table>

    </div>
    </div>
    
    </div>


    </div>
  </>
  );
}

export default AdminPlanes;
