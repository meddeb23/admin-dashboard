import React from 'react';
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol } from 'mdbreact';

const ClientCard = () => {
  return (
    <div class="col-sm-4">
    <div class="card" >
      <div class="card-body" >
        <h5 class="card-title">a client</h5>
        <p class="card-text">bla bla bla.</p>
        <a href="#" class="btn btn-primary">details</a>
      </div>
    </div>
  </div>  )
}

export default ClientCard;