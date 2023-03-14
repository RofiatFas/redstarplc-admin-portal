import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import { PrivateRoute } from 'router/PrivateRoute';
// import Home from './components/Home';
import ManageCustomers from './components/CustomerPages/ManageCustomers';
import Login from './components/Login';
import Home from './components/Home';
import CorporateCustomer from './components/CustomerPages/CorporateCustomer';
import OriginHubArrivalBag from './components/OperationPages/Origin/OriginHubArrivalBag';
import OriginHub from './components/OperationPages/Origin/OriginHub';
import OriginHubWeighingList from './components/OperationPages/Origin/OriginHubWeighingList';
import OriginHubDebagging from './components/OperationPages/Origin/OriginHubDebagging';
import DestinationHubSorting from './components/OperationPages/Destination/DestinationHubSorting';
import OperationDeliveryStationArrival from './components/OperationPages/OperationDeliveryStationArrival';
import DeliveryStationDelivery from './components/OperationPages/Delivery/DeliveryStationDelivery';
// import CorporateCustomer from './components/customer/CorporateCustomer';

const RouterComponent = () => {
  return (
<Router>
    <Routes>
      <Route exact path="/" element={<Login />} />
       <Route path='/home' element={<Home />} />
       <Route path='/manage-customer' element={<ManageCustomers />} />
       <Route path='/corporate-customer' element={<CorporateCustomer />} />
       <Route path='/origin-hub-arrival' element={<OriginHub />} />
       <Route path='/origin-hub-weighing' element={<OriginHubWeighingList />} />
       <Route path='/origin-hub-debagging' element={<OriginHubDebagging />} />
       <Route path='/destination-hub-sorting' element={<DestinationHubSorting />} />
       <Route path='/delivery-station-arrival' element={<OperationDeliveryStationArrival />} />
       <Route path='/delivery-station-sorting' element={<DeliveryStationDelivery />} />
       {/* <Route path='/origin-hub-sorting' element={<OriginH />} /> */}
       {/* <Route path='/origin-hub-arrival-bag' element={<OriginHubArrivalBag />} /> */}

    </Routes>
</Router>
    )
}

export default RouterComponent