import React from "react";
import { useState, useEffect, useRef } from "react";
import { Form, Button } from "react-bootstrap";
import Alert from "react-bootstrap/Alert";
import { useParams, useNavigate } from "react-router-dom";
import { largoInput, topePrecio } from "../helpers/Validaciones";
import Swal from "sweetalert2";

function EditarPaciente(){
  const { _id } = useParams();
  const [paramsPacientes, setParamsPacientes] = useState({});
  const [paramsMascotasCat, setParamsMascotasCat] = useState("");
  const URL = "http://localhost:4003/admPacientes/"+_id;  
  const NombrePacienteRef = useRef("");
  const ApellidoPacienteRef = useRef("");
  const EmailPacienteRef = useRef("");
  const TelefonoPacienteRef = useRef(0);
  const NombreMascotaRef = useRef("");
  const RazaMascotaRef = useRef("");
  const [error, setError] = useState(false);
  const navegacion = useNavigate()

  useEffect(() => {
    getPaciente();
  }, [] );
  
    const getPaciente= async()=>{
      try {
        const respuesta = await fetch(URL)
        const dato = await respuesta.json()
        setParamsPacientes(dato)
        setParamsMascotasCat(dato.especieMascota)
      } catch (error) {
        console.log(error)
      }
    }

    const handleSubmit= async(e)=>{
      e.preventDefault();

      if (
        largoInput(NombrePacienteRef.current.value) &&
      largoInput(ApellidoPacienteRef.current.value) &&
      largoInput(EmailPacienteRef.current.value) &&
      largoInput(NombreMascotaRef.current.value) &&
      largoInput(paramsMascotasCat) &&
      largoInput(RazaMascotaRef.current.value) &&
      topePrecio(TelefonoPacienteRef.current.value)
      ) {
        const editarPaciente = {
          nombrePaciente:NombrePacienteRef.current.value,
        apellidoPaciente:ApellidoPacienteRef.current.value,
        emailPaciente: EmailPacienteRef.current.value,
        telefonoPaciente:TelefonoPacienteRef.current.value,
        nombreMascota:NombreMascotaRef.current.value,
        especieMascota:paramsMascotasCat,
        razaMascota:RazaMascotaRef.current.value
        };
        
  
        try {
          const resp = await fetch(URL,{
            method:"PUT",
            headers:{"Content-Type": "application/json"},
            body:JSON.stringify(editarPaciente)
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
              getPaciente()
              
              navegacion("/Admin");
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
          <Form className="container" onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Nombre del Paciente</Form.Label>
          <Form.Control type="text" placeholder="Nombre del Paciente" defaultValue={paramsPacientes.nombrePaciente} ref={NombrePacienteRef} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Apellido del Paciente</Form.Label>
          <Form.Control type="text" placeholder="Apellido del Paciente" defaultValue={paramsPacientes.apellidoPaciente} ref={ApellidoPacienteRef}/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email del Paciente</Form.Label>
          <Form.Control type="email" placeholder="Email del Paciente" defaultValue={paramsPacientes.emailPaciente} ref={EmailPacienteRef} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Telefono</Form.Label>
          <Form.Control type="number" placeholder="Telefono" defaultValue={paramsPacientes.telefonoPaciente} ref={TelefonoPacienteRef}/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Nombre de la mascota</Form.Label>
          <Form.Control type="text" placeholder="Nombre de la mascota" defaultValue={paramsPacientes.nombreMascota} ref={NombreMascotaRef} />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Especie de la mascota</Form.Label>
          <Form.Select value={paramsMascotasCat} onChange={(e) => setParamsMascotasCat(e.target.value)}>
            <option value="">Seleccione una categoria</option>
            <option value="Perro">Perro</option>
            <option value="Gato">Gato</option>
            <option value="Hamster">Hamster</option>
            <option value="Pez">Pez</option>
            <option value="Ave">Ave</option>
          </Form.Select>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Raza de la mascota</Form.Label>
          <Form.Control type="text" placeholder="Raza de la mascota" defaultValue={paramsPacientes.razaMascota} ref={RazaMascotaRef} />
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

export default EditarPaciente