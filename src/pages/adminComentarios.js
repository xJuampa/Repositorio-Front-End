import React from "react";
import Table from "react-bootstrap/Table";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import ItemListaComentarios from "../components/itemListaComentarios";
import NavegacionLateral from "../components/NavLateral";
import { Logueo } from "../helpers/Validaciones";

function AdminComentarios(){
  Logueo()
    const [listaComentarios, setListaComentarios] = useState([])
  const URL = "http://localhost:4003/admComentarios/";

  useEffect(() => {
    consultaApiComentarios();
  }, []);

  const consultaApiComentarios = async () => {
    try {
      const respuesta = await fetch(URL, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const dato = await respuesta.json();
      setListaComentarios(dato);
    } catch (error) {
      console.log(error);
    }
  };
    return(
        <>
    <div className="ColorFondoAdm"> 
   
    <div className="ContenedorAdmin ">
    <div className="moverBarraLateral" style={{ order: 1, flexDirection: 'row' }} >
      <NavegacionLateral />
    </div>
    <div className="moverLista" style={{ order: 2 }}>
    <div className="table-responsive Listado" >
  <Table className="table table-striped">
      
      <thead>
        <tr>
          <th >Nombre Cliente</th>
          <th>Email</th>
          <th>Telefono</th>
          <th >Comentario</th>
          <th>Opciones</th>
        </tr>
      </thead>
      {listaComentarios.map((items) => (
        <ItemListaComentarios
          consultaApiComentarios={consultaApiComentarios}
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

export default AdminComentarios