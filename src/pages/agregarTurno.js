import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Alert from "react-bootstrap/Alert";
import { largoInput, topePrecio} from "../helpers/Validaciones"
import Swal from "sweetalert2";
import DatePicker from "react-datepicker";
import setHours from "date-fns/setHours";
import setMinutes from "date-fns/setMinutes";
import "react-datepicker/dist/react-datepicker.css";
import { registerLocale, setDefaultLocale } from  "react-datepicker";
import es from 'date-fns/locale/es';
registerLocale('es', es)
import { useNavigate } from "react-router-dom";




function AgregarTurno() {


  const [servicio, setServicio] = useState("");
  const [nombreDueño, setNombreDueño] = useState("");
  const [veterinarioNombre, setVeterinarioNombre] = useState("");
  const [especieMascota, setEspecieMascota] = useState("");
  const [telefonoContacto, setTelefonoContacto] = useState(0);
  const navegacion = useNavigate()

  const [startDate, setStartDate] = useState(setHours(setMinutes(new Date(), 30), 16)
  )
  const [error, setError] = useState(false);

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





  const handleSubmit= async(e)=>{
    e.preventDefault();
    const URL = "http://localhost:4003/admTurnos/";

    if (
      largoInput(servicio) &&
      largoInput(nombreDueño) &&
      largoInput(veterinarioNombre) &&
      largoInput(especieMascota) 
    ) {
      const nuevoTurno = {
        servicio,
        nombreDueño,
        veterinarioNombre,
        especieMascota,
        telefonoContacto,
        fechaYHora: startDate
      };

      try {
        const options = {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(nuevoTurno),
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
           navegacion("/adminTurnos")
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
          <Form.Label>Nombre del Dueño</Form.Label>
          <Form.Control required minlength="3" maxlength="15" type="text" placeholder="Nombre del Dueño" onChange={(e) => setNombreDueño(e.target.value)} />
        </Form.Group>
        
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Telefono</Form.Label>
          <Form.Control required minlength="9" maxlength="11" type="number" placeholder="Telefono" onChange={(e) => setTelefonoContacto(e.target.value)}/>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Servicio Solicitado</Form.Label>
          <Form.Select onChange={(e) => setServicio(e.target.value)}>
            <option value="">Seleccione una categoria</option>
            <option value="Atencion Médica">Atencion Médica</option>
            <option value="Peluquería">Peluquería</option>
            <option value="Pet-Shop">Pet-Shop</option>
          </Form.Select>
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
            <option value="Otro">Otro</option>
          </Form.Select>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Veterinario</Form.Label>
          <Form.Select onChange={(e) => setVeterinarioNombre(e.target.value)}>
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
export default AgregarTurno;
