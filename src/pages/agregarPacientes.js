import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Alert from "react-bootstrap/Alert";
import {largoInput,topePrecio,emailValidation} from "../helpers/Validaciones"
import Swal from "sweetalert2";
import { Logueo } from "../helpers/Validaciones";

function AgregarPaciente() {
  Logueo()
  const [nombrePaciente, setNombrePaciente] = useState("");
  const [apellidoPaciente, setApellidoPaciente] = useState("");
  const [emailPaciente, setEmailPaciente] = useState("");
  const [telefonoPaciente, setTelefonoPaciente] = useState(0);
  const [nombreMascota, setNombreMascota] = useState("");
  const [especieMascota, setEspecieMascota] = useState("");
  const [razaMascota, setRazaMascota] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit= async(e)=>{
    e.preventDefault();
    const URL = "http://localhost:4003/admPacientes/";

    if (
      largoInput(nombrePaciente) &&
      largoInput(apellidoPaciente) &&
      emailValidation(emailPaciente) &&
      largoInput(nombreMascota) &&
      largoInput(especieMascota) &&
      largoInput(razaMascota) &&
      topePrecio(telefonoPaciente)
    ) {
      const nuevoPaciente = {
        nombrePaciente,
        apellidoPaciente,
        emailPaciente,
        telefonoPaciente,
        nombreMascota,
        especieMascota,
        razaMascota,
        
      };

      try {
        const options = {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(nuevoPaciente),
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
  }

  return (
    <>
    <div className="divGeneral">
      <div className="divForms">
      <Form onSubmit={handleSubmit} className="container">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Nombre del Paciente</Form.Label>
          <Form.Control type="text" placeholder="Nombre del Paciente" onChange={(e) => setNombrePaciente(e.target.value)} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Apellido del Paciente</Form.Label>
          <Form.Control type="text" placeholder="Apellido del Paciente" onChange={(e) => setApellidoPaciente(e.target.value)}/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email del Paciente</Form.Label>
          <Form.Control type="email" placeholder="Email del Paciente" onChange={(e) => setEmailPaciente(e.target.value)} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Telefono</Form.Label>
          <Form.Control type="number" placeholder="Telefono" onChange={(e) => setTelefonoPaciente(e.target.value)}/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Nombre de la mascota</Form.Label>
          <Form.Control type="text" placeholder="Nombre de la mascota" onChange={(e) => setNombreMascota(e.target.value)}/>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Especie de la mascota</Form.Label>
          <Form.Select onChange={(e) => setEspecieMascota(e.target.value)}>
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
          <Form.Control type="text" placeholder="Raza de la mascota" onChange={(e) => setRazaMascota(e.target.value)} />
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
export default AgregarPaciente;
