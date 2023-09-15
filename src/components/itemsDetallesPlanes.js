import React from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { IoMdCreate,IoMdTrash } from "react-icons/io";

function ItemListaDetallesPlanes ({items,consultaApiDetallesPlanes}){
  const eliminarDetallesPlanes = () => {
    Swal.fire({
      title: "Quieres eliminar el Plan?",
      text: "Si aceptas,el Plan sera eliminada",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Acepto",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const URLDelete = "http://localhost:4003/admPlanes/" + items._id;
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
            consultaApiDetallesPlanes();
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
        <td> <img src={items.imgPlan} alt={items.tituloPlan} className="tamañoImagenProducto" /> </td>
        <td>{items.tituloPlan}</td>
        <td>{items.subtituloPlan}</td>
        <td >{items.precioPlan}</td>
        <Link to={`/editarPlan/${items._id}`}  className="btn btn-outline-warning m-1"><IoMdCreate/>
          </Link>
          <Link className="btn btn-outline-danger m-1"  onClick={eliminarDetallesPlanes}><IoMdTrash/>
          </Link>
      </tr>
      </tbody>
      

    )
}

export default ItemListaDetallesPlanes