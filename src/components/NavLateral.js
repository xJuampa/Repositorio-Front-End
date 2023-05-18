import { Link } from "react-router-dom";
import {
  IoIosContacts,
  IoIosCalendar,
  IoIosCart,
  IoMdHelp,
  IoIosPaper,
} from "react-icons/io";

function NavegacionLateral() {
  return (
    <div>
      <div className="contenedorLateral">
        <div>
          <Link to={`/Admin`} className="btn">
            <IoIosContacts /> Pacientes
          </Link>
        </div>
        <div>
          <Link to={`/Admin`} className="btn turnos">
            <IoIosCalendar />
            Turnos
          </Link>
        </div>
        <div>
          <Link to={`/AdminProducto`} className="btn">
            <IoIosCart /> Productos
          </Link>
        </div>
        <div>
          <Link to={`/Admin`} className="btn">
            <IoMdHelp /> Consultas
          </Link>
        </div>
        <div>
          <Link to={`/adminPlanes`} className="btn planes">
            <IoIosPaper /> Planes
          </Link>
        </div>
      </div>
    </div>
  );
}
export default NavegacionLateral;