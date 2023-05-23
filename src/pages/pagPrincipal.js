import Cards from "../components/Card";
import Comentarios from "../components/comentarios";
import { useState, useEffect } from "react";
import petshop from "../imagenes/petshop.png";
import peluqueria from "../imagenes/peluqueria.png";
import atencionmedica from "../imagenes/atencionmedica.png";
import maritasuares from "../imagenes/maritasuares.png";
import fabiorodriguez from "../imagenes/fabiorodriguez.png";
import susanacardozo from "../imagenes/susanacardozo.png";

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
            <div className="tarjetaServicios">
            <div className=" col-lg-3 m-5">
          <div className="member-card">
            <img className="p-3" src={atencionmedica} alt="Miembro 1" />
            <h2 className="acomodarTitulos">Atencion Medica</h2>
          </div>
          </div>
          <div className="col-lg-3 m-5  ">
          <div className="member-card ">
            <img className="p-3"  src={peluqueria} alt="Miembro 1" />
            <h2 className="acomodarTitulos">Peluqueria</h2>
          </div>
          </div>
          <div className="col-lg-3 m-5">
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
            <h2>Productos</h2>
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

      <section className="publicidad">
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
            <div className="row contenedorcards">
              <div className="col-lg-3   estiloCards">
                <img
                  className="tamañoServicios"
                  src={susanacardozo}
                  alt=""
                />
                <h3>Vet.Susana Diaz</h3>
                <h5>Lunes a Viernes</h5>
                <h6>9 a 14hs </h6>
              </div>
              <div className="col-lg-3 estiloCards">
                <img
                  className="tamañoServicios"
                  src={fabiorodriguez}
                  alt=""
                />
                <h3>Vet.Fabio Lopez</h3>
                <h5>Lunes a Viernes</h5>
                <h6>17 a 22hs </h6>
              </div>
              <div className="col-lg-3   estiloCards">
                <img
                  className="tamañoServicios"
                  src={maritasuares}
                  alt=""
                />
                <h3>Vet.Marita Suarez</h3>
                <h5>Sabados y Domingo</h5>
                <h6> 10 a 17hs </h6>

              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default PagPrincipal;
