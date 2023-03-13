import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightFromBracket, faChevronRight } from '@fortawesome/free-solid-svg-icons';

function SideBar() {
  return (
    <div>
  <nav className="navbar navbar-expand-lg bg-1 ">
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
              <div class=" small fw-bold text-uppercase px-4">Home</div>
            </li>
            <li>
              <a class="nav-link px-3 my-2 sidebar-link" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
                <span class="me-2"><i class="bi bi-layout-split"></i></span>
                <span className='text-uppercase fs-12'>Customer</span>
                <span className="right-icon ms-auto fs-12"><FontAwesomeIcon icon={faChevronRight} /></span>
              </a>
              <div class="collapse" id="collapseExample">
                <div>
                  <ul class="navbar-nav ps-3">
                    <li>
                      <a class="nav-link px-3">
                        <span class="me-2"><i class="bi bi-layout-split"></i></span>
                        <span>Nested links</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
            <li>
              <a class="nav-link px-3 sidebar-link" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
                <span class="me-2"><i class="bi bi-layout-split"></i></span>
                <span className='text-uppercase fs-12'>Operations</span>
                <span className="right-icon ms-auto fs-12"><FontAwesomeIcon icon={faChevronRight} /></span>
              </a>
              <div class="collapse" id="collapseExample">
                <div>
                  <ul class="navbar-nav ps-3">
                    <li>
                      <a class="nav-link px-3">
                        <span class="me-2"><i class="bi bi-layout-split"></i></span>
                        <span>Nested links</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
            <li>
              <a class="nav-link px-3 sidebar-link" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
                <span class="me-2"><i class="bi bi-layout-split"></i></span>
                <span className='text-uppercase fs-12'>Service</span>
                <span className="right-icon ms-auto fs-12"><FontAwesomeIcon icon={faChevronRight} /></span>
              </a>
              <div class="collapse" id="collapseExample">
                <div>
                  <ul class="navbar-nav ps-3">
                    <li>
                      <a class="nav-link px-3">
                        <span class="me-2"><i class="bi bi-layout-split"></i></span>
                        <span>Nested links</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
            <li>
              <a class="nav-link px-3 sidebar-link" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
                <span class="me-2"><i class="bi bi-layout-split"></i></span>
                <span className='text-uppercase fs-12'>Report</span>
                <span className="right-icon ms-auto fs-12"><FontAwesomeIcon icon={faChevronRight} /></span>
              </a>
              <div class="collapse" id="collapseExample">
                <div>
                  <ul class="navbar-nav ps-3">
                    <li>
                      <a class="nav-link px-3">
                        <span class="me-2"><i class="bi bi-layout-split"></i></span>
                        <span>Nested links</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
            <li>
              <a class="nav-link px-3 sidebar-link" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
                <span class="me-2"><i class="bi bi-layout-split"></i></span>
                <span className='text-uppercase fs-12'>SETTINGS</span>
                <span className="right-icon ms-auto fs-12"><FontAwesomeIcon icon={faChevronRight} /></span>
              </a>
              <div class="collapse" id="collapseExample">
                <div>
                  <ul class="navbar-nav ps-3">
                    <li>
                      <a class="nav-link px-3">
                        <span class="me-2"><i class="bi bi-layout-split"></i></span>
                        <span>Nested links</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
            <li>
              <a class="nav-link px-3 sidebar-link" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
                <span class="me-2"><i class="bi bi-layout-split"></i></span>
                <span className='text-uppercase fs-12'>Center</span>
                <span className="right-icon ms-auto fs-12"><FontAwesomeIcon icon={faChevronRight} /></span>
              </a>
              <div class="collapse" id="collapseExample">
                <div>
                  <ul class="navbar-nav ps-3">
                    <li>
                      <a class="nav-link px-3">
                        <span class="me-2"><i class="bi bi-layout-split"></i></span>
                        <span>Nested links</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
            <li>
              <a class="nav-link px-3 sidebar-link" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
                <span class="me-2"><i class="bi bi-layout-split"></i></span>
                <span className='text-uppercase fs-12'>BROADCAST</span>
                <span className="right-icon ms-auto fs-12"><FontAwesomeIcon icon={faChevronRight} /></span>
              </a>
              <div class="collapse" id="collapseExample">
                <div>
                  <ul class="navbar-nav ps-3">
                    <li>
                      <a class="nav-link px-3">
                        <span class="me-2"><i class="bi bi-layout-split"></i></span>
                        <span>Nested links</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
            <li>
              <a class="nav-link px-3 sidebar-link" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
                <span class="me-2"><i class="bi bi-layout-split"></i></span>
                <span className='text-uppercase fs-12'>PROFILE</span>
                <span className="right-icon ms-auto fs-12"><FontAwesomeIcon icon={faChevronRight} /></span>
              </a>
              <div class="collapse" id="collapseExample">
                <div>
                  <ul class="navbar-nav ps-3">
                    <li>
                      <a class="nav-link px-3">
                        <span class="me-2"><i class="bi bi-layout-split"></i></span>
                        <span>Nested links</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
            <li>
              <a class="nav-link px-3 sidebar-link" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
                <span class="me-2"><i class="bi bi-layout-split"></i></span>
                <span className='text-uppercase fs-12'>SHIPMENT</span>
                <span className="right-icon ms-auto fs-12"><FontAwesomeIcon icon={faChevronRight} /></span>
              </a>
              <div class="collapse" id="collapseExample">
                <div>
                  <ul class="navbar-nav ps-3">
                    <li>
                      <a class="nav-link px-3">
                        <span class="me-2"><i class="bi bi-layout-split"></i></span>
                        <span>Nested links</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
            <li>
              <a class="nav-link px-3 sidebar-link" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
                <span class="me-2"><i class="bi bi-layout-split"></i></span>
                <span className='text-uppercase fs-12'>ADMIN</span>
                <span className="right-icon ms-auto fs-12"><FontAwesomeIcon icon={faChevronRight} /></span>
              </a>
              <div class="collapse" id="collapseExample">
                <div>
                  <ul class="navbar-nav ps-3">
                    <li>
                      <a class="nav-link px-3">
                        <span class="me-2"><i class="bi bi-layout-split"></i></span>
                        <span>Nested links</span>
                      </a>
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