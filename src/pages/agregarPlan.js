import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Alert from "react-bootstrap/Alert";
import { largoInput, topePrecio } from "../helpers/Validaciones";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { Logueo } from "../helpers/Validaciones";

function AgregarPlan() {
  Logueo()
  const [tituloPlan, setTituloPlan] = useState("");
  const [subtituloPlan, setSubtituloPlan] = useState("");
  const [precioPlan, setPrecioPlan] = useState(0);
  const [descripcionPlan, setDescripcionPlan] = useState("");
  const [imgPlan, setImgPlan] = useState("");
  const [error, setError] = useState(false);
  const [estadoPlan, setEstadoPlan] = useState(false);
  const navegacion = useNavigate();
  const URL = "http://localhost:4003/admPlanes/";

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      largoInput(tituloPlan) &&
      largoInput(subtituloPlan) &&
      largoInput(descripcionPlan) &&
      largoInput(imgPlan) &&
      topePrecio(precioPlan)
    ) 
    {
      setEstadoPlan(false)
      const nuevoPlan = {
        tituloPlan,
        subtituloPlan,
        imgPlan,
        descripcionPlan,
        precioPlan,
        estadoPlan,
      };
      
      try {
        const options = {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(nuevoPlan),
        };
        const respuesta = await fetch(URL, options);

        if (respuesta.status === 201) {
          Swal.fire({
            position: "top-center",
            icon: "success",
            title: "Carga exitosa",
            showConfirmButton: false,
            timer: 1500,
          });

          navegacion("/adminDetallesPlanes");
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
              <Form.Label>Titulo del plan</Form.Label>
              <Form.Control
              required minlength="9" maxlength="40"
                type="text"
                placeholder="Titulo"
                onChange={(e) => setTituloPlan(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Subtitulo del Plan</Form.Label>
              <Form.Control
              required minlength="9" maxlength="40"
                type="text"
                placeholder="Subtitulo"
                onChange={(e) => setSubtituloPlan(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Imagen del plan</Form.Label>
              <Form.Control
              required
                type="url"
                placeholder="URL de la imagen"
                onChange={(e) => setImgPlan(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Precio del plan</Form.Label>
              <Form.Control
              required  minlength="1" maxlength="10"
                type="namber"
                placeholder="Precio"
                onChange={(e) => setPrecioPlan(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Descripcion del plan</Form.Label>
              <Form.Control
              required minlength="5" maxlength="300"
                as="textarea"
                rows={3}
                placeholder="Descripcion del Plan"
                onChange={(e) => setDescripcionPlan(e.target.value)}
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
export default AgregarPlan;
