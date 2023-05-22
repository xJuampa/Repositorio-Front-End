import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login (){

    const [nombreUsuario, setNombreUsuario] = useState("");
    const [password, setPassword] = useState("")
    const Url="http://localhost:4003/admUsuarios/usersLoged"
    const navegacion = useNavigate()

    const handleSubmit=async(e)=>{
      e.preventDefault()
      
        try{
            const respuesta= await fetch (Url,{
                method :"POST",
                headers:{
                  "Content-Type":"application/json"
                },
                body:JSON.stringify({
                  nombreUsuario,
                  password,
                })
              })
              const dato = await respuesta.json()
              console.log(dato)
               localStorage.setItem("token",JSON.stringify(dato))
               navegacion("/")
               window.location.reload();
               
        }catch(error){
          console.log(error)
        }
    }

    

    return(
      <div className="fondoGralLoguin">
        <div className="ContenedorAdmin ">
        <Form onSubmit={handleSubmit} >
        <Form.Group className="mb-3">
          <Form.Label>Nombre de Usuario</Form.Label>
          <Form.Control
            type="text"
            placeholder="Nombre Usuario"
            onChange={(e)=>{setNombreUsuario(e.target.value)}}
            
          />
        </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Password"
          onChange={(e)=>{setPassword(e.target.value)}}
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Enviar
      </Button>
      </Form>
        </div>
      </div>
         
    )
}
export default Login