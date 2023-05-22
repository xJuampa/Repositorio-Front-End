import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import logoblanco from "../imagenes/logoblanco.png";

function ColorSchemesExample() {
  const Token = localStorage.getItem("token");
  
  return (
    <>
      <Navbar className="Navbar" variant="dark">
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
          <Nav className="navLink">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="#features">Nosotros</Nav.Link>
            <Nav.Link href="#pricing">Planes</Nav.Link>
            <Nav.Link  style={{ display: Token?  'none': 'block'  }}   href="/Admin">
              Admin
            </Nav.Link>

            <Button className="m-1" style={{ display: Token? 'block' : 'none' }} href="/login" variant="outline-light">
              Iniciar sesion
            </Button>
            <Button className="m-1" style={{ display: Token? 'block' : 'none' }} href="/register" variant="outline-light">
              Registrarme
            </Button>
            <Button className="m-1" style={{ display: Token?  'none': 'block'  }} href="/login" variant="outline-light" >
              Cerrar sesion
            </Button>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default ColorSchemesExample;
