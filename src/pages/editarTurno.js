import React from "react";
import { useState, useEffect, useRef } from "react";
import { Form, Button } from "react-bootstrap";
import Alert from "react-bootstrap/Alert";
import { useParams, useNavigate } from "react-router-dom";
import { largoInput, topePrecio } from "../helpers/Validaciones";
import Swal from "sweetalert2";
import DatePicker from "react-datepicker";
import setHours from "date-fns/setHours";
import setMinutes from "date-fns/setMinutes";
import "react-datepicker/dist/react-datepicker.css";
import { registerLocale, setDefaultLocale } from  "react-datepicker";
import es from 'date-fns/locale/es';
registerLocale('es', es)

function EditarTurno(){
  const { _id } = useParams();
  const [paramsTurnos, setParamsTurnos] = useState({});
  const [paramsEspecie, setParamsEspecie] = useState("");
  const [paramsNombreVeterinario, setParamsNombreVeterinario] = useState("");
  const [paramsServicio, setParamsServicio] = useState("");
  const [paramsFechaYHora, setParamsFechaYHora] = useState("");
  const [startDate, setStartDate] = useState(setHours(setMinutes(new Date(), 30), 16))
  const getIntervalosHorarios = () => {
    const intervalos = [];
    const fechaActual = new Date();
    const horasInicio = 8; 
    const horasFin = 20; 

    for (let hora = horasInicio; hora < horasFin; hora++) {
      intervalos.push(setHours(setMinutes(fechaActual, 0), hora));
      intervalos.push(setHours(setMinutes(fechaActual, 30), hora));
    }

    return intervalos;
  };



  const URL = "http://localhost:4003/admTurnos/"+_id;  
  const [error, setError] = useState(false);
  const navegacion = useNavigate()

  useEffect(() => {
    getTurno();
  }, [] );
  
    const getTurno= async()=>{
      try {
        const respuesta = await fetch(URL)
        const dato = await respuesta.json()
        setParamsTurnos(dato)
        setParamsEspecie(dato.especieMascota)
        setParamsNombreVeterinario(dato.veterinarioNombre)
        setParamsServicio(dato.servicio)
        setStartDate(dato.fechaYHora)
        
      } catch (error) {
        console.log(error)
      }
    }

    // const handleSubmit= async(e)=>{
    //   e.preventDefault();

    //   if (
    //     largoInput(NombrePacienteRef.current.value) &&
    //   largoInput(ApellidoPacienteRef.current.value) &&
    //   largoInput(EmailPacienteRef.current.value) &&
    //   largoInput(NombreMascotaRef.current.value) &&
    //   largoInput(paramsMascotasCat) &&
    //   largoInput(RazaMascotaRef.current.value) &&
    //   topePrecio(TelefonoPacienteRef.current.value)
    //   ) {
    //     const editarPaciente = {
    //       nombrePaciente:NombrePacienteRef.current.value,
    //     apellidoPaciente:ApellidoPacienteRef.current.value,
    //     emailPaciente: EmailPacienteRef.current.value,
    //     telefonoPaciente:TelefonoPacienteRef.current.value,
    //     nombreMascota:NombreMascotaRef.current.value,
    //     especieMascota:paramsMascotasCat,
    //     razaMascota:RazaMascotaRef.current.value
    //     };
        
  
    //     try {
    //       const resp = await fetch(URL,{
    //         method:"PUT",
    //         headers:{"Content-Type": "application/json"},
    //         body:JSON.stringify(editarPaciente)
    //       });
    //       setError(false)
    //       if (resp.status ===200) {
    //           Swal.fire({
    //             position: "top-center",
    //             icon: "success",
    //             title: "Edicion exitosa",
    //             showConfirmButton: false,
    //             timer: 1500,
    //           })
    //           getPaciente()
              
    //           navegacion("/Admin");
    //         } else {
    //           Swal.fire({
    //             position: "top-center",
    //             icon: "warning",
    //             title: "Ocurrio un error",
    //             showConfirmButton: false,
    //             timer: 1500,
    //           });}
    //     } catch (error) {
    //       console.log(error);
    //     }
    //   } else {
    //     setError(true);
    //   }
    // }

    return(
        <>
    <div className="divGeneral">
      <div className="divForms">
      <Form className="container">

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Nombre del Dueño</Form.Label>
          <Form.Control type="text" placeholder="Nombre del Dueño" defaultValue={paramsTurnos.nombreDueño} />
        </Form.Group>
        
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Telefono</Form.Label>
          <Form.Control type="number" placeholder="Telefono" defaultValue={paramsTurnos.telefonoContacto}/>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Servicio Solicitado</Form.Label>
          <Form.Select value={paramsServicio} onChange={(e) => setParamsServicio(e.target.value)}>
            <option value="">Seleccione una categoria</option>
            <option value="Atencion Médica">Atencion Médica</option>
            <option value="Peluquería">Peluquería</option>
            <option value="Pet-Shop">Pet-Shop</option>
          </Form.Select>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Especie de la mascota</Form.Label>
          <Form.Select value={paramsEspecie} onChange={(e) => setParamsEspecie(e.target.value)}>
            <option value="">Seleccione una categoria</option>
            <option value="Perro">Perro</option>
            <option value="Gato">Gato</option>
            <option value="Hamster">Hamster</option>
            <option value="Pez">Pez</option>
            <option value="Ave">Ave</option>
            <option value="Otro">Otro</option>
          </Form.Select>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Veterinario</Form.Label>
          <Form.Select value={paramsNombreVeterinario} onChange={(e) => setParamsNombreVeterinario(e.target.value)}>
            <option value="">Seleccione una categoria</option>
            <option value="Juan Perez">Vet. Juan Perez</option>
            <option value="Luis Aguirre">Vet. Luis Aguirre</option>
          </Form.Select>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Seleccione dia y horario</Form.Label>
          <DatePicker
      selected={startDate}
      onChange={(date) => setStartDate(date)}
      showTimeSelect
      locale="es"
      includeTimes={getIntervalosHorarios()}
      dateFormat="d MMMM yyyy - HH:mm"
    />
        </Form.Group>

        
        
        
        {/* {error === true ? (
          <Alert variant="danger">Corrobore los datos ingresados</Alert>
        ) : null} */}

        <Button variant="primary" type="submit">
          Enviar
        </Button>
      </Form>

      </div>
    </div>
      
    </>
      
        
    )
        }

export default EditarTurno