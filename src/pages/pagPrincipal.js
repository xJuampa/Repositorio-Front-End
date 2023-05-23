import Cards from "../components/Card";
import Comentarios from "../components/comentarios";
import { useState, useEffect } from "react";
import petshop from "../imagenes/petshop.png";
import peluqueria from "../imagenes/peluqueria.png";
import atencionmedica from "../imagenes/atencionmedica.png";
import nutrique from "../imagenes/nutrique.png";
import comedero from "../imagenes/comedero.png";
import balanced from "../imagenes/balanced.png";

function PagPrincipal() {
  const [listaProductos, setListaProductos] = useState([]);
  const [listaComentarios, setListaComentarios] = useState([]);
  const URL = "http://localhost:4003/admProductos/";

  useEffect(() => {
    consultaApiProductos();
    consultaApiComentarios();
  }, []);

  const consultaApiProductos = async () => {
    try {
      const respuesta = await fetch(URL, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const dato = await respuesta.json();
      setListaProductos(dato);
    } catch (error) {
      console.log(error);
    }
  };
  const consultaApiComentarios = async () => {
    try {
      const respuesta = await fetch("http://localhost:4003/admComentarios/", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const dato = await respuesta.json();
      setListaComentarios(dato);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="background">
        <div className="textoPrimerDiv">
          <h1>Cuidamos de tu mascota</h1>
          <h2>Cuidamos de vos</h2>
        </div>
      </div>

      <section className="tamañoSection1">
        <div className="acomodarServicio">
          <div className="acomodarTitulos">
            <h2>Nuestros servicios</h2>
          </div>
          <div className="container">
            <div className="row tarjetaServicios">
            <div className="members-container col-lg-3 m-3">
          <div className="member-card">
            <img className="p-3" src={atencionmedica} alt="Miembro 1" />
            <h2 className="acomodarTitulos">Atencion Medica</h2>
          </div>
          </div>
          <div className="members-container col-lg-3 m-3 ">
          <div className="member-card ">
            <img className="p-3 imagenservicio" src={peluqueria} alt="Miembro 1" />
            <h2 className="acomodarTitulos">Peluqueria</h2>
          </div>
          </div>
          <div className="members-container col-lg-3 m-3">
          <div className="member-card">
            <img className="p-3" src={petshop} alt="Miembro 1" />
            <h2 className="acomodarTitulos">Pet-Shop</h2>
          </div>
          </div>
            </div>
          </div>
        </div>
      </section>

      <section className="tamañoSection2">
        <div className="acomodarServicio">
          <div className="acomodarTitulos">
            <h2>Destacados</h2>
          </div>
          <div className="container ProductosDestacados">
            <div className="row">
              {listaProductos.map((items) => (
                <Cards items={items} key={items._id} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="acomodarImagen">
        <div>
          <img src="https://petplaza.com.do/img/cms/Royal-canin-2.jpg" alt="" />
        </div>
      </section>

      <section className="tamañoSection3">
        <div className="acomodarServicio">
          <div className="acomodarTitulos">
            <h2>Lo que dicen nuestros Clientes</h2>
          </div>
          <div className="container comentarios">
            <div className="row">
              {listaComentarios.map((items) => (
                <Comentarios items={items} key={items._id} />
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="tamañoSection4">
        <div className="acomodarServicio">
          <div className="acomodarTitulos">
            <h2>Nuestro Personal</h2>
          </div>
          <div className="container">
            <div className="row ">
              <div className="col-lg-3 col-md-3  estiloCards">
                <img
                  className="tamañoServicios"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZJ6TurnBGajJc0zqdRUoWgMsedLGKC4J0N9CXsooSYYyG3-k3Y4MrSt8T4G34QBFS7vw&usqp=CAU"
                  alt=""
                />
                <h4>Vet.Francisco Ruiz</h4>
              </div>
              <div className="col-lg-3 col-md-3   estiloCards">
                <img
                  className="tamañoServicios"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZJ6TurnBGajJc0zqdRUoWgMsedLGKC4J0N9CXsooSYYyG3-k3Y4MrSt8T4G34QBFS7vw&usqp=CAU"
                  alt=""
                />
                <h4>Vet.Luis paez</h4>
              </div>
              <div className="col-lg-3 col-md-3   estiloCards">
                <img
                  className="tamañoServicios"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZJ6TurnBGajJc0zqdRUoWgMsedLGKC4J0N9CXsooSYYyG3-k3Y4MrSt8T4G34QBFS7vw&usqp=CAU"
                  alt=""
                />
                <h4>Vet.Mirtha Zaez</h4>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default PagPrincipal;
