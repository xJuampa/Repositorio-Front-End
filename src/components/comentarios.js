// import React from 'react';


// function Comentarios({items}){
//     return(
//         <>
//         <div className="tamañoComentario col-lg-5 col-sm-12">
//             <div className='comentario'>
//                 <h3>{items.nombreComentario}</h3>
//                 <p>{items.descripcionComentario}</p>
//             </div>
//         </div>
        
//         </>

//   );
// }
import React from 'react';
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBBtn
} from 'mdb-react-ui-kit';

function Comentarios({items}){
  return (
    <MDBCard className='mt-2 mb-4'>
      <MDBCardBody>
        <MDBCardTitle className='titulocomentario'>{items.nombreComentario}</MDBCardTitle>
        <MDBCardText className='comentario'>{items.descripcionComentario}</MDBCardText>
      </MDBCardBody>
    </MDBCard>
  );
}

export default Comentarios