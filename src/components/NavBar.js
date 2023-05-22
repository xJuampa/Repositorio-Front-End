
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import logoblanco from '../imagenes/logoblanco.png';

function ColorSchemesExample() {
  return (
    <>
      <Navbar className='Navbar'>
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt="logo"
              src={logoblanco}
              width="45"
              height="40"
              className="d-inline-block align-top"/>
              <a className='nombreNav' href='#home'><span>Rolling</span>Vet</a>
            </Navbar.Brand>
          <Nav className='NavLink'>
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="#features">Nosotros</Nav.Link>
            <Nav.Link href="#pricing">Planes</Nav.Link>
            <Nav.Link href="/Admin">Admin</Nav.Link>
            
            <Button variant="outline-light">Iniciar sesion</Button>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default ColorSchemesExample;