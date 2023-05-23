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
import AdminComentarios from './pages/adminComentarios';
import Comentarios from './components/comentarios';
import AdminDetallesPlanes from './pages/adminDetallesPlanes';
import AgregarPlan from './pages/agregarPlan';
import EditarPlan from './pages/editarPlan';
import AcercaDeNosotros from './pages/acercaDeNosotros';
import Login from './pages/Login';
import Register from './pages/Register';
import TurnoAdmin from './pages/adminTurnos';
import AgregarTurno from './pages/agregarTurno';
import EditarTurno from './pages/editarTurno';
import Error from './pages/error';
import verPlanes from './pages/verPlanes';


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
    <Route path='/agregarComentario' element={<Comentarios/>} ></Route>
    <Route path='/adminDetallesPlanes' element={<AdminDetallesPlanes/>} ></Route>
    <Route path='/agregarPlan' element={<AgregarPlan/>} ></Route>
    <Route path='/editarPlan/:_id' element={<EditarPlan/>} ></Route>
    <Route path='/acercaDeNosotros' element={<AcercaDeNosotros/>} ></Route>
    <Route path='/login' element={<Login/>} ></Route>
    <Route path='/register' element={<Register/>} ></Route>
    <Route path='/AdminTurnos' element={<TurnoAdmin/>} ></Route>
    <Route path='/agregarTurno' element={<AgregarTurno/>} ></Route>
    <Route path='/editarTurno/:_id' element={<EditarTurno/>} ></Route>
    <Route path='/verPlanes' element={<verPlanes/>} ></Route>
    <Route path='/*' element={<Error/>} ></Route>
    


    </Routes>
    <Footer/>
    </BrowserRouter>
    
   
   </>
    
  );
}

export default App;
