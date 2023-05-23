import { Link } from "react-router-dom";
import {
  IoIosContacts,
  IoIosCalendar,
  IoIosCart,
  IoMdHelp,
  IoIosPaper,
  IoMdChatbubbles,
} from "react-icons/io";

function NavegacionLateral() {
  return (
      <div className="contenedorLateral">
        <div>
          <Link to={`/Admin`} className="btn"title="Pacientes">
            <IoIosContacts /> 
          </Link>
        </div>
        <div>
          <Link to={`/Admin`} className="btn" title="Turnos">
            <IoIosCalendar />
            
          </Link>
        </div>
        <div>
          <Link to={`/AdminProducto`} className="btn" title="Productos">
            <IoIosCart /> 
          </Link>
        </div>
        <div>
          <Link to={`/adminPlanes`} className="btn" title="Preguntas">
            <IoMdHelp /> 
          </Link>
        </div>
        <div>
          <Link to={`/adminDetallesPlanes`} className="btn" title="Planes">
            <IoIosPaper /> 
          </Link>
        </div>
        <div>
          <Link to={`/adminComentarios`} className="btn" title="Comentarios">
           <IoMdChatbubbles/> 
          </Link>
        </div>
      </div>
  );
}
export default NavegacionLateral;

