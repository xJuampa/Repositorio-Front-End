import React from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

function ItemListaComentarios ({items,consultaApiComentarios}){
  const eliminarComentario = () => {
    Swal.fire({
      title: "Quieres eliminar el comentario?",
      text: "Si aceptas, el comentario sera eliminada",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Acepto",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const URLDelete = "http://localhost:4003/admComentarios/" + items._id;
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
            consultaApiComentarios();
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
        <td>{items.nombreComentario}</td>
        <td>{items.emailComentario}</td>
        <td>{items.telefonoComentario}</td>
        <td >{items.descripcionComentario}</td>
          <Link className="btn btn-danger"  onClick={eliminarComentario}>
            Borrar
          </Link>
      </tr>
      </tbody>
      

    )
}

export default ItemListaComentarios