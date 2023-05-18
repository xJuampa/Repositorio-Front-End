// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import { NavLink } from "react-router-dom"

// function NavBar (){

//     return(
//         <>
//       <Navbar className='navbar active'  >
//         <Container>
//         <NavLink className="colorNav" to="/">Navbar</NavLink>
//           <Nav className="me-auto ligth">
//             <NavLink className="colorNav" to="/">Home</NavLink>
//             <NavLink className="colorNav" to="/nosotros">Nosotros</NavLink>
//             <NavLink className="colorNav" to="/frases">Api</NavLink>
//             <NavLink className="colorNav" to="/listaProducto">Lista</NavLink>
//             <NavLink className="colorNav acomodarDiv" to="/login">Ingresar</NavLink>
//             <NavLink className="colorNav acomodarDiv" to="/register">Registro</NavLink> 
//           </Nav>
//         </Container>
//       </Navbar>
      
//       </>

//     )
// }

// export default NavBar 
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import logoblanco from '../imagenes/logoblanco.png';

function ColorSchemesExample() {
  return (
    <>
      <Navbar className='Navbar' variant="dark">
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
          <Nav className="navLink">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Nosotros</Nav.Link>
            <Nav.Link href="#pricing">Planes</Nav.Link>
            <Button variant="outline-light">Iniciar sesion</Button>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default ColorSchemesExample;