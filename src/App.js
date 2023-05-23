import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import PaginaAdmin from "./pages/adminPacientes"
import AgregarPaciente from './pages/agregarPacientes';
import EditarPaciente from './pages/editarPacientes';
import ProductoAdmin from './pages/adminProducto';
import AgregarProductos from './pages/agregarProducto';
import EditarProducto from './pages/editarProductos';
import AdminPlanes from './pages/adminPlanes';
import PagPrincipal from './pages/pagPrincipal';
import Consulta from './pages/agregarConsulta';
import NavBar from "./components/NavBar"
import Footer from "./components/Footer"


function App() {
  return (
    <>
    <BrowserRouter>
    <NavBar/>
    <Routes>
    <Route path='/' element={<PagPrincipal/>} ></Route>
    <Route path='/Admin' element={<PaginaAdmin/>} ></Route>
    <Route path='/agregarPaciente' element={<AgregarPaciente/>} ></Route>
    <Route path='/editarPaciente/:_id' element={<EditarPaciente/>} ></Route>
    <Route path='/AdminProducto' element={<ProductoAdmin/>} ></Route>
    <Route path='/agregarProducto' element={<AgregarProductos/>} ></Route>
    <Route path='/editarProducto/:_id' element={<EditarProducto/>} ></Route>
    <Route path='/adminPlanes' element={<AdminPlanes/>} ></Route>
    <Route path='/agregarConsulta' element={<Consulta/>} ></Route>
    <Route path='/adminComentarios' element={<AdminComentarios/>} ></Route>
    <Route path='/agregarComentario' element={<Comentario/>} ></Route>
    <Route path='/adminDetallesPlanes' element={<AdminDetallesPlanes/>} ></Route>
    <Route path='/agregarPlan' element={<AgregarPlan/>} ></Route>
    <Route path='/editarPlan/:_id' element={<EditarPlan/>} ></Route>
    <Route path='/acercaDeNosotros' element={<AcercaDeNosotros/>} ></Route>
    <Route path='/login' element={<Login/>} ></Route>
    <Route path='/register' element={<Register/>} ></Route>
    <Route path='/*' element={<Error/>} ></Route>
    <Route path='/AdminTurnos' element={<TurnoAdmin/>} ></Route>
    <Route path='/agregarTurno' element={<AgregarTurno/>} ></Route>
    <Route path='/editarTurno/:_id' element={<EditarTurno/>} ></Route>


    </Routes>
    <Footer/>
    </BrowserRouter>
    
   
   </>
    
  );
}

export default App;
