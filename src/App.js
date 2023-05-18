import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import PaginaAdmin from "./pages/adminPacientes"
import AgregarPaciente from './pages/agregarPacientes';
import EditarPaciente from './pages/editarPacientes';
import ProductoAdmin from './pages/adminProducto';
import AgregarProductos from './pages/agregarProducto';
import EditarProducto from './pages/editarProductos';
import AdminPlanes from './pages/adminPlanes';

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
    <Route path='/Admin' element={<PaginaAdmin/>} ></Route>
    <Route path='/agregarPaciente' element={<AgregarPaciente/>} ></Route>
    <Route path='/editarPaciente/:_id' element={<EditarPaciente/>} ></Route>
    <Route path='/AdminProducto' element={<ProductoAdmin/>} ></Route>
    <Route path='/agregarProducto' element={<AgregarProductos/>} ></Route>
    <Route path='/editarProducto/:_id' element={<EditarProducto/>} ></Route>
    <Route path='/adminPlanes' element={<AdminPlanes/>} ></Route>


    </Routes>
    </BrowserRouter>
    
   
   </>
    
  );
}

export default App;
