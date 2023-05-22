import React from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { IoMdCreate,IoMdTrash } from "react-icons/io";

function ItemLista ({items, consultaApiPacientes}){

  const eliminarPaciente =()=>{
    Swal.fire({
      title: "Quieres eliminar el Paciente?",
      text: "Si aceptas, el Paciente será eliminado",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Acepto",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const URLDelete = "http://localhost:4003/admPacientes/" + items._id;
          const respuesta = await fetch(URLDelete, {
            method: "DELETE",
            headers: {
              "Content-Type": "application/json",
            },
          });
          if (respuesta.status === 200) {
            Swal.fire(
              "Eliminado!",
              "El Paciente fue eliminado con exito!",
              "success"
            );
            consultaApiPacientes();
          }else{
            Swal.fire(
              "Fallo el proceso!",
              "El Paciente no pudo ser eliminado!",
              "danger"
            );
          }
        } catch (error) {
          console.log(error)
        }
      }
    });
  }

    return(
      <tbody>
     
      <tr>
        <td>{items.nombrePaciente} {items.apellidoPaciente}</td>
        <td >{items.emailPaciente}</td>
        <td >{items.telefonoPaciente}</td>
        <td>{items.especieMascota}({items.razaMascota})</td>
        <td>{items.nombreMascota}</td>
        <Link to={`/editarPaciente/${items._id}`}  className="btn btn-outline-warning m-1"><IoMdCreate/>
            
          </Link>
          <Link className="btn btn-outline-danger m-1" onClick={eliminarPaciente} ><IoMdTrash/>
        
          </Link>
      </tr>
      </tbody>
    )
}
export default ItemLista