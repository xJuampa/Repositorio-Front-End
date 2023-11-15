
import React from 'react';
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText
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