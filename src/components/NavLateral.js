
import { Link } from "react-router-dom";


function NavegacionLateral(){
    return(
        <div>
            <div className="contenedorLateral">
            <Link to={`/Admin`}  className="btn">
            Pacientes
          </Link>
          <Link to={`/Admin`}  className="btn">
            Turnos
          </Link>
          <Link to={`/AdminProducto`}  className="btn">
            Productos
          </Link>
          <Link to={`/Admin`}  className="btn">
             Consultas
          </Link>
          <Link to={`/Admin`}  className="btn">
            Planes
          </Link>
            </div>
        </div>
      )
}
export default NavegacionLateral