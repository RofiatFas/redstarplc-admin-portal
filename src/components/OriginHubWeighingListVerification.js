import React from 'react';
import ReweighingModal from './Modal/ReweighingModal';
import SideBar from './SideBar';

function OriginHubWeighingListVerification() {
  return (
    <div>
    <SideBar/>
    <main>
        <div className='container-fluid'>
        <p>Operations / Origin hub / Weighing</p>
           <h6>Weighing Pack Bag #00245631</h6>
           <div className='d-flex mb-3'>
            <p>26 Items</p>
            <button class="btn btn-primary btn-1 fs-12 px-3 mx-2 ms-auto" type="submit" data-bs-toggle="modal" data-bs-target="#reweighingModal">Update</button> 
           </div>
        </div>
        <div className='container-fluid table-responsive'>
     <table class="table bg-white">
<thead>
<tr className='fs-13'>
  <th scope="col">Waybill No</th>
  <th scope="col">Date</th>
  <th scope="col">Origin City</th>
  <th scope="col">Destination City</th>
  <th scope="col">Weight</th>
  <th scope="col">Pieces</th>
  <th scope="col">Seal No</th>
  <th scope="col">Status</th>
</tr>
</thead>
<tbody className='fs-13'>
<tr className=''>
  <td scope="row">005648752DB</td>
  <td>Feb 04th , 2023</td>
  <td>Lagos</td>
  <td>Abuja</td>
  <td>10kg</td>
  <td>2</td>
  <td>2546</td>
  <td className=' text-success'><div className=''><span type="button" class="fs-13 verified-btn bg-2 text-success border-0 rounded-pill p-1"><span className='dot mx-2'></span>Verified</span>
</div></td>
</tr>
<tr className=''>
  <td scope="row">005648752DB</td>
  <td>Feb 04th , 2023</td>
  <td>Lagos</td>
  <td>Abuja</td>
  <td>10kg</td>
  <td>2</td>
  <td>2546</td>
  <td className=' text-success'><div className=''><span type="button" class="fs-13 verified-btn bg-2 text-success border-0 rounded-pill p-1"><span className='dot mx-2'></span>Verified</span>
</div></td>
</tr>
<tr className=''>
  <td scope="row">005648752DB</td>
  <td>Feb 04th , 2023</td>
  <td>Lagos</td>
  <td>Abuja</td>
  <td>10kg</td>
  <td>2</td>
  <td>2546</td>
  <td className=' text-success'><div className=''><span type="button" class="fs-13 verified-btn bg-2 text-success border-0 rounded-pill p-1"><span className='dot mx-2'></span>Verified</span>
</div></td>
</tr>
<tr className=''>
  <td scope="row">005648752DB</td>
  <td>Feb 04th , 2023</td>
  <td>Lagos</td>
  <td>Abuja</td>
  <td>10kg</td>
  <td>2</td>
  <td>2546</td>
  <td className=' text-success'><div className=''><span type="button" class="fs-13 verified-btn bg-2 text-success border-0 rounded-pill p-1"><span className='dot mx-2'></span>Verified</span>
</div></td>
</tr>
<tr className=''>
  <td scope="row">005648752DB</td>
  <td>Feb 04th , 2023</td>
  <td>Lagos</td>
  <td>Abuja</td>
  <td>10kg</td>
  <td>2</td>
  <td>2546</td>
  <td className=' text-success'><div className=''><span type="button" class="fs-13 verified-btn bg-2 text-success border-0 rounded-pill p-1"><span className='dot mx-2'></span>Verified</span>
</div></td>
</tr>
<tr className=''>
  <td scope="row">005648752DB</td>
  <td>Feb 04th , 2023</td>
  <td>Lagos</td>
  <td>Abuja</td>
  <td>10kg</td>
  <td>2</td>
  <td>2546</td>
  <td className=' text-success'><div className=''><span type="button" class="fs-13 verified-btn bg-2 text-success border-0 rounded-pill p-1"><span className='dot mx-2'></span>Verified</span>
</div></td>
</tr>
<tr className=''>
  <td scope="row">005648752DB</td>
  <td>Feb 04th , 2023</td>
  <td>Lagos</td>
  <td>Abuja</td>
  <td>10kg</td>
  <td>2</td>
  <td>2546</td>
  <td className=' text-success'><div className=''><span type="button" class="fs-13 verified-btn bg-2 text-success border-0 rounded-pill p-1"><span className='dot mx-2'></span>Verified</span>
</div></td>
</tr>
<tr className=''>
  <td scope="row">005648752DB</td>
  <td>Feb 04th , 2023</td>
  <td>Lagos</td>
  <td>Abuja</td>
  <td>10kg</td>
  <td>2</td>
  <td>2546</td>
  <td className=' text-success'><div className=''><span type="button" class="fs-13 verified-btn bg-2 text-success border-0 rounded-pill p-1"><span className='dot mx-2'></span>Verified</span>
</div></td>
</tr>
<tr className=''>
  <td scope="row">005648752DB</td>
  <td>Feb 04th , 2023</td>
  <td>Lagos</td>
  <td>Abuja</td>
  <td>10kg</td>
  <td>2</td>
  <td>2546</td>
  <td className=' text-success'><div className=''><span type="button" class="fs-13 verified-btn bg-2 text-success border-0 rounded-pill p-1"><span className='dot mx-2'></span>Verified</span>
</div></td>
</tr>

</tbody>
</table>
     </div>
    </main>

    <ReweighingModal/>
</div>
  )
}

export default OriginHubWeighingListVerification