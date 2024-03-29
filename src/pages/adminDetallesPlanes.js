import React from "react";
import Table from "react-bootstrap/Table";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import ItemListaDetallesPlanes from "../components/itemsDetallesPlanes";
import NavegacionLateral from "../components/NavLateral";
import { Logueo } from "../helpers/Validaciones";

function AdminDetallesPlanes(){
  Logueo()
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
        <>
    <div className="ColorFondoAdm"> 
   
    <div className="ContenedorAdmin ">
    <div className="moverBarraLateral" style={{ order: 1, flexDirection: 'row' }}>
      <NavegacionLateral />
    </div>
    <div className="moverLista" style={{ order: 2 }}>
    <div className=" table-responsive Listado" >
    <Link
        to="/agregarPlan"
        className="btn btn-success d-flex m-5 justify-content-center"
      >
        Agregar Plan
      </Link>
      <Table className="table table-striped">
      
      <thead>
        <tr>
        <th>Imagen</th>
          <th >Titulo</th>
          <th>Subtitulo</th>
          <th>Precio</th>
          <th>Opciones</th>
        </tr>
      </thead>
      {listaDetallesPlanes.map((items) => (
        <ItemListaDetallesPlanes
          consultaApiDetallesPlanes={consultaApiDetallesPlanes}
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
    )
}

export default AdminDetallesPlanes 