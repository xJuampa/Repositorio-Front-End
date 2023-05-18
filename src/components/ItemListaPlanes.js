import { Link } from "react-router-dom"



function ItemListaPlanes ({items,consultaApiPlanes}){
    return (
        <tbody>
        <tr>
          <td>1</td>
          <td>2</td>
          <td>3</td>
          <td>4</td>
          <Link to={`/editarPaciente/`}  className="btn btn-warning me-3">
              Editar
            </Link>
            <Link className="btn btn-danger" >
              Borrar
            </Link>
        </tr>
        </tbody>

    )
}

export default ItemListaPlanes