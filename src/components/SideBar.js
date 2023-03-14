import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightFromBracket, faChevronRight } from '@fortawesome/free-solid-svg-icons';

const SideBar = () => {
  return (
    <div>
  <nav className="navbar navbar-expand-lg bg-1 fixed-top">
  <div className="container-fluid">
  {/* <!-- Offcanvas Trigger --> */}
        <button class="navbar-toggler me-2" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample" >
          <span class="navbar-toggler-icon" data-bs-target="#offcanvasExample" ></span>
        </button>
        {/* <!-- Offcanvas Trigger --> */}
        <a class="navbar-brand text-white me-auto fs-6" href="#">RSE Ship Manager</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
  {/* <!-- Offcanvas Trigger --> */}
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mb-2 mb-lg-0 ms-auto">
        <li className="nav-item d-flex align-items-center">
        <img src='img/profilepicc.png' className="img-fluid img-rounded rounded-circle bg-warning profilepic" alt=""/>
          <a className="nav-link text-white" href="#">Aogunlabi Jones</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-white" href="#"> <FontAwesomeIcon icon={faArrowRightFromBracket} /><span className=''>Log out</span></a>
        </li>
      </ul>
        </div>
  </div>
</nav>

{/* <!-- Offcanvs --> */}
    
    <div class="offcanvas offcanvas-start sidebar-nav bg-light text-dark"  tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
      <div class="offcanvas-body p-0">
        <nav class="navbar-light">
          <ul class="navbar-nav">
            <li>
              <div class=" small fw-bold text-uppercase px-4 pt-3">Home</div>
            </li>
            <li className='mt-4'>
              <div class="fs-12 d-flex px-4 text-uppercase btn btn-primary bg-transparent border-0 text-dark" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
                Customer
                <div>
                <span className="ms-auto fs-12 "><FontAwesomeIcon icon={faChevronRight} style={{marginLeft:'150px'}}/></span>
                </div>
                </div>
              <div class="collapse" id="collapseExample">
  <div class="card card-body bg-transparent border-0">
    <ul className='list-unstyled fs-12' style={{cursor:'pointer',}}>
      <li id='customer'>
      <Link to="/manage-customer" className='text-decoration-none text-dark'>Manage customer</Link>
      </li>
      <li id='customer' className='mt-2'>
      <Link to="/corporate-customer" className='text-decoration-none text-dark'>Corporate customer</Link>
      </li>
      <li className='mt-2'>Manage discount</li>
      <li className='mt-2'>Allocation number</li>
    </ul>
  </div>
</div>
            </li>
            <li className=''>
              <div class="fs-12 d-flex px-4 text-uppercase btn btn-primary bg-transparent border-0 text-dark" data-bs-toggle="collapse" href="#collapseExample2" role="button" aria-expanded="false" aria-controls="collapseExample">
                Operations
                <div>
                <span className="ms-auto fs-12 "><FontAwesomeIcon icon={faChevronRight} style={{marginLeft:'140px'}}/></span>
                </div>
                </div>
              <div class="collapse" id="collapseExample2">
  <div class="card card-body bg-transparent border-0">
    <ul className='list-unstyled fs-12' style={{cursor:'pointer',}}>
      <li>
      <div class="fs-12 d-flex btn btn-primary bg-transparent border-0 text-dark" data-bs-toggle="collapse" href="#collapseExample3" role="button" aria-expanded="false" aria-controls="collapseExample">
               Origin&nbsp;hub
                <div>
                <span className="ms-auto fs-12 "><FontAwesomeIcon icon={faChevronRight} style={{marginLeft:'80px'}}/></span>
                </div>
                </div>
              <div class="collapse" id="collapseExample3">
  <div class="card card-body bg-transparent border-0">
    <ul className='list-unstyled fs-12' style={{cursor:'pointer',}}>
    <li id='origin' className='mt-2'>
      <Link to="/origin-hub-arrival" className='text-decoration-none text-dark'>Arrival</Link>
      </li>
    <li id='origin' className='mt-2'>
      <Link to="/origin-hub-weighing" className='text-decoration-none text-dark'>Weighing</Link>
      </li>
    <li id='origin' className='mt-2'>
      <Link to="/origin-hub-debagging" className='text-decoration-none text-dark'>Debagging</Link>
      </li>
    <li id='origin' className='mt-2'>
      <Link to="/origin-hub-sorting" className='text-decoration-none text-dark'>Sorting</Link>
      </li>
    </ul>
  </div>
             </div>
      </li>
      <li>
      <div class="fs-12 d-flex btn btn-primary bg-transparent border-0 text-dark" data-bs-toggle="collapse" href="#collapseExample4" role="button" aria-expanded="false" aria-controls="collapseExample">
      DBM hub
                <div>
                <span className="ms-auto fs-12 "><FontAwesomeIcon icon={faChevronRight} style={{marginLeft:'87px'}}/></span>
                </div>
                </div>
              <div class="collapse" id="collapseExample4">
  <div class="card card-body bg-transparent border-0">
    <ul className='list-unstyled fs-12' style={{cursor:'pointer',}}>
    <li id='origin' className='mt-2'>
      <Link to="/dmb-arrival" className='text-decoration-none text-dark'>Arrival</Link>
      </li>
    <li id='origin' className='mt-2'>
      <Link to="/dmb-sorting" className='text-decoration-none text-dark'>Sorting</Link>
      </li>
    </ul>
  </div>
             </div>
      </li>
      <li>
      <div class="fs-12 d-flex btn btn-primary bg-transparent border-0 text-dark" data-bs-toggle="collapse" href="#collapseExample5" role="button" aria-expanded="false" aria-controls="collapseExample">
      Destination&nbsp;hub
                <div>
                <span className="ms-auto fs-12 "><FontAwesomeIcon icon={faChevronRight} style={{marginLeft:'50px'}}/></span>
                </div>
                </div>
              <div class="collapse" id="collapseExample5">
  <div class="card card-body bg-transparent border-0">
    <ul className='list-unstyled fs-12' style={{cursor:'pointer',}}>
    <li id='destination' className='mt-2'>
      <Link to="/destination-hub-arrival" className='text-decoration-none text-dark'>Arrival</Link>
      </li>
    <li id='destination' className='mt-2'>
      <Link to="/destination-hub-weighing" className='text-decoration-none text-dark'>Weighing</Link>
      </li>
    <li id='destination' className='mt-2'>
      <Link to="/destination-hub-debagging" className='text-decoration-none text-dark'>Debagging</Link>
      </li>
    <li id='destination' className='mt-2'>
      <Link to="/destination-hub-sorting" className='text-decoration-none text-dark'>Sorting</Link>
      </li>
    </ul>
  </div>
             </div>
      </li>
      <li>
      <div class="fs-12 d-flex btn btn-primary bg-transparent border-0 text-dark" data-bs-toggle="collapse" href="#collapseExample6" role="button" aria-expanded="false" aria-controls="collapseExample">
      Delivery&nbsp;station
                <div>
                <span className="ms-auto fs-12 "><FontAwesomeIcon icon={faChevronRight} style={{marginLeft:'50px'}}/></span>
                </div>
                </div>
              <div class="collapse" id="collapseExample6">
  <div class="card card-body bg-transparent border-0">
    <ul className='list-unstyled fs-12' style={{cursor:'pointer',}}>
    <li id='delivery' className='mt-2'>
      <Link to="/delivery-station-arrival" className='text-decoration-none text-dark'>Arrival</Link>
      </li>
    <li id='delivery' className='mt-2'>
      <Link to="/delivery-station-sorting" className='text-decoration-none text-dark'>Sorting</Link>
      </li>
    </ul>
  </div>
             </div>
      </li>
    </ul>
  </div>
             </div>
            </li>
  
          </ul>
        </nav>
      </div>
    </div>
    {/* <!-- Offcanvs --> */}
    </div>
  )
}

export default SideBar