import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Alert from "react-bootstrap/Alert";
import { largoInput, topePrecio} from "../helpers/Validaciones"
import Swal from "sweetalert2";
import {useNavigate } from "react-router-dom";


function Consulta(){
const [nombreCliente,setNombreCliente]= useState("")
const [MailCliente,setMailCliente]= useState("")
const [telefonoCliente,setTelefonoCliente]= useState(0)
const [Descripcion,setDescripcion]= useState("")
const [error, setError] = useState(false);
const navegacion = useNavigate()

const handleSubmit = async (e) => {
    e.preventDefault();
    const URL = "http://localhost:4003/admConsulta/";

    if (
      largoInput(nombreCliente) &&
      largoInput(MailCliente) &&
      largoInput(Descripcion) 
      
    ) {
      const nuevaConsulta = {
        nombreCliente,
        MailCliente,
        telefonoCliente,
        Descripcion
      };

      try {
        const options = {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(nuevaConsulta),
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
         
          navegacion("/");
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
    return(
        <>
        <div className="divGeneral">
        <div className="divForms">
          <Form onSubmit={handleSubmit} className="container">
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Nombre y apellido</Form.Label>
              <Form.Control
              required minlength="3" maxlength="20"
                type="text"
                placeholder=""
                onChange={(e) => setNombreCliente(e.target.value)}
                
              />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
              required minlength="9" maxlength="30"
                type="text"
                placeholder="ejemplo@ejemplo.com"
                onChange={(e) => setMailCliente(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Telefono de contacto</Form.Label>
              <Form.Control
              required minlength="9" maxlength="11"
                type="namber"
                placeholder="+54 0381 "
                onChange={(e) => setTelefonoCliente(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Escriba aqui su consulta</Form.Label>
              <Form.Control
              required minlength="6" maxlength="300"
                as="textarea"
                 rows={3}
                placeholder="Escriba aqui su consulta"
                onChange={(e) => setDescripcion(e.target.value)}
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

export default Consulta