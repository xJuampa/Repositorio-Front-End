import React from "react";
import { useState, useEffect, useRef } from "react";
import { Form, Button } from "react-bootstrap";
import Alert from "react-bootstrap/Alert";
import { useParams, useNavigate } from "react-router-dom";
import { largoInput, topePrecio } from "../helpers/Validaciones";
import Swal from "sweetalert2";
import { Logueo } from "../helpers/Validaciones";

function EditarProducto (){
  Logueo()
    const { _id } = useParams();
    const [paramsProductos, setParamsProductos] = useState({});
    const URL = "http://localhost:4003/admProductos/"+_id;  
    const NombreProductoRef = useRef("");
    const ImgProductoRef = useRef("");
    const PrecioProductoRef = useRef(0);
    const DescripcionProductoRef = useRef("");
    const MarcaProductoRef = useRef("");
    const [error, setError] = useState(false);
  const navegacion = useNavigate()


    useEffect(() => {
        getProducto();
      }, [] );
      
        const getProducto= async()=>{
          try {
            const respuesta = await fetch(URL)
            const dato = await respuesta.json()
            setParamsProductos(dato)
          } catch (error) {
            console.log(error)
          }
        }

        const handleSubmit= async(e)=>{
            e.preventDefault();
      
            if (
              largoInput(NombreProductoRef.current.value) &&
            largoInput(ImgProductoRef.current.value) &&
            largoInput(DescripcionProductoRef.current.value) &&
            largoInput(MarcaProductoRef.current.value) &&
            topePrecio(PrecioProductoRef.current.value)
            ) {
              const editarProducto = {
                nombreProducto:NombreProductoRef.current.value,
              imgProducto:ImgProductoRef.current.value,
              precioProducto:PrecioProductoRef.current.value,
              descripcionProducto:DescripcionProductoRef.current.value,
              marcaProducto:MarcaProductoRef.current.value,
              };
              
        
              try {
                const resp = await fetch(URL,{
                  method:"PUT",
                  headers:{"Content-Type": "application/json"},
                  body:JSON.stringify(editarProducto)
                });
                setError(false)
                if (resp.status ===200) {
                    Swal.fire({
                      position: "top-center",
                      icon: "success",
                      title: "Edicion exitosa",
                      showConfirmButton: false,
                      timer: 1500,
                    })
                    getProducto()
                    
                    navegacion("/AdminProducto");
                  } else {
                    Swal.fire({
                      position: "top-center",
                      icon: "warning",
                      title: "Ocurrio un error",
                      showConfirmButton: false,
                      timer: 1500,
                    });}
              } catch (error) {
                console.log(error);
              }
            } else {
              setError(true);
            }
          }


    return(
        <>
        <div className="divGeneral">
      <div className="divForms">
          <Form  className="container" onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Nombre del producto</Form.Label>
            <Form.Control
            required minlength="3" maxlength="15"
              type="text"
              placeholder="Nombre del Producto"
              defaultValue={paramsProductos.nombreProducto}
              ref={NombreProductoRef}
              
            />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Imagen del producto</Form.Label>
            <div style={{display:"Flex"}}>
                <img src={ImgProductoRef.length > 0? ImgProductoRef: paramsProductos.imgProducto} className="tamañoImagenProducto" alt="" />
            <div  style={{justifyContent:"center", width:"90%"}}>
            <Form.Control
              type="url"
              rows={1}
              placeholder="URL de la imagen"
              defaultValue={paramsProductos.imgProducto}
              ref={ImgProductoRef}

              
            />
            </div>
            </div>
            
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Precio del producto</Form.Label>
            <Form.Control
            required minlength="1" maxlength="10"
              type="namber"
              placeholder="Precio"
              defaultValue={paramsProductos.precioProducto}
              ref={PrecioProductoRef}
              
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Descripcion del producto</Form.Label>
            <Form.Control
            required minlength="5" maxlength="100"
              as="textarea"
               rows={3}
              placeholder="Descripcion de la imagen"
              defaultValue={paramsProductos.descripcionProducto}
              ref={DescripcionProductoRef}
              
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Marca del producto</Form.Label>
            <Form.Control
             required minlength="2" maxlength="30"
              type="text"
              placeholder="Marca de la imagen"
              defaultValue={paramsProductos.marcaProducto}
              ref={MarcaProductoRef}
              
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
    )
}

export default EditarProducto