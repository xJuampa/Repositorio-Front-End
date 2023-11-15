import React from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { IoMdTrash } from "react-icons/io";
import moment from "moment";
import "react-datepicker/dist/react-datepicker.css"; 

function ItemListaTurno({ items, consultaApiTurnos }) {
  const eliminarObjetos = () => {
    
Swal.fire
({
      title: "Quieres eliminar el turno?",
      text: "Si aceptas, el turno será eliminado",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Acepto",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const URLDelete = "http://localhost:4003/admTurnos/" + items._id;
          const respuesta = await fetch(URLDelete, {
            method: "DELETE",
            headers: {
              "Content-Type": "application/json",
            },
          });
          if (respuesta.status === 200) {
            
Swal.fire
(
              "Eliminado!",
              "El elemento fue eliminado con exito!",
              "success"
            );
            consultaApiTurnos();
          } else {
            
Swal.fire
(
              "Fallo el proceso!",
              "El elemento no pudo ser eliminado!",
              "danger"
            );
          }
        } catch (error) {
          console.log(error);
        }
      }
    });
  };
  const formattedDate = moment(items.fechaYHora).format("YYYY-MM-DD HH:mm");

  return (
    <tbody>
      <tr>
        <td>
          {items.nombreDueño}({items.telefonoContacto})
        </td>
        <td>{items.especieMascota}</td>
        <td>{items.servicio}</td>
        <td>{formattedDate}</td> 
        <td>{items.veterinarioNombre}</td>
        <Link className="btn btn-outline-danger m-1" onClick={eliminarObjetos}>
          <IoMdTrash />
        </Link>
      </tr>
    </tbody>
  );
}

export default ItemListaTurno; 