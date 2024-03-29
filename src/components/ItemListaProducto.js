import React from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { IoMdCreate,IoMdTrash } from "react-icons/io";

function ItemListaProducto ({items, consultaApiProductos}){

    const eliminarObjetos = () => {
        Swal.fire({
          title: "Quieres eliminar el producto?",
          text: "Si aceptas, el producto será eliminado",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Acepto",
        }).then(async (result) => {
          if (result.isConfirmed) {
            try {
              const URLDelete = "http://localhost:4003/admProductos/" + items._id;
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
                consultaApiProductos();
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
    return(
        <tbody>
      <tr >
        <td><img src={items.imgProducto} alt={items.nombreProducto} className="tamañoImagenProducto"/></td>
        <td>{items.nombreProducto}</td>
        <td>{items.precioProducto}</td>
        <td>{items.marcaProducto}</td>
        <Link to={`/editarProducto/${items._id}`}  className="btn btn-outline-warning m-1"><IoMdCreate/>
          </Link>
          <Link className="btn btn-outline-danger m-1" onClick={() => eliminarObjetos()} ><IoMdTrash/>
          </Link>
      </tr>
      </tbody>
    )
}
export default ItemListaProducto