import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import logoblanco from "../imagenes/logoblanco.png";

function ColorSchemesExample() {
  const [isOpen, setIsOpen] = useState(false);
  const Token = localStorage.getItem("token");
  const cerrarSesion = () => {
    localStorage.removeItem("token");
    window.location.reload();
  };
  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <Navbar className="Navbar" variant="dark" expand="md">
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt="logo"
              src={logoblanco}
              width="45"
              height="40"
              className="d-inline-block align-top"
            />
            <a className="nombreNav" href="#home">
              <span>Rolling</span>Vet
            </a>
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="navbar-nav"
            onClick={toggleNavbar}
            className={isOpen ? "navbar-toggler-open" : "navbar-toggler-close"}
          />
          <Navbar.Collapse id="navbar-nav" className={isOpen ? "show" : ""}>
            <Nav className="ml-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/acercaDeNosotros">Nosotros</Nav.Link>
              <Nav.Link href="/verPlanes">Planes</Nav.Link>
              {Token && (
                <Nav.Link href="/Admin">Admin</Nav.Link>
              )}
            </Nav>
            <div className="button-container">
              {!Token && (
                <>
                  <Button
                    className="m-1"
                    href="/login"
                    variant="outline-light"
                  >
                    Iniciar sesión
                  </Button>
                  <Button
                    className="m-1"
                    href="/register"
                    variant="outline-light"
                  >
                    Registrarme
                  </Button>
                </>
              )}
              {Token && (
                <Button
                  className="m-1"
                  onClick={cerrarSesion}
                  variant="outline-light"
                >
                  Cerrar sesión
                </Button>
              )}
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
export default ColorSchemesExample;