import React from "react";
import Table from "react-bootstrap/Table";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import NavegacionLateral from "../components/NavLateral";
import ItemListaTurno from "../components/ItemListaTurnos";
import { Logueo } from "../helpers/Validaciones";

function TurnoAdmin () {
  
  Logueo()

    const [listaTurnos, setListaTurnos] = useState([]);
    const URL = "http://localhost:4003/admTurnos/" ;

    useEffect(() => {
        consultaApiTurnos();
      }, []);

    const consultaApiTurnos = async()=>{
        try {
            const respuesta=await fetch(URL,{
                method: "GET",
                headers: {
                  "Content-Type": "application/json",
                },
              })
            const dato= await respuesta.json()
            setListaTurnos(dato)
            
        } catch (error) {
            console.log(error)
            
        }

    }

    return(
        <>
        <div className="ColorFondoAdm"> 

        <div className="ContenedorAdmin ">
        <div className="moverBarraLateral" style={{ order: 1, flexDirection: 'row' }} >
          <NavegacionLateral />
        </div>
        <div className="moverLista" style={{ order: 2 }}>
        <div  className= "table-responsive Listado">
        <Link
        to="/agregarTurno"
        className="btn btn-success d-flex m-5 justify-content-center"
      >
        Agregar Turno
      </Link>
      <Table>
          
          <thead>
            <tr>
              <th>Datos Dueño</th>
              <th>Mascota</th>   
              <th>Servicio</th>
              <th>Fecha y Hora</th>
              <th>Veterinario</th>
            </tr>
          </thead>
          {listaTurnos.map((items) => (
        <ItemListaTurno
          consultaApiTurnos={consultaApiTurnos}
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

export default TurnoAdmin