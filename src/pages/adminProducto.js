import React from "react";
import Table from "react-bootstrap/Table";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import ItemListaProducto from "../components/ItemListaProducto";
import NavegacionLateral from "../components/NavLateral";
import NavBar from "../components/NavBar"
import Footer from "../components/Footer"

function ProductoAdmin (){
    const [listaProductos, setListaProductos] = useState([]);
    const URL = "http://localhost:4003/admProductos/" ;

    useEffect(() => {
        consultaApiProductos();
      }, []);

    const consultaApiProductos = async()=>{
        try {
            const respuesta=await fetch(URL,{
                method: "GET",
                headers: {
                  "Content-Type": "application/json",
                },
              })
            const dato= await respuesta.json()
            setListaProductos(dato)
            
        } catch (error) {
            console.log(error)
            
        }

    }

    return(
        <>
        <div className="ColorFondoAdm"> 

        <div className="ContenedorAdmin ">
        <div className="moverBarraLateral" >
          <NavegacionLateral />
        </div>
        <div className="moverLista">
        <div className=" table-responsive Listado">
        <Link
        to="/agregarProducto"
        className="btn btn-success d-flex m-5 justify-content-center"
      >
        Agregar Producto
      </Link>
      <Table className="table table-striped">
          
          <thead>
            <tr>
              <th>Producto</th>
              <th>Nombre</th>
              <th>Precio</th>
              <th>Marca</th>
              <th>Opciones</th>
            </tr>
          </thead>
          {listaProductos.map((items) => (
        <ItemListaProducto
          consultaApiProductos={consultaApiProductos}
          items={items}
          key={items._id}
        />
          ))}
          
          
        </Table>
    
        </div>
        </div>
        
        </div>

        
    </div>
      </>
    )
}

export default ProductoAdmin