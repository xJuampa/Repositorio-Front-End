import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Alert from "react-bootstrap/Alert";
import { largoInput, topePrecio} from "../helpers/Validaciones"
import Swal from "sweetalert2";
import {useNavigate } from "react-router-dom";


function Comentario(){
const [nombreComentario,setNombreComentario]= useState("")
const [emailComentario,setEmailComentario]= useState("")
const [telefonoComentario,setTelefonoComentario]= useState(0)
const [descripcionComentario,setDescripcionComentario]= useState("")
const [estadoComentario,setEstadoComentario]= useState(false)
const [error, setError] = useState(false);
const navegacion = useNavigate()

const handleSubmit = async (e) => {
    e.preventDefault();
    const URL = "http://localhost:4003/admComentarios/";

    if (
      largoInput(nombreComentario) &&
      largoInput(emailComentario) &&
      largoInput(descripcionComentario) 
      
    ) {
      const nuevoComentario = {
        nombreComentario,
        emailComentario,
        telefonoComentario,
        descripcionComentario,
        estadoComentario
      };

      try {
        const options = {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(nuevoComentario),
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
              required minlength="3" maxlength="30"
                type="text"
                placeholder=""
                onChange={(e) => setNombreComentario(e.target.value)}
              />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
              required minlength="15" maxlength="30"
                type="text"
                placeholder="ejemplo@ejemplo.com"
                onChange={(e) => setEmailComentario(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Telefono </Form.Label>
              <Form.Control
              required minlength="9" maxlength="11"
                type="namber"
                placeholder="381 "
                onChange={(e) => setTelefonoComentario(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Escriba aqui su comentario</Form.Label>
              <Form.Control
              required minlength="5" maxlength="300"
                as="textarea"
                 rows={3}
                placeholder="Escriba aqui su consulta"
                onChange={(e) => setDescripcionComentario(e.target.value)}
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

export default Comentario