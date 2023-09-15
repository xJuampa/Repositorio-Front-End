import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Register() {
  const [nombreUsuario, setNombreUsuario] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const navegacion = useNavigate()

  const handleSubmitUsers = async (e) => {
    e.preventDefault();
    const url = "http://localhost:4003/admUsuarios/users";
    const objetUsers = {
      nombreUsuario,
      password,
      email,
      nombre,
      apellido,
    };

    try {
      const respuesta = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(objetUsers),
      });
      if(respuesta.status===201){
        console.log("Usuario creado")
        navegacion("/login")
      }else{
        console.log("Fallo el intento de creacion")
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="fondoGralLoguin">
        <div className="ContenedorAdmin ">
    <Form onSubmit={handleSubmitUsers}>
      <Form.Group className="mb-3">
        <Form.Label>Nombre de Usuario</Form.Label>
        <Form.Control
          type="text"
          placeholder="Nombre Usuario"
          onChange={(e) => {
            setNombreUsuario(e.target.value);
          }}
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Email</Form.Label>
        <Form.Control
          type="email"
          placeholder="email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Nombre</Form.Label>
        <Form.Control
          type="text"
          placeholder="Nombre"
          onChange={(e) => {
            setNombre(e.target.value);
          }}
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Apellido</Form.Label>
        <Form.Control
          type="text"
          placeholder="Apellido"
          onChange={(e) => {
            setApellido(e.target.value); 
          }}
        />
      </Form.Group>
      <Button variant="primary" type="submit ">
        Enviar
      </Button>
    </Form>
    </div>
    </div>
  );
}
export default Register;
