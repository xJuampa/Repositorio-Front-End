import React from "react";
import Table from "react-bootstrap/Table";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import ItemListaPlanes from "../components/ItemListaPlanes";
import NavegacionLateral from "../components/NavLateral";

function AdminPlanes (){
const [listaPlanes, setListaPlanes] = useState ([])
const URL = "http://localhost:4003/ConsultaPlanes";

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
    <div className="ContenedorAdmin ">
    <div className="moverBarraLateral" >
      <NavegacionLateral />
    </div>
    <div className="moverLista">
    <div className="Listado" >
    <Link
    to="/agregarPaciente"
    className="btn btn-success d-flex m-5 justify-content-center"
  >
    Agregar Paciente
  </Link>
  <Table>
      
      <thead>
        <tr>
          <th>Nombre y Apellido</th>
          <th>Email</th>
          <th>Telefono</th>
          <th>Descripcion</th>
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

    
    
  </>

);

}


export default AdminPlanes