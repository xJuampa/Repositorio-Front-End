import React from "react";
import { useState, useEffect, useRef } from "react";
import { Form, Button } from "react-bootstrap";
import Alert from "react-bootstrap/Alert";
import { useParams, useNavigate } from "react-router-dom";
import { largoInput, topePrecio } from "../helpers/Validaciones";
import Swal from "sweetalert2";
import { Logueo } from "../helpers/Validaciones";

function EditarPlan(){
  Logueo()
    const { _id } = useParams();
    const [paramsPlan, setParamsPlan] = useState({});
    const [paramsPlanEstado, setParamsPlanEstado] = useState("");
    const URL = "http://localhost:4003/admPlanes/"+_id;  
    const TituloPlanRef = useRef("");
    const ImgPlanRef = useRef("");
    const PrecioPlanRef = useRef(0);
    const DescripcionPlanRef = useRef("");
    const SubtituloPlanRef = useRef("");
    const [error, setError] = useState(false);
  const navegacion = useNavigate()


  const getPlan = async () => {
    try {
      const respuesta = await fetch(URL);
      const dato = await respuesta.json();
      setParamsPlan(dato);
      setParamsPlanEstado(dato.estadoPlan);
    } catch (error) {
      console.log(error);
    }
  };
  
  useEffect(() => {
    const fetchData = async () => {
      await getPlan();
    };
    fetchData();
  }, [getPlan, _id]);

        const handleSubmit= async(e)=>{
            e.preventDefault();
      
            if (
              largoInput(TituloPlanRef.current.value) &&
              largoInput(SubtituloPlanRef.current.value) &&
            largoInput(ImgPlanRef.current.value) &&
            largoInput(DescripcionPlanRef.current.value) &&
            topePrecio(PrecioPlanRef.current.value)
            ) {
              const editarProducto = {
                tituloPlan:TituloPlanRef.current.value,
                subtituloPlan:SubtituloPlanRef.current.value,
              imgPlan:ImgPlanRef.current.value,
              precioPlan:PrecioPlanRef.current.value,
              descripcionPlan:DescripcionPlanRef.current.value,
              estadoPlan:paramsPlanEstado,
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
                    getPlan()
                    
                    navegacion("/adminDetallesPlanes");
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
          <Form onSubmit={handleSubmit} className="container">
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Titulo del plan</Form.Label>
              <Form.Control
              required minlength="9" maxlength="40"
                type="text"
                placeholder="Titulo"
                defaultValue={paramsPlan.tituloPlan}
                ref={TituloPlanRef}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Subtitulo del Plan</Form.Label>
              <Form.Control
              required minlength="9" maxlength="40"
                type="text"
                placeholder="Subtitulo"
                defaultValue={paramsPlan.subtituloPlan}
                ref={SubtituloPlanRef}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Imagen del plan</Form.Label>
              <Form.Control
                type="url"
                placeholder="URL de la imagen"
                defaultValue={paramsPlan.imgPlan}
                ref={ImgPlanRef}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Precio del plan</Form.Label>
              <Form.Control
              required  minlength="1" maxlength="10"
                type="namber"
                placeholder="Precio"
                defaultValue={paramsPlan.precioPlan}
                ref={PrecioPlanRef}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Descripcion del plan</Form.Label>
              <Form.Control
              required minlength="5" maxlength="300"
                as="textarea"
                rows={3}
                placeholder="Descripcion del Plan"
                defaultValue={paramsPlan.descripcionPlan}
                ref={DescripcionPlanRef}
              />
            </Form.Group>
            <Form.Group className="mb-3">
          <Form.Label>Estado del Plan</Form.Label>
          <Form.Select value={paramsPlanEstado} onChange={(e) => setParamsPlanEstado(e.target.value)}>
            <option value="">Seleccione una categoria</option>
            <option value="true">Activo</option>
            <option value="false">Inactivo</option>
          </Form.Select>
        </Form.Group>

            {error === true ? (
              <Alert variant="danger">Corrobore los datos ingresados</Alert>
            ) : null}

<Button variant="success" type="submit">
          Enviar
        </Button>
        <Button variant="primary" className="m-2" href="/adminDetallesPlanes">
        ↩
      </Button>
          </Form>
        </div>
      </div>
    </>
    )
}
export default EditarPlan