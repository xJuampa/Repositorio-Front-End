import React from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

function ItemListaPlanes ({items,consultaApiPlanes}){
  const eliminarConsulta = () => {
    Swal.fire({
      title: "Quieres eliminar la consulta?",
      text: "Si aceptas, La consulta sera eliminada",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Acepto",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const URLDelete = "http://localhost:4009/admPlanes/" + items._id;
          const respuesta = await fetch(URLDelete, {
            method: "DELETE",
            headers: {
              "Content-Type": "application/json",
            },
          });
          if (respuesta.status === 200) {
            Swal.fire(
              "Eliminado!",
              "El elemento fue eliminado con exito!",
              "success"
            );
            consultaApiPlanes();
          }else{
            Swal.fire(
              "Fallo el proceso!",
              "El elemento no pudo ser eliminado!",
              "danger"
            );
          }
        } catch (error) {
          console.log(error)
        }
      }
    });
  };
    return (
      <tbody>
      <tr >
        <td>{items.nombreCliente}</td>
        <td>{items.MailCliente}</td>
        <td>{items.telefonoCliente}</td>
        <td >{items.Descripcion}</td>
          <Link className="btn btn-danger"  onClick={eliminarConsulta}>
            Borrar
          </Link>
      </tr>
      </tbody>
      

    )
}

export default ItemListaPlanes