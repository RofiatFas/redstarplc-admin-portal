import React from 'react';
import SideBar from './SideBar';

function OperationDeliveryStationArrival2() {
  return (
    <div>
        <SideBar/>
        <main>
            <div className='container-fluid pt-3'>
            <p>Operations / Delivery station / Arrival</p>
               <h6>Delivery Station</h6>

               <form className='mb-3'>
               <div class="col-12 col-sm-12 col-md-6 col-lg-4">
                <label for="inputPassword4" class="form-label">Manifest number</label>
<div className='d-flex'>
<input type="password" class="form-control" id="inputPassword4" placeholder='Manifest number'/>
    <button class="btn btn-primary bg-1 fs-12 px-3 mx-2" type="submit">Search</button> 
</div>
  </div>
               </form>
            </div>
            <div className='container-fluid table-responsive'>
         <table class="table bg-white">
  <thead>
    <tr className='fs-13'>
      <th scope="col">Bag Number</th>
      <th scope="col">Driver Name</th>
      <th scope="col">Destination</th>
      <th scope="col">Number of Items</th>
      <th scope="col">Total weight</th>
      <th scope="col">Content</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody className='fs-13'>
    <tr className=''>
      <td scope="row">#00245631</td>
      <td>Biola Bakare</td>
      <td>Lagos Hub</td>
      <td>26 Shipments</td>
      <td>80kg</td>
      <td>Package</td>
      <td className='fw-bold' style={{cursor:"pointer"}}><span className='text-success' data-bs-toggle="modal" data-bs-target="#exampleModal1">View</span>
    </td>
    </tr>


   
  </tbody>
</table>
         </div>
        </main>
    </div>
  )
}

export default OperationDeliveryStationArrival2;