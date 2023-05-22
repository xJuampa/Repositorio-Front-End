import Cards from "../components/Card";
import Comentarios from "../components/comentarios";
import { useState, useEffect } from "react";

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

      <section className="tamañoSection">
        <div className="acomodarServicio">
          <div className="acomodarTitulos">
            <h2>Nuestros servicios</h2>
          </div>
          <div className="container">
            <div className="row ">
            <div className="members-container col-lg-3 me-3 ">
          <div className="member-card">
            <img className="p-3" src="https://c.files.bbci.co.uk/48DD/production/_107435681_perro1.jpg" alt="Miembro 1" />
            <h2 className="acomodarTitulos">Atencion Medica</h2>
          </div>
          </div>
          <div className="members-container col-lg-3 m-3 ">
          <div className="member-card ">
            <img className="p-3" src="https://c.files.bbci.co.uk/48DD/production/_107435681_perro1.jpg" alt="Miembro 1" />
            <h2 className="acomodarTitulos">Peluqueria</h2>
          </div>
          </div>
          <div className="members-container col-lg-3 m-3">
          <div className="member-card">
            <img className="p-3" src="https://c.files.bbci.co.uk/48DD/production/_107435681_perro1.jpg" alt="Miembro 1" />
            <h2 className="acomodarTitulos">Pet-Shop</h2>
          </div>
          </div>
            </div>
          </div>
        </div>
      </section>

      <section className="tamañoSection">
        <div className="acomodarServicio">
          <div className="acomodarTitulos">
            <h2>Destacados</h2>
          </div>
          <div className="container">
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

      <section className="tamañoSection">
        <div className="acomodarServicio">
          <div className="acomodarTitulos">
            <h2>Lo que dicen nuestros Clientes</h2>
          </div>
          <div className="container">
            <div className="row acomodarTitulos">
              {listaComentarios.map((items) => (
                <Comentarios items={items} key={items._id} />
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="tamañoSection">
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
