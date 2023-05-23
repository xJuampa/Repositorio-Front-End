import { Link } from "react-router-dom"
function CardPlanes({items}){
    return(
<div className="member-card">
            <img src={items.imgPlan} alt="Miembro 1" />
              <h2>{items.tituloPlan}</h2>
              <h5>{items.subtituloPlan}</h5>
              <p>{items.descripcionPlan}</p>
              <div >
              <Link
        to="/agregarConsulta"
        className="btn btn-info d-flex m-2 justify-content-center"
      >
        Consultanos mas!
      </Link>
            </div>
            </div>
    )
}
export default CardPlanes