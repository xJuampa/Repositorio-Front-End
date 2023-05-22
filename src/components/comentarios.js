

function Comentarios({items}){
    return(
        <>
        <div className="tamañoComentario col-lg-5 col-sm-12 acomodarImagen">
            <div>
                <h3>{items.nombreComentario}</h3>
                <p>{items.descripcionComentario}</p>
            </div>
        </div>
        
        </>
    )
}
export default Comentarios