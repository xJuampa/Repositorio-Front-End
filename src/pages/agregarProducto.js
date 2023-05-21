import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Alert from "react-bootstrap/Alert";
import { largoInput, topePrecio} from "../helpers/Validaciones"
import Swal from "sweetalert2";

function AgregarProductos(){

    const [nombreProducto, setNombreProducto] = useState("");
    const [imgProducto, setImgProducto ] = useState("");
    const [precioProducto, setPrecioProducto] = useState(0);
    const [descripcionProducto, setDescripcionProducto ] = useState("");
    const [marcaProducto, setMarcaProducto ] = useState("");
    const [error, setError] = useState(false);
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      const URL = "http://localhost:4003/admProductos/";
  
      if (
        largoInput(nombreProducto) &&
        largoInput(marcaProducto) &&
        largoInput(descripcionProducto) &&
        largoInput(imgProducto) &&
        topePrecio(precioProducto) 
        
      ) {
        const nuevoProducto = {
          nombreProducto,
          precioProducto,
          imgProducto,
          descripcionProducto,
          marcaProducto
        };
  
        try {
          const options = {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(nuevoProducto),
          };
          const respuesta = await fetch(URL, options);
  
          if (respuesta.status ===201) {
            Swal.fire({
              position: "top-center",
              icon: "success",
              title: "Carga exitosa",
              showConfirmButton: false,
              timer: 1500,
            })
            e.target.reset();
          } else {
            Swal.fire({
              position: "top-center",
              icon: "warning",
              title: "Ocurrio un error",
              showConfirmButton: false,
              timer: 1500,
            });
          }
        } catch (error) {
          console.log(error);
        }
  
        setError(false);
      } else {
        setError(true);
      }
    };
  
    return (
      <>
      <div className="divGeneral">
      <div className="divForms">
        <Form onSubmit={handleSubmit} className="container">
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Nombre del producto</Form.Label>
            <Form.Control
              type="text"
              placeholder="Nombre del Producto"
              onChange={(e) => setNombreProducto(e.target.value)}
            />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Imagen del producto</Form.Label>
            <Form.Control
              type="url"
              placeholder="URL de la imagen"
              onChange={(e) => setImgProducto(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Precio del producto</Form.Label>
            <Form.Control
              type="namber"
              placeholder="Precio"
              onChange={(e) => setPrecioProducto(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Descripcion del producto</Form.Label>
            <Form.Control
              as="textarea"
               rows={3}
              placeholder="Descripcion de la imagen"
              onChange={(e) => setDescripcionProducto(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Marca del producto</Form.Label>
            <Form.Control
              type="text"
              placeholder="Marca de la imagen"
              onChange={(e) => setMarcaProducto(e.target.value)}
            />
          </Form.Group>
          
          
          {error === true ? (
            <Alert variant="danger">Corrobore los datos ingresados</Alert>
          ) : null}
  
          <Button variant="primary" type="submit">
            Enviar
          </Button>
        </Form>

        </div>
      </div>
        
      </>
    );
}
export default AgregarProductos